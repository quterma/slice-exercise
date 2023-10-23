import styled from "styled-components";
import { constants } from "../shared/styled";

export const Header = styled.header<{ open: boolean }>`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: ${({ open }) => (open ? "start" : "center")};
`;

export const LogoRectangle = styled.div`
  background-color: ${constants.main.blue};
  border-radius: 4px;
  position: relative;
  min-width: 33px;
  width: 33px;
  height: 33px;
  display: flex;
  justify-content: center;
`;

export const LogoPolygon = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 16px solid ${constants.main.white};
  position: absolute;
  top: 0;
  transform: translateY(50%);
`;

export const HeaderTitle = styled.p`
  color: ${constants.main.blue};
  font-family: "Nunito Sans";
  font-size: 25px;
  font-weight: 900;
  line-height: 25px;
  letter-spacing: 0em;
  margin: 0;
`;

export const SidebarContainer = styled.div<{ open: boolean }>`
  border-right: 1px solid ${constants.main.sidebarBorder};
  background-color: ${constants.main.white};
  min-width: 61px;
  max-width: ${({ open }) => (open ? "300px" : "61px")};
  overflow-x: hidden;
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledBurger = styled.button<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  width: 36px;
  height: 36px;
  transition: all 0.3s linear;
  padding: 0 0 0 ${({ open }) => (open ? "9px" : "13px")};
  background: ${constants.main.white};
  border: 1px solid ${constants.main.grey};
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  &:focus {
    outline: none;
  }

  div {
    height: 3px;
    background-color: ${constants.main.blue};
    border-radius: 3px;
    transition: all 0.3s linear;

    &:first-child {
      width: ${({ open }) => (open ? "17px" : "9px")};
    }

    &:nth-child(2) {
      width: 9px;
    }

    &:nth-child(3) {
      width: ${({ open }) => (open ? "17px" : "9px")};
    }

    &:nth-child(4) {
      position: absolute;
      right: ${({ open }) => (open ? "8px" : "6px")};
      height: unset;
      background-color: unset;
      display: flex;
      align-items: center;
      max-width: 4px;
      transform: scaleX(${({ open }) => (open ? 1 : -1)});
    }
  }
`;
