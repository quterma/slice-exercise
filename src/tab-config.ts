import { ReactComponent as ButtonIconPlus } from "./assets/button-icon-plus.svg";
import { HeaderButton } from "./components/main/main-header";
import { CertificatesTableRow } from "./api/api-service";

export enum Tabs {
  CERTIFICATES = "Certificates",
  OFFER_LETTERS = "Offer Letters",
  CONSULTING = "Consulting",
  POSITIONS = "Positions",
  SALARIES = "Salaries",
  EMPLOYEES = "Employees",
  SYSTEMS = "Systems",
  ONBOARDING = "Onboarding",
  USER_TIMELINE = "User Timeline",
  ISSUES = "Issues",
  FILINGS = "Filings",
  OFFERS = "Offers",
  INTERVIEWS = "Interviews",
}

export enum Sections {
  TALENT = "Talent",
  TALENT_POOL = "Talent Pool",
  HUMAN_RESOURCES = "Human Resources",
  SCENARIOS = "Scenarios",
}

type Tab = {
  title: Tabs;
  button: HeaderButton | null;
  contentType: "table" | null;
};

const getEmptyTabConfig = (tab: Tabs) => ({
  title: tab,
  button: null,
  contentType: null,
});

const emptyConfigs: Partial<Record<Tabs, Tab>> = (
  Object.values(Tabs) as Tabs[]
).reduce((acc, tab) => ({ ...acc, [tab]: getEmptyTabConfig(tab) }), {});

export const tabConfig: Partial<Record<Tabs, Tab>> = {
  ...emptyConfigs,
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
