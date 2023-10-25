import {
  Header,
  HeaderTitle,
  LogoPolygon,
  LogoRectangle,
  StyledBurger,
  StyledBurgerChild,
} from "./styled";
import { ReactComponent as TriangleIcon } from "../../assets/triangle.svg";
import { ReactComponent as LockIcon } from "../../assets/lock.svg";

type SidebarHeaderProps = {
  title: string;
  open: boolean;
};
export const SidebarHeader = ({ title, open }: SidebarHeaderProps) => (
  <Header open={open}>
    <LogoRectangle>
      <LogoPolygon />
    </LogoRectangle>
    <HeaderTitle>{title}</HeaderTitle>
  </Header>
);

type SidebarBurgerProps = {
  open: boolean;
  locked: boolean;
  handleClick: () => void;
};
export const SidebarBurger = ({
  open,
  locked,
  handleClick,
}: SidebarBurgerProps) => (
  <StyledBurger open={open} onClick={handleClick}>
    <StyledBurgerChild open={open} />
    <StyledBurgerChild />
    <StyledBurgerChild open={open} $locked={locked} />
    <StyledBurgerChild open={open} $locked={locked}>
      {locked ? <LockIcon /> : <TriangleIcon />}
    </StyledBurgerChild>
  </StyledBurger>
);
