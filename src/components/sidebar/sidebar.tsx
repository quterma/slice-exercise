import { useState } from "react";
import { SidebarBurger, SidebarHeader } from "./sidebar-elements";
import { SidebarContainer } from "./styled";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [locked, setLocked] = useState<boolean>(false);

  const togleLock = () => setLocked(!locked);

  const ref = useOutsideClick(() => {
    console.log("Clicked outside of Sidebar");
    setOpen(false);
  });

  const handleClick = open ? togleLock : () => setOpen(!open);

  return (
    <SidebarContainer ref={open ? (locked ? null : ref) : null} open={open}>
      <SidebarHeader title="Slice" open={open} />
      <SidebarBurger open={open} locked={locked} handleClick={handleClick} />
    </SidebarContainer>
  );
};
