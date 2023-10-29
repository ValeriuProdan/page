import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footer.styles";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "green",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        A Webpage made by Valeriu Prodan!
      </h1>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>Webside</Heading>
            <FooterLink href="#">Code</FooterLink>
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
            <Heading>Surpize</Heading>
            <FooterLink href="#">Click me!</FooterLink>
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
};
export default Footer;
