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
          <SideBarLink href="//github.com/musadhiq" target="_blank">
            <VscGithubAlt className="icon" />
          </SideBarLink>
        </SideBarListItem>
        <SideBarListItem>
          <SideBarLink href="//instagram.com/musadhiq_mp" target="_blank">
            <IoLogoInstagram className="icon" />
          </SideBarLink>
        </SideBarListItem>
        <SideBarListItem>
          <SideBarLink href="//twitter.com/musadhiqmp" target="_blank">
            <FiTwitter className="icon" />
          </SideBarLink>
        </SideBarListItem>
        <SideBarListItem>
          <SideBarLink
            href="//in.linkedin.com/in/musadhiq-mp-0864b91b8"
            target="_blank"
          >
            <FiLinkedin className="icon" />
          </SideBarLink>
        </SideBarListItem>
        <SideBarListItem>
          <SideBarLink href="/" target="_blank">
            <FiCodepen className="icon" />
          </SideBarLink>
        </SideBarListItem>
      </SideBarList>
    </SideBarLeft>
  );
}

export default SideBarLeftMain;
