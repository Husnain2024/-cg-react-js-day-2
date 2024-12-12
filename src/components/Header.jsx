import React from "react";
import NavItem from "./NavItem";

const Header = () => {
  const menuItem = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <header>
      <div className="top_header_wrap">
        <div className="logo_wrap">
          <h2>LOGO</h2>
        </div>
        {/* yaha sae mai nae prop baja hai (data send from parent component to child component) */}
        {/* NavItem ap ka child component hai */}
        {/* kisi b component mae prop asay pass kartay han  (menuItem={menuItem})  */}
        <NavItem menuItem={menuItem} />
      </div>
    </header>
  );
};

export default Header;
