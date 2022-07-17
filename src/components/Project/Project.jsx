import React from "react";
import { Container, Highlight } from "../../Styles";
import {
  ProjectDescription,
  ProjectHead,
  ProjectImage,
  ProjectImageContainer,
  ProjectInnerList,
  ProjectInnerListItem,
  ProjectLeft,
  ProjectLink,
  ProjectList,
  ProjectListItem,
  ProjectRight,
} from "./Style";
// icons
import { FiGithub, FiExternalLink } from "react-icons/fi";

function Project({ data }) {
  return (
    <>
      <ProjectInnerList>
        <ProjectInnerListItem>
          <ProjectRight z="2" className="right">
            <Highlight>Fetured Project</Highlight>
            <ProjectHead m="10px 0">{data?.name}</ProjectHead>
            <ProjectDescription m="10px 0">
              {data?.description}
            </ProjectDescription>
            <ProjectList className="even">
              {data?.tools.map((tool, index) => (
                <ProjectListItem key={index}>{tool}</ProjectListItem>
              ))}
            </ProjectList>
            <Container>
              <ProjectLink href={data?.github} m="10px">
                <FiGithub className="p-icons" />
              </ProjectLink>
              <ProjectLink href={data?.projectLink}>
                <FiExternalLink className="p-icons" />
              </ProjectLink>
            </Container>
          </ProjectRight>
          <ProjectLeft z="1" className="left">
            <ProjectLink>
              <ProjectImageContainer>
                <ProjectImage src={data?.img} />
              </ProjectImageContainer>
            </ProjectLink>
          </ProjectLeft>
        </ProjectInnerListItem>
      </ProjectInnerList>
    </>
  );
}

export default Project;
