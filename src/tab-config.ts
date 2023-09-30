import { ReactComponent as ButtonIconPlus } from "./assets/button-icon-plus.svg";
import { HeaderButton } from "./components/main/main-header";
import { CertificatesTableRow } from "./api/api-service";

export enum Tabs {
  EMPTY = "Empty",
  CERTIFICATES = "Certificates",
}

type Tab = {
  title: Tabs;
  button: HeaderButton | null;
  contentType: "table" | null;
};

export const tabConfig: Record<Tabs, Tab> = {
  [Tabs.EMPTY]: {
    title: Tabs.EMPTY,
    button: null,
    contentType: null,
  },
  [Tabs.CERTIFICATES]: {
    title: Tabs.CERTIFICATES,
    button: {
      ButtonIcon: ButtonIconPlus,
      buttonTitle: "Create New",
      handleClick: () => console.log("certificates header button clicked"),
    },
    contentType: "table",
  },
};

export const tableHeaders: Partial<
  Record<Tabs, Array<keyof CertificatesTableRow>>
> = {
  [Tabs.CERTIFICATES]: [
    "employee",
    "status",
    "geo",
    "certificate",
    "source",
    "plan",
    "date",
    "prefix",
  ],
};
