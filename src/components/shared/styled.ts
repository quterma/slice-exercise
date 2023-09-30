import styled from "styled-components";

export const constants = {
  button: {
    green: "#6CBE8C",
    white: "#FFFFFF",
  },
  main: {
    blue: "#2B2A6A",
    grey: "#e7e6e4",
    tableHeaderBG: "#FAFAFA",
    tableHeaderText: "#787e8b",
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
