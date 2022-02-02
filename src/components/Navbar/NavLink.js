import React from "react";
import { Link } from "react-scroll";

function NavLink({ to, title }) {
  return (
    <li className="link text-[#fff] flex items-center px-[1rem] cursor-pointer">
      <Link
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
        activeClass="active"
        to={to}
      >
        {title}
      </Link>
    </li>
  );
}

export default NavLink;
