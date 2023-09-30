import styled from "styled-components";

import { Table } from "./components/table/table";
import { TableHeader } from "./components/table/table-header";
import { tabConfig } from "./tab-config";

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const App = () => {
  return (
    <Main>
      <TableHeader {...tabConfig.certificates} />
      <Table />
    </Main>
  );
};
