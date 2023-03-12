import React, { useRef, useEffect, MouseEvent } from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ isActive, setIsActive }: { isActive: boolean; setIsActive:any; }) {
  
  const outside = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handlerOut);
    return () => {
      document.removeEventListener("mousedown", handlerOut);
    };
  },[]);

  const handlerOut:any = (event:MouseEvent) => {
    if (!outside.current!.contains(event.target)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    setIsActive(false);
  };

  return (
    <div
      ref={outside}
      className={
        isActive
          ? "fixed top-0 -left-80 h-full w-80 transition-trasnform duration-200 ease-in bg-gray-100 dark:bg-gray-700 z-50 translate-x-80"
          : ""
      }
    >
      <ul className={isActive ? "dark:text-white" : "hidden"}>
        <Link to={"/fashion"}>
          <li className="flex items-center pl-3 h-10 hover:bg-gray-600 hover:text-white rounded m-2">
            <button>패션</button>
          </li>
        </Link>
        <Link to={"/accessory"}>
          <li className="flex items-center pl-3 h-10 hover:bg-gray-600 hover:text-white rounded m-2">
            <button>액세서리</button>
          </li>
        </Link>
        <Link to={"/digital"}>
          <li className="flex items-center pl-3 h-10 hover:bg-gray-600 hover:text-white rounded m-2">
            <button>디지털</button>
          </li>
        </Link>
      </ul>
    </div>
  );
}
