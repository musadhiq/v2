import React from "react";
import Project from "../../components/Project/Project";
import {
  ProjectContainer,
  ProjectHeader,
} from "../../components/Project/Style";
import { Highlight } from "../../Styles";
import data from "./data.json";

function Projects() {
  return (
    <ProjectContainer id="projects">
      <ProjectHeader>
        <Highlight>02. </Highlight>Some Things I've Built
      </ProjectHeader>
      {data.map((project) => (
        <Project key={project.id} data={project} />
      ))}
    </ProjectContainer>
  );
}

export default Projects;
