import styled from "styled-components";

import { Table } from "../table/table";
import { MainHeader } from "./main-header";
import { Tabs, tabConfig } from "../../tab-config";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-x: auto;
`;

type Props = {
  tab: Tabs;
};

export const Main = ({ tab }: Props) => {
  const { title, button, contentType } = tabConfig[tab];

  let content = null;
  if (contentType === "table") content = <Table tab={tab} />;

  return (
    <Container>
      <MainHeader {...{ title, button }} />
      {content}
    </Container>
  );
};
