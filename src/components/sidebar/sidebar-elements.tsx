import { Header, HeaderTitle, LogoPolygon, LogoRectangle } from "./styled";

type SydebarHeaderProps = {
  title: string;
  open: boolean;
};
export const SydebarHeader = ({ title, open }: SydebarHeaderProps) => (
  <Header open={open}>
    <LogoRectangle>
      <LogoPolygon />
    </LogoRectangle>
    {open && <HeaderTitle>{title}</HeaderTitle>}
  </Header>
);
