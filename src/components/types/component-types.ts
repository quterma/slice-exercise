import { FunctionComponent, SVGProps } from "react";
import { Tabs } from "./tab-types";

export type HeaderButton = {
  ButtonIcon: FunctionComponent<SVGProps<SVGSVGElement>>;
  buttonTitle: string;
  handleClick: () => void;
};

export type Tab = {
  title: Tabs;
  button: HeaderButton | null;
  contentType: "table" | null;
};

export type DropDownMenuItem = {
  label: string | number;
  onClick: () => void;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
};

export type SectionItemType = {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  tab: Tabs;
  setTab: () => void;
  badge?: string;
};
