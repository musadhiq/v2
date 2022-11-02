import styled from "styled-components";

export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const font = {
  code: "SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace",
  normal:
    "Calibre, Inter, San Francisco, SF Pro Text, -apple-system, system-ui, sans-serif",
};
export const colors = {
  bg: "#161B22",
  green: "#64FFDA",
  text: "#DCDDE4",
  textDark: "#A8B2D1",
  textDarkLow: "#989dac5d",
};

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : "unset")};
  &:hover {
    color: ${colors.green};
  }
  ${(props) =>
    props.display === "center" &&
    "display:flex; justify-content: center; align-items:center; gap: 5px; "};
`;
export const Container = styled.div`
  display: ${(props) => props.display};
  ${(props) =>
    props.display === "center" &&
    "display:flex; justify-content: center; align-items:center; flex-direction:column;"};
  height: ${(props) => props.height};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  max-width: ${(props) => props.maxw};
`;

export const List = styled.ul`
  list-style: none;
`;
export const ListItem = styled.li``;
export const Text = styled.p`
  font-family: ${font.normal};
  ${(props) => props.bold && "font-weight: bold;"}
  font-size: ${(props) => props.size};
  color: ${(props) => (props.color === "dark" ? colors.textDark : colors.text)};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  @media (max-width: ${size.laptop}) {
    font-size: 1rem;
  }
  @media (max-width: ${size.mobileL}) {
    font-size: 0.8rem;
  }
`;
export const Head1 = styled.h1`
  font-size: ${(props) => props.size};
  font-family: ${font.normal};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
`;
export const Head2 = styled.h2`
  font-family: ${font.normal};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
`;
export const Head3 = styled.h3`
  font-family: ${font.normal};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
`;
export const Highlight = styled.span`
  color: ${colors.green};
  font-size: ${(props) => props.size};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  font-family: ${font.code};
  ${(props) => props.bold && "font-weight: bold;"}
  @media (max-width: ${size.laptop}) {
    font-size: 1rem;
  }
`;

export const Btn = styled(Link)`
  border: 1px solid ${colors.green};
  padding: 8px 16px;
  border-radius: 5px;
  margin-left: ${(props) => props.marginLeft};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  display: inline-block;
  cursor: pointer;
`;
