import { useState, useRef, useCallback } from "react";
import { useDataLoad } from "../../hooks/useDataLoad";
import { Tabs, tableHeaders } from "../../tab-config";
import {
  Grid,
  HeaderCell,
  HeaderText,
  StatusText,
  TableCell,
  TableText,
} from "./styled";
import { Statuses } from "../../api/api-service";

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
    <HeaderCell key={title}>
      <HeaderText>{title}</HeaderText>
    </HeaderCell>
  ));

  const tableSpans = dataList
    .map((dataRow, i) =>
      tableHeaders[tab]!.map((title, j) => {
        const key = title + dataRow.id;
        const ref = i === dataList.length - 5 && j === 0 ? lastItemRef : null;
        const data = dataRow[title];

        return (
          <TableCell key={key}>
            {title === "status" ? (
              <StatusText ref={ref} $status={data as Statuses}>
                {data}
              </StatusText>
            ) : (
              <TableText ref={ref}>{data}</TableText>
            )}
          </TableCell>
        );
      })
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
