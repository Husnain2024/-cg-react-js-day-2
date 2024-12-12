import React from "react";

const NavItem = ({menuItem}) => {


    // yaha sae ap prop recive karo gaya jasae ham na js para parha tha parameter sae data recived kartay the asay he ham yaha sae prop recived karay gay


  return (
    <>
      <nav>
        <ul className="nav_wrap">

            {/* yaha par ham loop chalaya hae jo array ka method hai map us k zaray sae */}
          {menuItem.map((link,index) => (
            <li key={index}>
              <a
                href={link.url}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavItem;
