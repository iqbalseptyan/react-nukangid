import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const FooterContainer = styled.footer`
  background-color: #fff;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 1000px;
  }
  @media screen and (max-width: 480px) {
    height: 800px;
  }
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: auto;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #000;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(LinkR)`
  color: #000;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  width: 100%;
  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLinkLogo = styled(LinkS)`
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const SocialLogo = styled.img`
  margin-bottom: 16px;
`;

export const WebsiteRights = styled.small`
  color: #000;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;
export const SocialIconLink = styled.a`
  color: #000;
  font-size: 24px;
`;
