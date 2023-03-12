import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useState} from "react";
import SideBar from "./SideBar";

export default function Navbar() {

  const [active, setActive] = useState<boolean>(false);

   const onSidebarActive = () => {
     setActive(true);
   };


  return (
    <div className="px-2">
      <button className="px-1 lg:hidden xl2:hidden text-2xl dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 py-2 rounded" onClick={onSidebarActive}>
        <HiOutlineBars3 />
      </button>
      <SideBar isActive={active} setIsActive={setActive} />
    </div>
  );
  }
