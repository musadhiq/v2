import styled from "styled-components";
import { size, List, ListItem, Link } from "../../Styles";

export const MainHeader = styled.header`
  margin: 0 auto;
  letter-spacing: 2px;
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 10vh;
  font-size: 18px;
  @media (max-width: ${size.laptopL}) {
    font-size: 17px;
    padding: 7px;
  }
  @media (max-width: ${size.laptop}) {
    font-size: 16px;
  }
  @media (max-width: ${size.tablet}) {
    font-size: 15px;
    letter-spacing: 1;
    padding: 7px;
    min-height: 8vh;
  }
  @media (max-width: ${size.mobileL}) {
    padding: 15px 0px;
  }
  .logo {
    width: 60px;
  }
`;
export const Nav = styled.nav``;
export const HeaderList = styled(List)`
  display: flex;
  align-items: center;
  @media (max-width: ${size.tablet}) {
    z-index: 100;
    align-items: flex-start;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #000;
    height: 100%;
    width: 270px;
    padding: 50px;
    display: ${(props) => (props.display ? props.display : "flex")};
  }
`;
export const HeaderListItem = styled(ListItem)``;
export const HeaderLink = styled(Link)`
  padding: 15px;
`;
