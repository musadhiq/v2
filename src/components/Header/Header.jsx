import React, { useState } from "react";
import {
  MainHeader,
  Nav,
  HeaderList,
  HeaderListItem,
  HeaderLink,
} from "./Styles";
import { Highlight, Link, Btn } from "../../Styles";
import logo from "../../assets/logo.svg";
// icons
import { BsMenuButtonWideFill } from "react-icons/bs";
import { BiWindowClose } from "react-icons/bi";
import useScrollBlock from "../../functions/Hooks/useScrollHook";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const OpenNav = () => {
    setIsOpen(true);
  };
  const CloseNav = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  if (isOpen) {
    blockScroll();
  } else {
    allowScroll();
  }

  return (
    <MainHeader>
      <Nav>
        <Link href="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </Nav>
      <Nav>
        <BsMenuButtonWideFill className="menu-icon" onClick={OpenNav} />
        <HeaderList display={isOpen ? "flex" : "none"}>
          <BiWindowClose className="menu-close menu-icon" onClick={CloseNav} />
          <HeaderListItem>
            <HeaderLink href="#" onClick={CloseNav}>
              <Highlight>00.</Highlight> Home
            </HeaderLink>
          </HeaderListItem>
          <HeaderListItem>
            <HeaderLink href="#About" onClick={CloseNav}>
              <Highlight>01.</Highlight> About
            </HeaderLink>
          </HeaderListItem>
          <HeaderListItem>
            <HeaderLink href="#projects" onClick={CloseNav}>
              <Highlight>02.</Highlight> Projects
            </HeaderLink>
          </HeaderListItem>
          <HeaderListItem>
            <HeaderLink href="#contact" onClick={CloseNav}>
              <Highlight>03.</Highlight> Contact
            </HeaderLink>
          </HeaderListItem>
          <HeaderListItem>
            <Btn href="#" marginLeft="20px" onClick={CloseNav}>
              Resume
            </Btn>
          </HeaderListItem>
        </HeaderList>
      </Nav>
    </MainHeader>
  );
}

export default Header;
