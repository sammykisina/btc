import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../store/context";
import SidebarLink from "./SidebarLink";

function Sidebar() {
  const { isSidebarOpen, closeSidebarModal } = useGlobalContext();

  return (
    <>
      {/* sidebar container */}
      <div
        className={`fixed z-[999] w-full h-full bg-[#0d0d0d] grid items-center top-0 left-0 sidebarTranslation ${
          isSidebarOpen ? "opacity-100" : "opacity-0"
        } ${isSidebarOpen ? "top-0" : "-top-full"}`}
      >
        {/* close icon */}
        <div
          className="text-[#fff] absolute top-[1.2rem] right-[1.5rem] bg-transparent text-[1.5rem] cursor-pointer outline-none"
          onClick={() => closeSidebarModal()}
        >
          <FaTimes />
        </div>

        {/* items */}
        {/* sidebar links container */}
        <div className="text-[#fff]">
          {/* links */}
          <ul className="sidebarLinks">
            {/* link */}
            <SidebarLink to="about" title="About" />
            <SidebarLink to="discover" title="Discover" />
            <SidebarLink to="services" title="Services" />
            <SidebarLink to="signup" title="Sign Up" />
          </ul>

          {/* the sign in button */}
          <div className="flex items-center justify-center">
            <Link
              className="rounded-full bg-[#01bf71] whitespace-nowrap py-[10px] px-[64px] text-[#010606] text-[16px] outline-none cursor-pointer signUpTransition hover:bg-[#fff] hover:text-[#010606]"
              to="/singin"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
