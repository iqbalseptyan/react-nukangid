import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../images/logo.svg";
import { Button } from "../ButtonElements";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLinkLogo,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const redirect = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.nukangid";
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">Contack Us</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Blog</FooterLink>
              <FooterLink to="/">Press</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Customers</FooterLinkTitle>
              <FooterLink to="/">How to use Nukang</FooterLink>
              <FooterLink to="/">Get the app</FooterLink>
              <FooterLink to="/">Find a Builder</FooterLink>
              <FooterLink to="/">Find a Consultant</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Patners</FooterLinkTitle>
              <FooterLink to="/">Join with us</FooterLink>
              <FooterLink>
                <Button primary big sameWidth outline dark onClick={redirect}>
                  Sign Up
                </Button>
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLinkLogo
              smooth={true}
              duration={600}
              src={logo}
              onClick={toggleHome}
            >
              <SocialLogo src={logo} />
            </SocialLinkLogo>
            <WebsiteRights>
              © Inatech, Inc. {new Date().getFullYear()}. We love our users!
            </WebsiteRights>

            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Whatsapp">
                <FaWhatsapp />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
