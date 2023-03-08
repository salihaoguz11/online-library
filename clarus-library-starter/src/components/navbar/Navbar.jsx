import React, { useState } from "react";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";
import { menuIcon } from "../../helper/iconData";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo>ONLINE LIBRARY</Logo>
      <HamburgerIcon onClick={() => setShowMenu(!showMenu)}>
        {menuIcon}
      </HamburgerIcon>
      <Menu showMenu={showMenu}>
        <MenuLink to="/">HOME</MenuLink>
        <MenuLink to="/about">ABOUT</MenuLink>
        <MenuLink to="/register">REGISTER</MenuLink>
        <MenuLink to="/login">LOGIN</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
