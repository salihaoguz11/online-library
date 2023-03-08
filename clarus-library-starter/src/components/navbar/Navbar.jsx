import React from "react";
import { Logo, Menu, MenuLink, Nav } from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo>ONLINE LIBRARY</Logo>
      <Menu>
        <MenuLink href="#">HOME</MenuLink>
        <MenuLink href="#">ABOUT</MenuLink>
        <MenuLink href="#">REGISTER</MenuLink>
        <MenuLink href="#">LOGIN</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
