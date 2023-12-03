import styled from "styled-components";

import { Table } from "../table/table";
import { MainHeader } from "./main-header";
import { tabConfig } from "../../tab-config";
import { Tables, Tabs } from "../types/tab-types";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-x: auto;
`;

type Props = {
  tab: keyof typeof Tabs;
};

export const Main = ({ tab }: Props) => {
  const { title, button, contentType } = tabConfig[tab]!;

  let content = null;
  if (contentType === "table") content = <Table tab={tab as Tables} />;

  return (
    <Container>
      <MainHeader {...{ title, button }} />
      {content}
    </Container>
  );
};
