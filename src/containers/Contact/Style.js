import styled from "styled-components";
import { Container, Head1, Text, font, colors, size, Btn } from "../../Styles";

export const ContactContainer = styled(Container)`
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
  .c-head {
    @media (max-width: ${size.mobileL}) {
      font-size: 1.8rem;
    }
  }
`;

export const ContactHead = styled(Head1)`
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

export const ContactText = styled(Text)`
  font-size: 1.2rem;
  text-align: center;
  margin: 20px 0;

  max-width: 500px;
  @media (max-width: ${size.laptop}) {
    font-size: 1rem;
  }
  @media (max-width: ${size.mobileL}) {
    font-size: 0.9rem;
  }
`;

export const ContactButton = styled(Btn)`
  margin-top: 40px;
`;
