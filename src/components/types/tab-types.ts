import { Tab } from "./component-types";
import { PickKey } from "./types";

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

export enum Statuses {
  PENDING_SIGNATURES = "Pending Signatures",
  APPROVED_BY_CORP = "Approved By Corp.",
  OFFERED = "Offered",
}

export type CertificatesTableRow = {
  table: Tabs.CERTIFICATES;
  employee: string;
  status: string;
  geo: string;
  certificate: string;
  source: string;
  plan: string;
  date: string;
  prefix: string;
  id: number;
};

export type PositionsTableRow = {
  table: Tabs.POSITIONS;
  col0: string;
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  id: number;
};

export type TableRow = CertificatesTableRow | PositionsTableRow;

export type TableRowsArray = CertificatesTableRow[] | PositionsTableRow[];

export type Tables = PickKey<typeof Tabs, "CERTIFICATES" | "POSITIONS">;

export type TabConfigRecord = Record<keyof typeof Tabs, Tab>;
