import { delay } from "../helpers/helpers";
import table from "./../api/table.json";

export enum Statuses {
  PENDING_SIGNATURES = "Pending Signatures",
  APPROVED_BY_CORP = "Approved By Corp.",
  OFFERED = "Offered",
}

export type CertificatesTableRow = {
  employee: string;
  geo: string;
  certificate: string;
  source: string;
  plan: string;
  date: string;
  prefix: string;
  status: string;
};

export const getDataSlice = async (
  pageNumber: number = 0,
  limit: number
): Promise<Array<CertificatesTableRow & { id: number }>> => {
  await delay(1000);
  return table.slice(pageNumber * limit, pageNumber * limit + limit);
};
