import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="flex">
      <Link to="/">
        <div className="text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap pr-7 pl-10">
          React Shop
        </div>
      </Link>
      <ul className="w-40 flex font-bold text-sm justify-between items-center sm:hidden md:flex list-none dark:text-white">
        <li>
          <Link to={"/fashion"}>
            <button className="hover:text-white">패션</button>
          </Link>
        </li>
        <li>
          <Link to={"/accessory"}>
            <button className="hover:text-white">액세서리</button>
          </Link>
        </li>
        <li>
          <Link to={"/digital"}>
            <button className="hover:text-white">디지털</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
