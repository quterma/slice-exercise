import {
  StyledHeader,
  HeaderTitle,
  LogoPolygon,
  LogoRectangle,
  StyledBurger,
  BurgerChild,
  StyledSection,
  SectionHeader,
  SectionHeaderTitle,
  SectionItem,
  SectionItemTitle,
  SectionItemBadge,
  SectionItemBadgeText,
  SectionItemBadgeWrapper,
} from "./styled";
import { ReactComponent as TriangleIcon } from "../../assets/sidebar-images/triangle.svg";
import { ReactComponent as LockIcon } from "../../assets/sidebar-images/lock.svg";
import { Tabs } from "../../tab-config";
import { FunctionComponent, SVGProps } from "react";

type SidebarHeaderProps = {
  title: string;
  open: boolean;
};
export const SidebarHeader = ({ title, open }: SidebarHeaderProps) => (
  <StyledHeader open={open}>
    <LogoRectangle>
      <LogoPolygon />
    </LogoRectangle>
    <HeaderTitle>{title}</HeaderTitle>
  </StyledHeader>
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
    <BurgerChild open={open} />
    <BurgerChild />
    <BurgerChild open={open} $locked={locked} />
    <BurgerChild open={open} $locked={locked}>
      {locked ? <LockIcon /> : <TriangleIcon />}
    </BurgerChild>
  </StyledBurger>
);

export type SectionItemType = {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  tab: Tabs;
  setTab: () => void;
  badge?: string;
};
type SidebarSectionProps = {
  open: boolean;
  title: string;
  activeTab: Tabs;
  items: SectionItemType[];
  $first: boolean;
};
export const SidebarSection = ({
  open,
  activeTab,
  title,
  items,
  $first,
}: SidebarSectionProps) => (
  <StyledSection>
    <SectionHeader open={open} $first={$first}>
      {open && <SectionHeaderTitle>{title}</SectionHeaderTitle>}
    </SectionHeader>
    {items.map(({ Icon, tab, setTab, badge }, i) => (
      <SectionItem key={title + i} open={open} onClick={setTab}>
        <Icon />
        {open && (
          <SectionItemTitle $active={tab === activeTab}>{tab}</SectionItemTitle>
        )}
        {badge && open && (
          <SectionItemBadgeWrapper>
            <SectionItemBadge>
              <SectionItemBadgeText>{badge}</SectionItemBadgeText>
            </SectionItemBadge>
          </SectionItemBadgeWrapper>
        )}
      </SectionItem>
    ))}
  </StyledSection>
);
