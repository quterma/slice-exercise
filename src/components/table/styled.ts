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
  padding: 12px 10px;
`;

export const HeaderCell = styled(Cell)`
  background-color: ${constants.main.tableHeaderBG};
`;

export const TableCell = styled(Cell)`
  border-bottom: 1px solid ${constants.main.grey};
`;

export const InnerCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 4px 0;
`;

export const InnerStatusCell = styled(InnerCell)<{ $status: Statuses }>`
  gap: 8px;
  padding: 4px 8px;
  background-color: ${({ $status }) => constants.statusColors[$status].bg};
  border-radius: 4px;
`;

const CellText = styled.p`
  font-family: ${constants.fonts.inter};
  font-weight: 500;
  white-space: nowrap;
  margin: 0;
`;

export const HeaderText = styled(CellText)`
  text-transform: uppercase;
  color: ${constants.main.tableHeaderText};
  font-size: 12px;
`;

export const TableText = styled(CellText)`
  text-transform: capitalize;
  color: ${constants.main.tableText};
  font-size: 14px;
`;

export const StatusText = styled(TableText)<{ $status: Statuses }>`
  color: ${({ $status }) => constants.statusColors[$status].color};
`;

export const StatusDot = styled.div<{ $status: Statuses }>`
  background-color: ${({ $status }) => constants.statusColors[$status].color};
  border-radius: 2px;
  width: 6px;
  height: 6px;
`;
