import styled from "styled-components";
import { constants } from "./styled";
import { ReactComponent as DropDownButtonIcon } from "../../assets/sidebar-images/menu-icon-arrow-down.svg";
import { useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { DropDownMenuItem } from "../types/component-types";

const StyledDropDownMenu = styled.div<{ open: boolean }>`
  position: absolute;
  top: 50%;
  left: 15px;
  display: flex;
  flex-direction: column;
  transition: all 300ms linear;
  border: 1px solid
    ${({ open }) => (open ? constants.main.grey : "transparent")};
  border-bottom: unset;
  border-radius: 2px;
  overflow: hidden;
  max-height: ${({ open }) => (open ? "500px" : 0)};
  max-width: ${({ open }) => (open ? "500px" : 0)};
`;

const StyledDropDownMenuItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  background: ${constants.main.white};
  border-bottom: 1px solid ${constants.main.grey};
  padding: 4px 6px;
  cursor: pointer;
  transition: all 0.1s ease-in;

  &:hover {
    background: ${constants.main.grey};
  }

  &:active {
    gap: 14px;
    padding-left: 8px;
  }

  p {
    color: #534eb8;
    font-size: 12px;
    text-transform: uppercase;
    font-family: ${constants.fonts.inter};
    font-weight: 500;
    white-space: nowrap;
  }
`;

type DropDownMenuProps = {
  open: boolean;
  items: DropDownMenuItem[];
};
export const DropDownMenu = ({ open, items }: DropDownMenuProps) => {
  return (
    <StyledDropDownMenu open={open}>
      {items.map(({ label, onClick, Icon }, i) => (
        <StyledDropDownMenuItem key={label + "_" + i} onClick={onClick}>
          <Icon />
          <p>{label}</p>
        </StyledDropDownMenuItem>
      ))}
    </StyledDropDownMenu>
  );
};

const StyledDropDownButton = styled.button<{ open: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background: transparent;
  border-radius: 50%;
  padding: 0;
  position: absolute;
  top: -7px;
  z-index: 1;

  transition: all 0.3s ease-out;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(110%)
      ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(105%)
      ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }
`;

type DropDownButtonProps = {
  open: boolean;
  setOpen: () => void;
};
const DropDownButton = ({ open, setOpen }: DropDownButtonProps) => {
  return (
    <StyledDropDownButton open={open} onClick={setOpen}>
      <DropDownButtonIcon />
    </StyledDropDownButton>
  );
};

export const DropDownContainer = styled.div`
  position: relative;
  top: -2px;
  left: 12px;
`;

export const DropDown = ({ menuItems }: { menuItems: DropDownMenuItem[] }) => {
  const [open, setOpen] = useState(false);

  const ref = useOutsideClick(() => {
    console.log("Clicked outside of DropDown");
    setOpen(false);
  });

  return (
    <DropDownContainer ref={open ? ref : null}>
      <DropDownButton open={open} setOpen={() => setOpen(!open)} />
      <DropDownMenu open={open} items={menuItems} />
    </DropDownContainer>
  );
};
