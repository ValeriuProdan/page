import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
  FooterTitle,
} from "./footer.styles";

import { useState } from "react";

const defaultFields = {
  clicks: 0,
};

const Footer = () => {
  const [fields, setFields] = useState(defaultFields);

  const surprizeOnClickHandle = () => {
    if (fields.clicks === 0) {
      alert("You expected something more, right? Try clicking again! 😉");
      setFields({ ...fields, clicks: fields.clicks + 1 });
    } else if (fields.clicks === 1) {
      alert("Great work, keep going!");
      setFields({ ...fields, clicks: fields.clicks + 1 });
    } else if (fields.clicks === 6) {
      alert("Really? R u gonna stop? 🙄");
      setFields({ ...fields, clicks: fields.clicks + 1 });
    } else {
      const x = fields.clicks;
      alert("You pressed it " + x + " times.");
      setFields({ ...fields, clicks: fields.clicks + 1 });
    }
  };

  return (
    <Box>
      <FooterTitle>A webpage made by Valeriu Prodan</FooterTitle>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>Webside code and credits</Heading>
            <FooterLink href="https://github.com/ValeriuProdan/page">Code</FooterLink>
            <FooterLink href="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/">
              Udemy Tutorial
            </FooterLink>
            <FooterLink href="https://react-photo-view.vercel.app/en-US">
              react-photo-view
            </FooterLink>
          </Column>
          <Column>
            <Heading>Contact</Heading>
            <FooterLink href="https://www.linkedin.com/in/valeriu-prodan-294103159">
              LinkedIn
            </FooterLink>
            <FooterLink href="https://github.com/ValeriuProdan">
              Github
            </FooterLink>
            <FooterLink href="mailto:prodan.valeriu96@gmail.com">
              Email
            </FooterLink>
          </Column>
          <Column>
            <Heading>Copyright</Heading>
            <FooterLink href="#">
              <i>
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  © Valeriu Prodan - 2023
                </span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Surprize</Heading>
            <FooterLink onClick={surprizeOnClickHandle}>Click me!</FooterLink>
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
};
export default Footer;
