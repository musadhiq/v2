import React from "react";
import {
  AboutContainer,
  AboutHead,
  AboutInnerContainer,
  AboutLeftContainer,
  AboutList,
  AboutListItem,
  AboutRightContainer,
  AboutText,
} from "./Style";
import { Highlight } from "../../Styles";
import Avatar from "../../assets/avatar.svg";
function About() {
  return (
    <AboutContainer id="About">
      <AboutHead>
        <Highlight>01. </Highlight> Who Am I ?
      </AboutHead>
      <AboutInnerContainer>
        <AboutLeftContainer>
          <AboutText color="dark" size="1.2rem">
            I am a full-stack developer with a passion for building beautiful,
            responsive websites. Hello! My name is Musadhiq and I enjoy creating
            things that live on the internet. My interest in web development. I
            am a passionate developer from India I develop things to the
            Internet! <br /> <br />
            Fast-forward to today, and I’ve had the privilege of learning
            Nodejs, My main focus to be a MERN-stack developer. Enjoying the
            Journey; Love develop web sites and web applications as a hobby to
            improve skills and knowledge.
          </AboutText>
          <AboutText bold color="dark" size="1.1rem" p=" 10px 0">
            Here are a few technologies I’ve been working with recently:
          </AboutText>
          <AboutList>
            <AboutListItem>
              <Highlight p="0 5px" bold>
                {">"}
              </Highlight>
              JavaScript(ES6+)
            </AboutListItem>
            <AboutListItem>
              <Highlight p="0 5px" bold>
                {">"}
              </Highlight>
              React JS
            </AboutListItem>
            <AboutListItem>
              <Highlight p="0 5px" bold>
                {">"}
              </Highlight>
              NodeJs
            </AboutListItem>
            <AboutListItem>
              <Highlight p="0 5px" bold>
                {">"}
              </Highlight>
              MongoDB
            </AboutListItem>
            <AboutListItem>
              <Highlight p="0 5px" bold>
                {">"}
              </Highlight>
              CSS3(SCSS)
            </AboutListItem>
            <AboutListItem>
              <Highlight p="0 5px" bold>
                {">"}
              </Highlight>
              Wordpress
            </AboutListItem>
          </AboutList>
        </AboutLeftContainer>
        {/* right */}
        <AboutRightContainer>
          <img src={Avatar} alt="profile" className="avatar" />
        </AboutRightContainer>
        {/*  */}
      </AboutInnerContainer>
    </AboutContainer>
  );
}

export default About;
