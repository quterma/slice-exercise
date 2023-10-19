import { useState, useRef, useCallback } from "react";
import { useDataLoad } from "../../hooks/useDataLoad";
import { Tabs, tableHeaders } from "../../tab-config";
import { Grid, GridScroller } from "./styled";
import { Statuses } from "../../api/api-service";
import {
  CheckboxTableElement,
  CheckboxHeaderElement,
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
  const [checkedList, setCheckedList] = useState<number[]>([]);

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

  const updateCheckedList = (id: number) => {
    const idElementIndex = checkedList.findIndex((el) => el === id);

    if (idElementIndex < 0) {
      setCheckedList([...checkedList, id]);
    } else {
      const newCheckList = checkedList.slice();
      newCheckList.splice(idElementIndex, 1);

      setCheckedList(newCheckList);
    }
  };

  const handleAllCheckClick = () => {
    if (checkedList.length < dataList.length) {
      setCheckedList(dataList.map((row) => row.id));
    } else {
      setCheckedList([]);
    }
  };

  if (!tableHeaders[tab])
    return <div>There is no header for current table!</div>;

  const tableElements = dataList
    .map((dataRow, i) => {
      const isChecked = checkedList.includes(dataRow.id);

      const tableRowElements = tableHeaders[tab]!.map((title, j) => {
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
            <TableEmployeeElement key={key} ref={ref} $index={i % 4}>
              {data}
            </TableEmployeeElement>
          );
        }

        return (
          <TableElement key={key} ref={ref}>
            {data}
          </TableElement>
        );
      });

      const checkBoxElement = (
        <CheckboxTableElement
          key={`checkbox + ${dataRow.id}`}
          checked={isChecked}
          onChange={() => updateCheckedList(dataRow.id)}
        />
      );

      return [checkBoxElement, ...tableRowElements];
    })
    .flat();

  const headersElements = [
    <CheckboxHeaderElement
      key="checkbox"
      checked={dataList.length > 0 && checkedList.length === dataList.length}
      onChange={handleAllCheckClick}
    />,
    ...tableHeaders[tab]!.map((title) => (
      <HeaderElement key={title}>{title}</HeaderElement>
    )),
  ];

  return (
    <>
      {/* <GridScroller /> */}
      <Grid auxCols={1} cols={tableHeaders[tab]!.length}>
        {headersElements}
        {tableElements}
      </Grid>
      {loading && <div>... loading ...</div>}
      {hasMore === false && <div>... There is no more items ...</div>}
      {error && <div>... error ...</div>}
    </>
  );
};
