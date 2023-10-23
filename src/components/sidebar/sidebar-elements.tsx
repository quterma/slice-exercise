import {
  Header,
  HeaderTitle,
  LogoPolygon,
  LogoRectangle,
  StyledBurger,
} from "./styled";
import { ReactComponent as TriangleIcon } from "../../assets/triangle.svg";

type SidebarHeaderProps = {
  title: string;
  open: boolean;
};
export const SidebarHeader = ({ title, open }: SidebarHeaderProps) => (
  <Header open={open}>
    <LogoRectangle>
      <LogoPolygon />
    </LogoRectangle>
    {open && <HeaderTitle>{title}</HeaderTitle>}
  </Header>
);

type SidebarBurgerProps = {
  open: boolean;
  setOpen: () => void;
};
export const SidebarBurger = ({ open, setOpen }: SidebarBurgerProps) => (
  <StyledBurger open={open} onClick={setOpen}>
    <div />
    <div />
    <div />
    <div>
      <TriangleIcon />
    </div>
  </StyledBurger>
);
