import { useState, useRef, useCallback } from "react";
import { useDataLoad } from "../../hooks/useDataLoad";
import { Tabs, tableHeaders } from "../../tab-config";
import { MarginCell, Grid, HeaderCell } from "./styled";
import { Statuses } from "../../api/api-service";
import {
  CheckboxTableElement,
  CheckboxHeaderElement,
  HeaderElement,
  TableCertificateElement,
  TableElement,
  TableEmployeeElement,
  TableStatusElement,
  TableDropdownElement,
} from "./tableElements";
import { DropDownMenuItem } from "../shared/drop-down";
import { ReactComponent as DropDownMenuIcon } from "../../assets/print-icon.svg";

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
            <TableStatusElement
              key={key}
              ref={ref}
              checked={isChecked}
              $status={data as Statuses}
            >
              {data}
            </TableStatusElement>
          );
        }

        if (title === "certificate") {
          return (
            <TableCertificateElement key={key} ref={ref} checked={isChecked}>
              {data}
            </TableCertificateElement>
          );
        }

        if (title === "employee") {
          return (
            <TableEmployeeElement
              key={key}
              ref={ref}
              checked={isChecked}
              $index={i % 4}
            >
              {data}
            </TableEmployeeElement>
          );
        }

        return (
          <TableElement key={key} ref={ref} checked={isChecked}>
            {data}
          </TableElement>
        );
      });

      const menuItems: DropDownMenuItem[] = tableHeaders[tab]!.slice(0, 3).map(
        (label) => ({
          label,
          onClick: () => console.log(dataRow[label]),
          Icon: DropDownMenuIcon,
        })
      );

      return [
        <CheckboxTableElement
          key={`checkbox + ${dataRow.id}`}
          checked={isChecked}
          onChange={() => updateCheckedList(dataRow.id)}
        />,
        <TableDropdownElement
          key={`dropdown + ${dataRow.id}`}
          checked={isChecked}
          menuItems={menuItems}
        />,
        ...tableRowElements,
      ];
    })
    .flat();

  const headersElements = [
    <CheckboxHeaderElement
      key="checkbox"
      checked={dataList.length > 0 && checkedList.length === dataList.length}
      onChange={handleAllCheckClick}
    />,
    <HeaderCell key="dropdown" />,
    ...tableHeaders[tab]!.map((title) => (
      <HeaderElement key={title}>{title}</HeaderElement>
    )),
  ];

  const auxCols = headersElements.length - tableHeaders[tab]!.length;

  const marginRow = new Array(tableHeaders[tab]!.length + auxCols)
    .fill(null)
    .map((_, i) => <MarginCell key={i} />);

  return (
    <>
      <Grid $auxCols={auxCols} cols={tableHeaders[tab]!.length}>
        {marginRow}
        {headersElements}
        {tableElements}
      </Grid>
      {loading && <div>... loading ...</div>}
      {hasMore === false && <div>... There is no more items ...</div>}
      {error && <div>... error ...</div>}
    </>
  );
};
