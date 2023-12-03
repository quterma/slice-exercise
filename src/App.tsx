import styled from "styled-components";
import { Main } from "./components/main/main";
import { useState } from "react";
import { Sidebar } from "./components/sidebar/sidebar";
import { Tabs } from "./components/types/tab-types";

const Wrapper = styled.div`
  display: flex;
`;

export const App = () => {
  const [tab, setTab] = useState<Tabs>(Tabs.CERTIFICATES);

  return (
    <Wrapper>
      <Sidebar activeTab={tab} setTab={setTab} />
      <Main tab={tab} />
    </Wrapper>
  );
};
