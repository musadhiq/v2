import React from "react";
import {
  SideBarLeft,
  SideBarLink,
  SideBarList,
  SideBarListItem,
} from "../Style";
// icons
import { VscGithubAlt } from "react-icons/vsc";
import { IoLogoInstagram } from "react-icons/io";
import { FiTwitter, FiLinkedin, FiCodepen } from "react-icons/fi";

function SideBarLeftMain() {
  return (
    <SideBarLeft m="0 20px">
      <SideBarList>
        <SideBarListItem>
          <SideBarLink to="/">
            <VscGithubAlt className="icon" />
          </SideBarLink>
        </SideBarListItem>
        <SideBarListItem>
          <SideBarLink to="/">
            <IoLogoInstagram className="icon" />
          </SideBarLink>
        </SideBarListItem>
        <SideBarListItem>
          <SideBarLink to="/">
            <FiTwitter className="icon" />
          </SideBarLink>
        </SideBarListItem>
        <SideBarListItem>
          <SideBarLink to="/">
            <FiLinkedin className="icon" />
          </SideBarLink>
        </SideBarListItem>
        <SideBarListItem>
          <SideBarLink to="/">
            <FiCodepen className="icon" />
          </SideBarLink>
        </SideBarListItem>
      </SideBarList>
    </SideBarLeft>
  );
}

export default SideBarLeftMain;
