import styled from "styled-components";
import { constants } from "../shared/styled";

export const Header = styled.header<{ open: boolean }>`
  display: flex;
  gap: 13px;
  align-items: center;
  padding-left: 6px;
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
  box-sizing: border-box;
  border-right: 1px solid ${constants.main.sidebarBorder};
  background-color: ${constants.main.white};
  transition: max-width 300ms linear;
  max-width: ${({ open }) => (open ? "300px" : "61px")};
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const StyledBurgerChild = styled.div<{
  open?: boolean;
  $locked?: boolean;
}>`
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
    width: ${({ open, $locked }) =>
      open ? ($locked ? "9px" : "17px") : "9px"};
  }

  &:nth-child(4) {
    position: absolute;
    right: ${({ open, $locked }) => (open ? ($locked ? "5px" : "8px") : "6px")};
    height: unset;
    background-color: unset;
    display: flex;
    align-items: center;
    max-width: ${({ $locked }) => ($locked ? "9px" : "4px")};
    top: ${({ $locked }) => ($locked ? "13px" : "unset")};
    transform: scaleX(${({ open }) => (open ? 1 : -1)});
  }
`;

export const StyledBurger = styled.button<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  width: 36px;
  height: 36px;
  transition: all 0.2s linear;
  padding: 0 0 0 ${({ open }) => (open ? "9px" : "13px")};
  background: ${constants.main.white};
  border: 1px solid ${constants.main.grey};
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 48px;
  right: -18px;
  z-index: 20;

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  }
`;
