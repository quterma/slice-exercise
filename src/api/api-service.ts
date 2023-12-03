import {
  CertificatesTableRow,
  PositionsTableRow,
  TableRowsArray,
  Tables,
  Tabs,
} from "../components/types/tab-types";
import { delay } from "../helpers/helpers";
import certificatesTable from "./../api/certificatesTable.json";

const exampleTable: PositionsTableRow[] = Array.from(Array(100).keys()).map(
  (rowIndex) => ({
    col0: `${rowIndex}-0`,
    col1: `${rowIndex}-1`,
    col2: `${rowIndex}-2`,
    col3: `${rowIndex}-3`,
    col4: `${rowIndex}-4`,
    table: Tabs.POSITIONS,
    id: rowIndex,
  })
);

const tables: Record<Tables, TableRowsArray> = {
  CERTIFICATES: certificatesTable as CertificatesTableRow[],
  POSITIONS: exampleTable,
};

export const getDataSlice = async (
  pageNumber: number = 0,
  limit: number,
  table: Tables
): Promise<TableRowsArray> => {
  await delay(1000);

  if (table === "CERTIFICATES")
    return tables.CERTIFICATES.slice(
      pageNumber * limit,
      pageNumber * limit + limit
    );

  if (table === "POSITIONS")
    return tables.POSITIONS.slice(
      pageNumber * limit,
      pageNumber * limit + limit
    );

  return [];
};
