import React from "react";
import { Container, Head1, Highlight } from "../../Styles";
import {
  ContactButton,
  ContactContainer,
  ContactHead,
  ContactText,
} from "./Style";

function Contact() {
  return (
    <ContactContainer id="contact">
      <ContactHead>
        <Highlight>03.</Highlight> What's next ?
      </ContactHead>
      <Container display="center" m="30px 0">
        <Head1 size="3rem" className="c-head">
          Get In Touch
        </Head1>
        <ContactText>
          Although I’m currently looking for new opportunities, my inbox is
          always open. Whether you have a question or just want to say hi, I’ll
          try my best to get back to you!
        </ContactText>
        <ContactButton>Say Hi!</ContactButton>
      </Container>
    </ContactContainer>
  );
}

export default Contact;
