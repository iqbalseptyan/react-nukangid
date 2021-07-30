import styled from "styled-components";

export const BlogContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    height: 1100px;
  }
  @media screen and (max-width: 768px) {
    height: 1720px;
  }
  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const BlogH1 = styled.h1`
  font-size: 2.5rem;
  margin-top: 0;

  margin-left: 24px;
  color: #000;
  margin-bottom: 32px;
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }
`;
export const BlogWrapper = styled.div`
  max-width: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    padding: 20 50px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const BlogCard = styled.div`
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: auto;
  padding: 24px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const BlogIcon = styled.img`
  border-radius: 10px;
  height: 100%;
  width: 100%;
  margin-bottom: 24px;
`;

export const BlogH2 = styled.h2`
  margin-bottom: 2px;
  font-size: 1rem;
  font-weight: 700;
  color: #626161;
`;
export const BlogH3 = styled.h3`
  margin-bottom: 2px;
  font-size: 1rem;
  font-weight: 600;
  color: #626161;
`;
export const BlogP = styled.p`
  margin: 0 16px;
  font-size: 1rem;
  font-weight: 400;
`;
