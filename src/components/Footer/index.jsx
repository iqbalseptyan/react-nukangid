import React from "react";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">About Us</FooterLink>
              <FooterLink to="/">Contack Us</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Blog</FooterLink>
              <FooterLink to="/">Press</FooterLink>
              <FooterLink to="/">About Us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">About Us</FooterLink>
              <FooterLink to="/">Contack Us</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Blog</FooterLink>
              <FooterLink to="/">Press</FooterLink>
              <FooterLink to="/">About Us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Customers</FooterLinkTitle>
              <FooterLink to="/">How to use Nukang</FooterLink>
              <FooterLink to="/">Get the app</FooterLink>
              <FooterLink to="/">Find a Builder</FooterLink>
              <FooterLink to="/">Find a Consultant</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Join with us</FooterLinkTitle>
              <FooterLink to="/">Sign Up</FooterLink>
              <FooterLink to="/">Sign in</FooterLink>
              <FooterLink to="/">Sign Up</FooterLink>
              <FooterLink to="/">Sign in</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
