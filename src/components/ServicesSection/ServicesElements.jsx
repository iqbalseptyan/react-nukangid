import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export const ServicesContainer = styled.div`
  height: 800px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;
export const ServicesH1 = styled.h1`
  margin-top: 0;

  margin-left: 24px;
  color: #000;
  margin-bottom: 32px;
  /* @media screen and (max-width: 480px) {
    font-size: 2rem;
  } */
`;
export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and(max-width:1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  border-radius: 10px;
  border-color: #ffca10;
  border: 1px solid #ffca10;
  width: 300px;
  height: auto;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ServicesIcon = styled.img`
  height: 260px;
  width: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
`;

export const ServicesRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, auto);
  align-items: center;
  grid-template-areas: "col1 col2";
`;
export const Column1 = styled.div`
  text-align: left;
  grid-area: col1;
`;
export const Column2 = styled.div`
  text-align: right;
  grid-area: col2;
`;

export const ServicesH2 = styled.h2`
  margin-bottom: 2px;
  font-size: 1rem;
  font-weight: 700;
  color: #626161;
`;
export const ServicesH3 = styled.h3`
  margin-bottom: 2px;
  font-size: 1rem;
  font-weight: 600;
  color: #626161;
`;
export const ServicesP = styled.p`
  margin-bottom: 2px;
  font-size: 1rem;
  font-weight: 400;
  color: #8f8f8f;
`;

export const StarIcon = styled(FaStar)`
  color: yellow;
`;
