import styled from "styled-components";
import { constants } from "../shared/styled";
import { Statuses } from "../../api/api-service";

export const Grid = styled.div<{ cols: number }>`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
`;

const Cell = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 16px;
`;

export const HeaderCell = styled(Cell)`
  background-color: ${constants.main.tableHeaderBG};
`;

export const TableCell = styled(Cell)`
  border-bottom: 1px solid ${constants.main.grey};
`;

const CellText = styled.p`
  font-family: ${constants.fonts.inter};
  font-weight: 500;
  white-space: nowrap;
  margin: 0;
  padding: 4px 8px;
  text-transform: capitalize;
`;

export const HeaderText = styled(CellText)`
  text-transform: uppercase;
  color: ${constants.main.tableHeaderText};
  font-size: 12px;
`;

export const TableText = styled(CellText)`
  color: ${constants.main.tableText};
  font-size: 14px;
`;

const statusColors: Record<Statuses, { color: string; bg: string }> = {
  "Pending Signatures": {
    color: "#9D664E",
    bg: "#FEBA9D",
  },
  "Approved By Corp.": {
    color: "#B98B00",
    bg: "#FFD489",
  },
  Offered: {
    color: "#273E9A",
    bg: "#C5D9FC",
  },
};

export const StatusText = styled(TableText)<{ $status: Statuses }>`
  color: ${({ $status }) => statusColors[$status].color};
  background-color: ${({ $status }) => statusColors[$status].bg};
  border-radius: 4px;

  &:before {
    content: "";
    border: 2px solid ${({ $status }) => statusColors[$status].color};
    margin-right: 5px;
  }
`;
