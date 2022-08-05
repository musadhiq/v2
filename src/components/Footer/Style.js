import styled from "styled-components";
import { colors, Link, size } from "../../Styles";

export const Footer = styled.footer`
  margin-top: 5rem;
  text-align: center;
  padding: 2rem;
`;
export const FooterContainer = styled.div``;
export const FooterText = styled.h3`
  color: ${colors.textDarkLow};
  font-weight: 400;
  padding-top: 50px;
  padding: 10px 0;
  font-size: 0.9rem;
  @media (max-width: ${size.mobileL}) {
    font-size: 0.68rem;
    padding: 10px 0;
  }
`;
export const FooterLink = styled(Link)`
  color: ${colors.textDark};

  .f-icon {
    font-size: 1.2rem;
    margin: 0 5px;
    cursor: pointer;
    @media (max-width: ${size.mobileL}) {
      font-size: 0.8rem;
    }
  }
`;

// footer {
//     font-family: $font-sans;
//     #wrapper {
//       height: 130px;
//       text-align: center;
//       h3 {
//         color: $color-low;
//         font-weight: 400;
//         padding-top: 50px;
//         font-size: 12px;
//         a {
//           color: $green;
//         }
//       }
//       div {
//         i.icon {
//   width: 13px;
//   padding: 10px;
//   fill: $color-low;
//   cursor: pointer;
//         }
//       }
//     }
//   }
//   .fas,
//   .fab {
//     color: $color-low;
//     &:hover {
//       color: $green;
//     }
//   }
