import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import logo from "../../images/logo.png";

export const Nav = styled.nav`
  align-items: center;
  background: #fff;
  display: flex;
  font-size: 1rem;
  height: 80px;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  /* margin-top: -80px;
	*/
`;

export const NavbarContainer = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  max-width: 100%;
  padding: 0 24px;
  width: 100%;
  z-index: 1;
`;

export const NavLogo = styled(LinkR)`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: 200px 50px;
  background-position: 6px 8px;
  width: 20%;
  height: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: #000;
    cursor: pointer;
    display: block;
    font-size: 1.8rem;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-100%, 60%);
  }
`;

export const NavMenu = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin-right: -22px;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  align-items: center;
  color: #000;
  cursor: pointer;
  display: flex;
  height: 100%;
  padding: 0 1rem;
  text-decoration: none;
  font-weight: bold;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  align-items: center;
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  background: #fff;
  border-color: #ffca10;
  border-radius: 6px;
  border-style: solid;
  color: #ffca10;
  cursor: pointer;
  font-size: 16px;
  outline: none;
  padding: 10px 22px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    position: relative;
    padding: 12px 22px;
    background: #ffca10;
    color: #fff;
    transition: all 0.2s ease-in-out;
  }
`;
