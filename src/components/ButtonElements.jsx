import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 10px;
  border: 2px solid #ffca10;
  background: ${({ primary }) => (primary ? "#FFCA10" : "#fff")};
  background-color: ${({ outline }) => (outline ? "#fff" : "#FFCA10")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 32px" : "12px 24px")};
  color: ${({ dark }) => (dark ? "#FFCA10" : "#FFF")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  cursor: pointer;
  display: ${({ none }) => (none ? "none" : "flex")};
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1, 1.1);
    transform-style: flat;
    background-color: ${({ outline }) => (outline ? "#FFCA10" : "#FFF")};
    color: ${({ dark }) => (dark ? "#FFF" : "#FFCA10")};
    border: ${({ borderOutline }) =>
    borderOutline ? "2px solid #FFF" : "2px solid #FFCA10"};
  }

  @media screen and (max-width: 480px) {
    padding: ${({ small }) => (small ? "6px 12px" : "12px 24px")};
    font-size: ${({ fontSmall }) => (fontSmall ? "10px" : "14px")};
    align-items: center;
    display: flex;
  }
`;

export const LinkPage = styled.a`
  border-radius: 10px;
  border: 2px solid #ffca10;
  background: ${({ primary }) => (primary ? "#FFCA10" : "#fff")};
  background-color: ${({ outline }) => (outline ? "#fff" : "#FFCA10")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 32px" : "12px 24px")};
  color: ${({ dark }) => (dark ? "#FFCA10" : "#FFF")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  cursor: pointer;
  display: ${({ none }) => (none ? "none" : "flex")};
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1, 1.1);
    transform-style: flat;
    background-color: ${({ outline }) => (outline ? "#FFCA10" : "#FFF")};
    color: ${({ dark }) => (dark ? "#FFF" : "#FFCA10")};
    border: ${({ borderOutline }) =>
    borderOutline ? "2px solid #FFF" : "2px solid #FFCA10"};
  }

  @media screen and (max-width: 480px) {
    padding: ${({ small }) => (small ? "6px 12px" : "12px 24px")};
    font-size: ${({ fontSmall }) => (fontSmall ? "10px" : "14px")};
    align-items: center;
    display: flex;
  }
`