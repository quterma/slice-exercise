import styled, { keyframes } from "styled-components";
import { constants } from "../shared/styled";
import { Statuses } from "../../api/api-service";

export const Grid = styled.div<{ $auxCols: number; cols: number }>`
  display: grid;
  grid-template-columns: ${({ $auxCols }) =>
      $auxCols > 0 ? `repeat(${$auxCols}, 60px)` : null} repeat(
      ${({ cols }) => cols},
      1fr
    );
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
  /* scrollbar-color: red orange;
  scrollbar-width: thin; */
`;

const Cell = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 12px 10px;
`;

export const MarginCell = styled(Cell)`
  background-color: ${constants.main.white};
  height: 2px;
`;

export const HeaderCell = styled(Cell)<{
  isFirstColumn?: boolean;
}>`
  background-color: ${constants.main.tableHeaderBG};
  position: sticky;
  top: 0;
  z-index: 10;
  padding-left: ${({ isFirstColumn }) => (isFirstColumn ? "32px" : "12px")};
`;

export const TableCell = styled(Cell)<{
  checked: boolean;
  isFirstColumn?: boolean;
}>`
  border-bottom: 1px solid ${constants.main.grey};
  background-color: ${({ checked }) =>
    checked ? constants.main.checked : constants.main.white};
  padding-left: ${({ isFirstColumn }) => (isFirstColumn ? "32px" : "12px")};
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

export const InnerEmployeeCell = styled(InnerCell)`
  gap: 10px;
`;

export const InnerCertificateCell = styled(InnerCell)`
  padding: 2px 8px;
  background-color: ${constants.main.grey};
  border-radius: 6px;
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

export const EmployeeAvatarText = styled(CellText)`
  text-transform: uppercase;
  color: ${constants.main.tableText};
  font-size: 12px;
  font-weight: 600;
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

export const EmployeeAvatar = styled.div<{ $index: number }>`
  background-color: ${({ $index }) => constants.avatarColors[$index].bg};
  border: 1px solid ${({ $index }) => constants.avatarColors[$index].border};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 6px 4px;
`;

export const InputCheckBox = styled.input.attrs({ type: "checkbox" })`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

export const Indicator = styled.div`
  width: 16px;
  height: 16px;
  background: ${constants.main.white};
  position: absolute;
  top: 0em;
  border: 1px solid #757575;
  border-radius: 2px;

  ${Label}:hover & {
    background: ${constants.main.grey};
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${InputCheckBox}:checked + &::after {
    display: block;
    left: 4px;
    width: 35%;
    height: 70%;
    border: solid ${constants.main.blue};
    border-width: 0 2px 2px 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
`;
