import styled from "styled-components";
import Flex from "../../styles/Flex";
import { NavLink } from "react-router-dom";

export const Nav = styled(Flex)`
  background: ${({ theme }) => theme.colors.navbarBgColor};
  padding: 1rem 2rem;
`;

export const Logo = styled(NavLink)`
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors.logoColor};
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
`;
export const Menu = styled(Flex)`
  font-weight: bold;
  @media (max-width: ${({ theme }) => theme.screens.logoColor}) {
    flex-direction: coloumn;
    width: 100%;
    transition: all 0.3s ease-in;
  }
`;
export const MenuLink = styled(NavLink)``;
