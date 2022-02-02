import React from "react";
import { Link } from "react-scroll";
import { useGlobalContext } from "../../store/context";

function SidebarLink({ to, title }) {
  const { closeSidebarModal } = useGlobalContext();
  return (
    <li className="flex items-center w-auto text-center justify-center font-[1.5rem] sidebarTranslation text-[#fff] cursor-pointer hover:text-[#01bf71] ">
      <Link onClick={() => closeSidebarModal()} to={to}>
        {title}
      </Link>
    </li>
  );
}

export default SidebarLink;
