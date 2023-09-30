import { Main } from "./components/main/main";
import { Tabs } from "./tab-config";
import { useState } from "react";

export const App = () => {
  const [tab, setTab] = useState<Tabs>(Tabs.CERTIFICATES);

  return <Main tab={tab} />;
};
