import { useState } from "react";
import { SidebarBurger, SidebarHeader } from "./sidebar-elements";
import { SidebarContainer } from "./styled";

export const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <SidebarContainer open={open}>
      <SidebarHeader title="Slice" open={open} />
      <SidebarBurger open={open} setOpen={() => setOpen(!open)} />
    </SidebarContainer>
  );
};
