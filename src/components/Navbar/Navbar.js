import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import NavLink from "./NavLink";
import { useGlobalContext } from "../../store/context";
import { animateScroll as scroll, Link } from "react-scroll";

const Navbar = () => {
  const { openSidebarModal } = useGlobalContext();
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {/* navbar */}
      <div
        className={`nav h-[80px] -mt-[80px]  flex justify-center items-center text-base sticky top-0 z-[50] navbarTransition ${
          scrollNav ? "bg-[#1d1f1f]" : "bg-transparent"
        }`}
      >
        {/* navbar container */}
        <div className="flex justify-between items-center h-full z-[10] w-full px-6 max-w-[1100px]">
          {/* the logo */}
          <Link
            onClick={toggleHome}
            to="/"
            className="text-[#fff] flex flex-start cursor-pointer items-center ml-6 font-bold"
          >
            cryptowin
          </Link>

          {/* toggle menu */}
          <div
            className="sm:hidden absolute top-0 right-0   text-[1.5rem] cursor-pointer text-[#fff] toggle-icon"
            onClick={() => openSidebarModal()}
          >
            <FaBars />
          </div>

          {/* navbar links */}
          <ul className="hidden sm:flex items-center text-center mr-[-22px]">
            <NavLink to="about" title="About" />
            <NavLink to="discover" title="Discover" />
            <NavLink to="services" title="Services" />
            <NavLink to="signup" title="Sign Up" />
          </ul>

          {/* the download in button */}
          <div className="hidden sm:flex items-center">
            <Link
              className="rounded-full bg-[#01bf71] whitespace-nowrap py-[6px] px-[22px] text-[#010606] text-base outline-none cursor-pointer signUpTransition hover:bg-[#fff] hover:text-[#010606] "
              to="downloads"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              exact="true"
            >
              Downloads
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
