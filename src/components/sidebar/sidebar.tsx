import { useState } from "react";
import { SydebarHeader } from "./sidebar-elements";
import { SidebarContainer } from "./styled";

export const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <SidebarContainer open={open}>
      <SydebarHeader title="Slice" open={open} />
    </SidebarContainer>
  );
};
