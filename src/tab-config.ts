import { ReactComponent as ButtonIconPlus } from "./assets/button-icon-plus.svg";
import {
  CertificatesTableRow,
  PositionsTableRow,
  TabConfigRecord,
  TableRow,
  Tabs,
} from "./components/types/tab-types";

const getEmptyTabConfig = (tab: keyof typeof Tabs) => ({
  title: Tabs[tab],
  button: null,
  contentType: null,
});

const emptyConfigs: TabConfigRecord = (
  Object.keys(Tabs) as Array<keyof typeof Tabs>
).reduce(
  (acc, tab) => ({ ...acc, [tab]: getEmptyTabConfig(tab) }),
  <TabConfigRecord>{}
);

export const tabConfig: TabConfigRecord = {
  ...emptyConfigs,
  CERTIFICATES: {
    title: Tabs.CERTIFICATES,
    button: {
      ButtonIcon: ButtonIconPlus,
      buttonTitle: "Create New",
      handleClick: () => console.log("certificates header button clicked"),
    },
    contentType: "table",
  },
};

export type TableHeaders = {
  CERTIFICATES: Array<keyof Omit<CertificatesTableRow, "id" | "table">>;
  POSITIONS: Array<keyof Omit<PositionsTableRow, "id" | "table">>;
};

export type TableHeadersList =
  | keyof Omit<CertificatesTableRow, "id" | "table">
  | keyof Omit<PositionsTableRow, "id" | "table">;

export const tableHeaders: TableHeaders = {
  CERTIFICATES: [
    "employee",
    "status",
    "geo",
    "certificate",
    "source",
    "plan",
    "date",
    "prefix",
  ],
  POSITIONS: ["col0", "col1", "col2", "col3", "col4"],
};
