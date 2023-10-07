import { useState, useRef, useCallback } from "react";
import { useDataLoad } from "../../hooks/useDataLoad";
import { Tabs, tableHeaders } from "../../tab-config";
import { Grid } from "./styled";
import { Statuses } from "../../api/api-service";
import {
  HeaderElement,
  TableCertificateElement,
  TableElement,
  TableEmployeeElement,
  TableStatusElement,
} from "./tableElements";

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

  const tableElements = dataList
    .map((dataRow, i) =>
      tableHeaders[tab]!.map((title, j) => {
        const key = title + dataRow.id;
        const ref = i === dataList.length - 5 && j === 0 ? lastItemRef : null;
        const data = dataRow[title];

        if (title === "status") {
          return (
            <TableStatusElement key={key} ref={ref} $status={data as Statuses}>
              {data}
            </TableStatusElement>
          );
        }

        if (title === "certificate") {
          return (
            <TableCertificateElement key={key} ref={ref}>
              {data}
            </TableCertificateElement>
          );
        }

        if (title === "employee") {
          return (
            <TableEmployeeElement key={key} ref={ref} index={i % 4}>
              {data}
            </TableEmployeeElement>
          );
        }

        return (
          <TableElement key={key} ref={ref}>
            {data}
          </TableElement>
        );
      })
    )
    .flat();

  return (
    <>
      <Grid cols={tableHeaders[tab]!.length}>
        {tableHeaders[tab]!.map((title) => (
          <HeaderElement key={title}>{title}</HeaderElement>
        ))}
        {tableElements}
      </Grid>
      {loading && <div>... loading ...</div>}
      {hasMore === false && <div>... There is no more items ...</div>}
      {error && <div>... error ...</div>}
    </>
  );
};
