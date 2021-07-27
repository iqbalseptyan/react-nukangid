import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 10px;
  border: 2px solid #ffca10;
  background: ${({ primary }) => (primary ? "#FFCA10" : "#fff")};
  background-color: ${({ outline }) => (outline ? "#fff" : "#FFCA10")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 24px")};
  color: ${({ dark }) => (dark ? "#FFCA10" : "#FFF")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  width: ${({ sameWidth }) => (sameWidth ? "100%" : "auto")};
  outline: none;
  cursor: pointer;
  display: flex;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1, 1.1);
    transform-style: flat;
    background-color: ${({ outline }) => (outline ? "#FFCA10" : "#FFF")};
    color: ${({ dark }) => (dark ? "#FFF" : "#FFCA10")};
  }
`;
