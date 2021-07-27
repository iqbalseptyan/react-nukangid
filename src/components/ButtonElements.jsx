import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#FFCA10" : "#fff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 24px")};
  color: ${({ dark }) => (dark ? "#FFCA10" : "#FFF")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  /* outline: none; */
  /* border-style: outset; */
  /* border-color: #ffca10; */

  cursor: pointer;
  display: flex;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1, 1.1);
    transform-style: flat;
    /* background: ${({ primary }) => (primary ? "#FFCA10" : "#fff")};
    color: ${({ dark }) => (dark ? "#FFCA10" : "#FFF")}; */
  }
`;
