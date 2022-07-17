import styled from "styled-components";
import { Container, List, ListItem, colors, size, Link } from "../../Styles";

export const Main = styled(Container)`
  @media (max-width: ${size.mobileL}) {
    display: flex;
    flex-direction: column;
  }
`;

const sideBarMain = styled(Container)`
  position: fixed;
  bottom: 150px;
  -webkit-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 10px;
    width: 2px;
    height: 150px;
    background-color: ${colors.green};
  }
  @media (max-width: ${size.mobileL}) {
    display: block;
    position: absolute;
    bottom: 10px;
    &::after {
      display: none;
    }
  }
`;

export const SideBarLeft = styled(sideBarMain)`
  left: 4%;
  &::after {
    top: 230px;
  }
  @media (max-width: ${size.laptop}) {
    &::after {
      top: 220px;
    }
  }
  @media (max-width: ${size.laptop}) {
    left: 2%;
  }
  @media (max-width: ${size.mobileL}) {
    bottom: 70px;
    left: 0;
    margin: 0;
    width: 100%;
  }
`;
export const SideBarRight = styled(sideBarMain)`
  right: 4%;
  &::after {
    top: 240px;
  }
  @media (max-width: ${size.laptop}) {
    right: 2%;
  }
`;
export const SideBarList = styled(List)`
  @media (max-width: ${size.mobileL}) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`;
export const SideBarListItem = styled(ListItem)`
  color: ${colors.textDark};
`;
export const SideBarLink = styled(Link)`
  font-size: 1.6rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${colors.green};
    transform: scale(1.1);
  }
  @media (max-width: ${size.laptop}) {
    font-size: 1.2rem;
  }
`;

export const SideBarLinkRight = styled(SideBarLink)`
  writing-mode: vertical-rl;
letter-spacing:3px;
  font-size: 1rem;
  color: ${colors.textDark}
  @media (max-width: ${size.laptop}) {
    font-size: .9rem;
  }
  @media (max-width: ${size.mobileL}) {
    display: none;
`;
