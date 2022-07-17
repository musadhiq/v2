import React from "react";
import { Link } from "../../Styles";
import { Footer, FooterContainer, FooterLink, FooterText } from "./Style";
// icons
import { FiGithub } from "react-icons/fi";
import { FaCodeBranch } from "react-icons/fa";
function FooterMain() {
  return (
    <Footer>
      <FooterContainer>
        <FooterText>
          Designed & Built by <Link color="#64FFDA">Musadhiq</Link>
        </FooterText>
        <FooterLink>
          <FiGithub className="f-icon" />
          <FaCodeBranch className="f-icon" />
        </FooterLink>
      </FooterContainer>
    </Footer>
  );
}

export default FooterMain;
