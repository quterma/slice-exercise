import { useState, useRef, useCallback } from "react";
import { useDataLoad } from "../../hooks/useDataLoad";
import { Tabs, tableHeaders } from "../../tab-config";
import styled from "styled-components";
import { constants } from "../shared/styled";

const Grid = styled.div<{ cols: number }>`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
`;

const HeaderSpan = styled.span`
  padding: 8px 16px;
  background: ${constants.main.tableHeaderBG};
  text-transform: uppercase;
  font-family: "Inter";
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
  color: ${constants.main.tableHeaderText};
`;

const TableSpan = styled.span`
  padding: 8px 16px;
`;

type Props = {
  tab: Tabs;
};

export const Table = ({ tab }: Props) => {
  const [pageNumber, setPageNumber] = useState(0);

  const { dataList, hasMore, loading, error } = useDataLoad(pageNumber, 10);

  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
          }
        },
        { threshold: 0.5 }
      );

      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore]
  );

  if (!tableHeaders[tab])
    return <div>There is no header for current table!</div>;

  const headerSpans = tableHeaders[tab]!.map((title) => (
    <HeaderSpan key={title}>{title}</HeaderSpan>
  ));

  const tableSpans = dataList
    .map((dataRow, i) =>
      tableHeaders[tab]!.map((title, j) => (
        <TableSpan
          key={title + dataRow.id}
          ref={i === dataList.length - 5 && j === 0 ? lastItemRef : null}
        >
          {dataRow[title]}
        </TableSpan>
      ))
    )
    .flat();

  return (
    <>
      <Grid cols={tableHeaders[tab]!.length}>
        {headerSpans}
        {tableSpans}
      </Grid>
      {loading && <div>... loading ...</div>}
      {hasMore === false && <div>... There is no more items ...</div>}
      {error && <div>... error ...</div>}
    </>
  );
};
