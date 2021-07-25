import styled from "styled-components";
import banner from "../../images/hero.png";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
  position: relative;
  height: 500px;
  z-index: 1;
`;
export const HeroBg = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  background: url(${banner});
  background-size: 100% 100%;
`;

export const HeroContent = styled.div`
  z-index: 3;
  position: absolute;
  padding: 8px 48px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  max-width: 40%;
  font-size: 48px;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
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
