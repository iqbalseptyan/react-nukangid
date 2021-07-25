import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#fff" : "grey")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 24px")};
  color: ${({ dark }) => (dark ? "#FFCA10" : "#FFF")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "grey")};
    font-size: 18px;
    font-weight: bold;
  }
`;
