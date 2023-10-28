import styled from "styled-components";
import { Statuses } from "../../api/api-service";

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

const avatarColors: { bg: string; border: string }[] = [
  { bg: "#E6EBFF", border: "#D5DBE580" },
  { bg: "#E9F4F1", border: "#D5DBE580" },
  { bg: "#E1F3FF", border: "#D5DBE580" },
  { bg: "#F6F9FE", border: "#D5DBE580" },
];

export const constants = {
  statusColors,
  avatarColors,
  button: {
    green: "#6CBE8C",
    white: "#FFFFFF",
  },
  main: {
    white: "#FFFFFF",
    blue: "#2B2A6A",
    grey: "#e7e6e4",
    tableHeaderBG: "#FAFAFA",
    tableHeaderText: "#787e8b",
    tableText: "#2E323E",
    checked: "#ffe3de",
    sidebarBorder: "#ABADBF",
    sidebarBurgerBar: "#0105D3",
    sidebarItem: "#E6EBFF",
    sidebarItemText: "#C2C2C2",
    sidebarBadge: "#CAF8CE",
  },
  fonts: {
    inter: "Inter",
  },
};

export const Button = styled.button<{ $primary?: boolean }>`
  background: ${({ $primary }) =>
    $primary ? constants.button.green : constants.button.white};
  color: ${({ $primary }) =>
    $primary ? constants.button.white : constants.button.green};

  font-family: ${constants.fonts.inter};
  font-size: 14px;
  padding: 8px 12px;
  border: 1px solid ${constants.button.green};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  transition: all 80ms ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
