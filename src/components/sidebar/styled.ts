import styled from "styled-components";
import { constants } from "../shared/styled";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 0 0 20px 6px;
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
`;

export const SidebarContainer = styled.aside<{ open: boolean }>`
  box-sizing: border-box;
  border-right: 1px solid ${constants.main.sidebarBorder};
  background-color: ${constants.main.white};
  transition: all 300ms linear;
  max-width: ${({ open }) => (open ? "264px" : "61px")};
  min-width: ${({ open }) => (open ? "264px" : "61px")};
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

export const BurgerChild = styled.div<{
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

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SectionHeader = styled.div<{ $first: boolean; open: boolean }>`
  display: flex;
  padding: 7px;
  background-color: ${constants.main.white};
  border-top: ${({ open, $first }) =>
    open || $first ? "unset" : `1px solid ${constants.main.blue}`};
`;

export const SectionHeaderTitle = styled.p`
  font-family: ${constants.fonts.inter};
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${constants.main.sidebarBorder};
`;

export const SectionItem = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ open }) => (open ? "start" : "center")};
  padding: 8px 10px;
  gap: 8px;
  border-radius: 4px;
  background-color: ${constants.main.white};
  cursor: pointer;

  &:hover {
    background-color: ${constants.main.sidebarItem};
  }
`;

export const SectionItemTitle = styled.p<{ $active: boolean }>`
  font-family: ${constants.fonts.inter};
  font-size: 14px;
  font-weight: 500;
  flex: 1;
  color: ${({ $active }) =>
    $active ? constants.main.blue : constants.main.sidebarItemText};
`;

export const SectionItemBadge = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
  background-color: ${constants.main.sidebarBadge};
`;

export const SectionItemBadgeText = styled.p`
  color: ${constants.main.blue};
  font-family: ${constants.fonts.inter};
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const StyledFooter = styled.div`
  display: flex;
  padding: 20px 0 0 6px;
  gap: 12px;
`;

export const FooterLogoRound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${constants.main.blue};
`;

export const FooterLogoText = styled.p`
  color: ${constants.main.white};
  font-family: ${constants.fonts.inter};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding-left: 2px;
`;

export const FooterTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  gap: 5px;
`;

export const FooterText = styled.p`
  color: ${constants.main.blue};
  font-family: ${constants.fonts.inter};
  font-size: 14px;
  font-weight: 700;

  &:first-child {
    font-weight: 700;
  }

  &:nth-child(2) {
    font-weight: 400;
  }
`;

export const StyledDotsButton = styled.button<{ open: boolean }>`
  display: flex;
  transition: all 0.2s linear;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  height: 24px;
  width: 24px;
  padding: 0;
  background: ${constants.main.white};
  cursor: pointer;
  border: unset;
  border-radius: 50%;
  transform: rotate(${({ open }) => (open ? "-90deg" : "0deg")});

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

export const Dot = styled.div`
  height: 3px;
  width: 3px;
  background-color: ${constants.main.sidebarBorder};
  border-radius: 50%;
`;
