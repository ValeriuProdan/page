import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
  FooterTitle,
  IconContainer,
  IconLink,
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
            <IconContainer>
              <IconLink 
                href="https://www.linkedin.com/in/valeriu-prodan-294103159"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </IconLink>
              <IconLink 
                href="https://github.com/ValeriuProdan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </IconLink>
              <IconLink 
                href="mailto:prodan.valeriu96@gmail.com"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                </svg>
              </IconLink>
            </IconContainer>
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
