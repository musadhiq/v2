import styled from "styled-components";
import {
  Container,
  Head1,
  Text,
  font,
  colors,
  size,
  List,
  ListItem,
} from "../../Styles";

export const AboutContainer = styled(Container)`
  padding: 50px 90px;
  @media (min-width: ${size.laptop}) {
  }
  @media (max-width: ${size.tablet}) {
    padding: 5%;
  }
  @media (max-width: ${size.mobileL}) {
    margin-top: 100px;
    padding: 3%;
  }
`;
export const AboutInnerContainer = styled(Container)`
  padding: 40px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${size.tablet}) {
    padding: 20px 40px;
    flex-direction: column-reverse;
    gap: 40px;
  }
  @media (max-width: ${size.mobileL}) {
    padding: 10px 0;
  }
`;
export const AboutLeftContainer = styled(Container)`
  max-width: 50%;
  @media (max-width: ${size.tablet}) {
    max-width: 100%;
  }
`;
export const AboutRightContainer = styled(Container)`
  width: 300px;
  height: 300px;
  border: 1px solid ${colors.green};
  .avatar {
    object-fit: cover;
    width: 280px;
  }
`;

export const AboutHead = styled(Head1)`
  font-family: ${font.code};
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    height: 0.5px;
    margin: 0 20px;
    width: 40%;
    background: ${colors.textDarkLow};
  }
  @media (max-width: ${size.laptop}) {
    font-size: 1.6rem;
  }
  @media (max-width: ${size.mobileL}) {
    font-size: 1.2rem;
    padding: 15px 0;
  }
`;

export const AboutText = styled(Text)`
  @media (max-width: ${size.laptop}) {
    font-size: 1rem;
  }
`;

export const AboutList = styled(List)`
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 200px));
  gap: 10px;
`;
export const AboutListItem = styled(ListItem)`
  color: ${colors.textDark};
`;
