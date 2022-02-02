import React from "react";
import { Link } from "react-scroll";

const Button = ({ to, primary, big, dark, fontBig, title, btnComponent }) => {
  return (
    <Link
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
      exact="true"
      to={to}
      className={`rounded-full ${
        primary ? "bg-[#01bf71]" : "bg-[#010606]"
      } whitespace-nowrap ${
        big ? "py-[14px] px-[48px]" : "py-[12px] px-[30px]"
      } ${dark ? "text-[#010606]" : "text-[#fff]"} ${
        fontBig ? "text-[20px]" : "text-[16px]"
      } outline-none cursor-pointer flex justify-center items-center btnTransition hover:${
        primary ? "bg-[#fff]" : "bg-[#01bf71]"
      } `}
    >
      {title} {btnComponent}
    </Link>
  );
};

export default Button;
