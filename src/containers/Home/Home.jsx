import React from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import { Btn, Container, Highlight, Text } from "../../Styles";
import { HomeContainer, Homeh1, Homeh2 } from "./Style";

function Home() {
  return (
    <>
      <Header />
      <SideBar />
      <HomeContainer id="Home" m="10% 0" p="20px">
        <Container>
          <Highlight size="1.4rem">Hi, I am </Highlight>
          <Homeh1>Musadhiq.</Homeh1>
          <Homeh2>I build things for the web.</Homeh2>
          <Text color="dark" m="10px 0" size="1.2rem">
            I’m a passionate web developer who tries to achieve the highest
            standard possible at any given risk.
          </Text>
          <Btn href="#" m="40px 0" p="11px 22px">
            Get In Touch!
          </Btn>
        </Container>
      </HomeContainer>
    </>
  );
}

export default Home;
