import React, { useState } from "react";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";
import { menuIcon } from "../../helper/iconData";

const Navbar = ({ setCurrentUser, currentUser }) => {
  const [showMenu, setShowMenu] = useState(false);
  const logout = () => {
    setCurrentUser(false);
    sessionStorage.clear();
  };
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo>ONLINE LIBRARY</Logo>
      <HamburgerIcon onClick={() => setShowMenu(!showMenu)}>
        {menuIcon}
      </HamburgerIcon>
      <Menu showMenu={showMenu}>
        <MenuLink to="/">HOME</MenuLink>
        <MenuLink to="/about">ABOUT</MenuLink>
        {currentUser ? (
          <MenuLink to="/login" onClick={logout}>
            LOGOUT
          </MenuLink>
        ) : (
          <>
            <MenuLink to="/register">REGISTER</MenuLink>
            <MenuLink to="/login">LOGIN</MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
