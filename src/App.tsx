import styled from "styled-components";
import { Main } from "./components/main/main";
import { Tabs } from "./tab-config";
import { useState } from "react";
import { Sidebar } from "./components/sidebar/sidebar";

const Wrapper = styled.div`
  display: flex;
`;

export const App = () => {
  const [tab, setTab] = useState<Tabs>(Tabs.CERTIFICATES);

  return (
    <Wrapper>
      <Sidebar />
      <Main tab={tab} />
    </Wrapper>
  );
};
