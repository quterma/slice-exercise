import { useState } from "react";
import {
  SectionItemType,
  SidebarBurger,
  SidebarHeader,
  SidebarSection,
} from "./sidebar-elements";
import { SidebarContainer } from "./styled";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { Sections, Tabs } from "../../tab-config";
import { ReactComponent as CertificatesIcon } from "../../assets/sidebar-images/certificates-icon.svg";
import { ReactComponent as OfferLettersIcon } from "../../assets/sidebar-images/offer-letters-icon.svg";
import { ReactComponent as ConsultingIcon } from "../../assets/sidebar-images/consulting-icon.svg";
import { ReactComponent as EmployeesIcon } from "../../assets/sidebar-images/employees-icon.svg";
import { ReactComponent as FillingsIcon } from "../../assets/sidebar-images/filings.svg";
import { ReactComponent as InterviewsIcon } from "../../assets/sidebar-images/interviews-icon.svg";
import { ReactComponent as IssuesIcon } from "../../assets/sidebar-images/issues-icon.svg";
import { ReactComponent as OffersIcon } from "../../assets/sidebar-images/offers-icon.svg";
import { ReactComponent as OnboardingIcon } from "../../assets/sidebar-images/onboarding-icon.svg";
import { ReactComponent as PositionsIcon } from "../../assets/sidebar-images/positions-icon.svg";
import { ReactComponent as SalariesIcon } from "../../assets/sidebar-images/salaries-icon.svg";
import { ReactComponent as SystemsIcon } from "../../assets/sidebar-images/systems-icon.svg";
import { ReactComponent as UserTimelineIcon } from "../../assets/sidebar-images/user-timeline-icon.svg";

const badges = {
  COMING_SOON: "coming soon",
};

const sideBarSections: Record<Sections, Omit<SectionItemType, "setTab">[]> = {
  [Sections.TALENT]: [
    {
      tab: Tabs.CERTIFICATES,
      Icon: CertificatesIcon,
    },
    {
      tab: Tabs.OFFER_LETTERS,
      Icon: OfferLettersIcon,
    },
    {
      tab: Tabs.CONSULTING,
      Icon: ConsultingIcon,
      badge: badges.COMING_SOON,
    },
  ],
  [Sections.TALENT_POOL]: [
    {
      tab: Tabs.POSITIONS,
      Icon: PositionsIcon,
    },
    {
      tab: Tabs.SALARIES,
      Icon: SalariesIcon,
    },
    {
      tab: Tabs.EMPLOYEES,
      Icon: EmployeesIcon,
    },
    {
      tab: Tabs.SYSTEMS,
      Icon: SystemsIcon,
    },
  ],
  [Sections.HUMAN_RESOURCES]: [
    {
      tab: Tabs.ONBOARDING,
      Icon: OnboardingIcon,
    },
    {
      tab: Tabs.USER_TIMELINE,
      Icon: UserTimelineIcon,
    },
    {
      tab: Tabs.ISSUES,
      Icon: IssuesIcon,
      badge: badges.COMING_SOON,
    },
    {
      tab: Tabs.FILINGS,
      Icon: FillingsIcon,
      badge: badges.COMING_SOON,
    },
  ],
  [Sections.SCENARIOS]: [
    {
      tab: Tabs.OFFERS,
      Icon: OffersIcon,
      badge: badges.COMING_SOON,
    },
    {
      tab: Tabs.INTERVIEWS,
      Icon: InterviewsIcon,
      badge: badges.COMING_SOON,
    },
  ],
};

type SidebarProps = {
  activeTab: Tabs;
  setTab: (tab: Tabs) => void;
};
export const Sidebar = ({ activeTab, setTab }: SidebarProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [locked, setLocked] = useState<boolean>(false);

  const togleLock = () => setLocked(!locked);

  const ref = useOutsideClick(() => {
    console.log("Clicked outside of Sidebar");
    setOpen(false);
  });

  const handleClick = open ? togleLock : () => setOpen(!open);

  const sections = Object.keys(sideBarSections).map((sectionTitle, i) => {
    const items: SectionItemType[] = sideBarSections[
      sectionTitle as Sections
    ].map((item) => ({ ...item, setTab: () => setTab(item.tab) }));

    return (
      <SidebarSection
        activeTab={activeTab}
        key={sectionTitle}
        open={open}
        title={sectionTitle}
        items={items}
        $first={i === 0}
      />
    );
  });

  return (
    <SidebarContainer ref={open ? (locked ? null : ref) : null} open={open}>
      <SidebarHeader title="Slice" open={open} />
      <SidebarBurger open={open} locked={locked} handleClick={handleClick} />
      {sections}
    </SidebarContainer>
  );
};
