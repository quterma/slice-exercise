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
  StyledFooter,
  FooterLogoRound,
  FooterLogoText,
  FooterTextContainer,
  FooterText,
  StyledDotsButton,
  Dot,
} from "./styled";
import { ReactComponent as TriangleIcon } from "../../assets/sidebar-images/triangle.svg";
import { ReactComponent as LockIcon } from "../../assets/sidebar-images/lock.svg";
import { useState } from "react";
import { SectionItemType } from "../types/component-types";
import { Tabs } from "../types/tab-types";

type SidebarHeaderProps = {
  title: string;
  open: boolean;
};
export const SidebarHeader = ({ title, open }: SidebarHeaderProps) => (
  <StyledHeader>
    <LogoRectangle>
      <LogoPolygon />
    </LogoRectangle>
    {open && <HeaderTitle>{title}</HeaderTitle>}
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
          <SectionItemBadge>
            <SectionItemBadgeText>{badge}</SectionItemBadgeText>
          </SectionItemBadge>
        )}
      </SectionItem>
    ))}
  </StyledSection>
);

type DotsButtonProps = {
  open: boolean;
  handleClick: () => void;
};
const DotsButton = ({ open, handleClick }: DotsButtonProps) => (
  <StyledDotsButton open={open} onClick={handleClick}>
    <Dot />
    <Dot />
    <Dot />
  </StyledDotsButton>
);

const FooterMenuWrapper = () => {
  const [open, setOpen] = useState(false);
  const toggleopen = () => {
    console.log("Footer Menu Button Clicked");

    setOpen(!open);
  };

  return <DotsButton open={open} handleClick={toggleopen} />;
};

type SidebarFooterProps = {
  open: boolean;
  logoText: string;
  title: string;
  subtitle: string;
};
export const SidebarFooter = ({
  logoText,
  title,
  subtitle,
  open,
}: SidebarFooterProps) => (
  <StyledFooter>
    <FooterLogoRound>
      <FooterLogoText>{logoText}</FooterLogoText>
    </FooterLogoRound>
    {open && (
      <FooterTextContainer>
        <FooterText>{title}</FooterText>
        <FooterText>{subtitle}</FooterText>
      </FooterTextContainer>
    )}
    {open && <FooterMenuWrapper />}
  </StyledFooter>
);
