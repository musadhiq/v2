import styled, { keyframes } from "styled-components";
import { colors } from "../../Styles";

const LoadingAnimation = keyframes`
0%{opacity:0;}
100%{opacity:1;
fill:${colors.green};
}
`;
const circleAnimation = keyframes`
0%{  
    border-radius: 0%;
}
100%{  
    border-radius: 50%;
}
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoadingInnerContainer = styled.div`
  border: 1px solid ${colors.text};
  animation: ${circleAnimation} 1.2s ease-in-out forwards;
  position: relative;
  width: 250px;
  height: 250px;
  .loading {
    position: absolute;
    top: -50%;
    left: -50%;
    .m {
      fill: ${colors.textDark};
      animation: ${LoadingAnimation} 1s 1.2s ease-in-out forwards;
    }
  }
`;
