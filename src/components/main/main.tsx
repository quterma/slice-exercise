import styled from "styled-components";

import { Table } from "../table/table";
import { TableHeader } from "../table/table-header";
import { Tabs, tabConfig } from "../../tab-config";

const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

type Props = {
  tab: Tabs;
};

export const Main = ({ tab }: Props) => {
  return (
    <Container>
      <TableHeader {...tabConfig[tab]} />
      <Table />
    </Container>
  );
};
