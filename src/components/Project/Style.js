import styled from "styled-components";
import {
  colors,
  Container,
  font,
  Head1,
  Head2,
  Link,
  List,
  ListItem,
  size,
  Text,
} from "../../Styles";

export const ProjectContainer = styled(Container)`
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
export const ProjectHeader = styled(Head1)`
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
    &::after {
      display: none;
    }
  }
`;
export const ProjectInnerList = styled(List)`
  &:nth-child(odd) .left {
    grid-column: 5 / -1;
  }
  &:nth-child(odd) .right {
    grid-column: 1 / 8;
    text-align: left;
  }
  &:nth-child(odd) .even {
    justify-content: flex-start;
  }
  @media (max-width: ${size.tablet}) {
    &:nth-child(odd) .left {
      grid-column: 1 / -1;
    }
    &:nth-child(odd) .right {
      grid-column: 1 / -1;
    }
  }
  @media (max-width: ${size.mobileL}) {
    &:nth-child(odd) .right {
      text-align: center;
    }
    &:nth-child(odd) .even {
      justify-content: center;
    }
  }
`;
export const ProjectInnerListItem = styled(ListItem)`
  margin: 100px 0;
  padding: 10px 0;
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  -webkit-box-align: center;
  align-items: center;
  @media (max-width: ${size.tablet}) {
    margin: 50px 0;
  }
`;
export const ProjectLeft = styled(Container)`
  grid-area: 1 / 6 / -1 / -1;
  grid-column: 1 / 8;
  position: relative;
  z-index: ${(props) => props.z};
  max-width: 700px;
  @media (max-width: ${size.tablet}) {
    grid-column: 1 / -1;
  }
`;
export const ProjectRight = styled(Container)`
  position: relative;
  grid-area: 1 / 1 / -1 / 7;
  grid-column: 5 / -1;
  text-align: right;
  z-index: ${(props) => props.z};
  @media (max-width: ${size.tablet}) {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0 15px;
  }
  @media (max-width: ${size.mobileL}) {
    text-align: center;
  }
`;

export const ProjectLink = styled(Link)``;
export const ProjectImageContainer = styled(Container)`
  width: 100%;
  height: 320px;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  &::before {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: ${colors.bg};
  }
  @media (max-width: ${size.tablet}) {
    height: 450px;
    width: 100%;
  }
  @media (max-width: ${size.mobileL}) {
    height: 350px;
  }
`;
export const ProjectImage = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
  filter: opacity(0.5);
  z-index: 0;
  &:hover {
    filter: opacity(1);
  }
  @media (max-width: ${size.tablet}) {
    opacity: 0.18;
  }
`;
export const ProjectDescription = styled(Text)`
  background: #0c192b;
  position: relative;
  z-index: 2;
  padding: 25px;
  box-shadow: -12px 6px 22px -12px rgb(0 0 0 / 96%);
  border-radius: 6px;
  font-size: 1.2rem;
  @media (max-width: ${size.laptop}) {
    font-size: 1rem;
  }
  @media (max-width: ${size.tablet}) {
    background: none;
    box-shadow: none;
  }
  @media (max-width: ${size.mobileL}) {
    font-size: 0.9rem;
    text-align: center;
    padding: 10px;
  }
`;
export const ProjectHead = styled(Head2)`
  font-size: 2rem;
  @media (max-width: ${size.mobileL}) {
    margin: 0;
  }
`;

export const ProjectList = styled(List)`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 0;
  @media (max-width: ${size.tablet}) {
    justify-content: flex-start;
  }
  @media (max-width: ${size.mobileL}) {
    justify-content: center;
  }
`;
export const ProjectListOp = styled(ProjectList)``;

export const ProjectListItem = styled(ListItem)``;
