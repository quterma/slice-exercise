import { ReactComponent as ButtonIconPlus } from "./assets/button-icon-plus.svg";
import { HeaderButton } from "./components/table/table-header";

export enum Tabs {
  EMPTY = "Empty",
  CERTIFICATES = "Certificates",
}

type Tab = {
  title: Tabs;
  button: HeaderButton | null;
};

export const tabConfig: Record<Tabs, Tab> = {
  [Tabs.EMPTY]: {
    title: Tabs.EMPTY,
    button: null,
  },
  [Tabs.CERTIFICATES]: {
    title: Tabs.CERTIFICATES,
    button: {
      ButtonIcon: ButtonIconPlus,
      buttonTitle: "Create New",
      handleClick: () => console.log("certificates header button clicked"),
    },
  },
};
