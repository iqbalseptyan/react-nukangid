import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
  position: relative;
  height: 550px;
  max-width: 1366px;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    height: 400px;
  }
  @media screen and (max-width: 480px) {
    height: 200px;
  }
`;

export const HeroBg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  transform: translateX(13%);
`;

export const HeroH1 = styled.h1`
  color: #fff;
  max-width: 40%;
  font-size: 48px;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  text-align: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
