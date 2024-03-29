import React from "react";
import { SideBarRight, SideBarLinkRight, Main } from "./Style";
import SideBarLeftMain from "./SideBarLeft/SideBarLeft";

function SideBar() {
  return (
    <Main>
      <SideBarLeftMain />
      <SideBarRight>
        <SideBarLinkRight href="mailto:musadhiqmp@gmail.com">
          musadhiqmp@gmail.com
        </SideBarLinkRight>
      </SideBarRight>
    </Main>
  );
}

export default SideBar;
