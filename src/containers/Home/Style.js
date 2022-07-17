import styled from "styled-components";
import { Head1, Head2, colors, size, Container } from "../../Styles";

export const HomeContainer = styled(Container)`
  padding: 50px 90px;
  @media (min-width: ${size.laptop}) {
  }
  @media (max-width: ${size.tablet}) {
    margin: 10% 0;
    padding: 5%;
  }
  @media (max-width: ${size.mobileL}) {
    margin: 10% 0;
    padding: 5%;
  }
`;

export const Homeh1 = styled(Head1)`
  font-size: 3.8rem;
  @media (min-width: ${size.laptopL}) {
    font-size: 5rem;
  }
  @media (max-width: ${size.tablet}) {
    font-size: 3.5rem;
  }
  @media (max-width: ${size.mobileL}) {
    font-size: 3.3rem;
    margin: 10px 0;
  }
  @media (max-width: ${size.mobileM}) {
    font-size: 3rem;
  }
  @media (max-width: ${size.mobileS}) {
    font-size: 2.8rem;
  }
`;
export const Homeh2 = styled(Head2)`
  font-size: 2.5rem;
  color: ${colors.textDark};
  @media (min-width: ${size.laptopL}) {
    font-size: 3rem;
  }
  @media (max-width: ${size.tablet}) {
    font-size: 2.3rem;
  }
  @media (max-width: ${size.mobileL}) {
    font-size: 2rem;
  }
  @media (max-width: ${size.mobileM}) {
    font-size: 1.8rem;
  }
  @media (max-width: ${size.mobileS}) {
    font-size: 1.5rem;
  }
`;
