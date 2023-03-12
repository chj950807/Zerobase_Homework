import React from "react";
import Backgroundmode from "./Backgroundmode";
import Cart from "./Cart";
import Header from "./Header";
import Navbar from "./Navbar";
import Search from "./Search";

export default function Head() {

  return (
    <div className="bg-gray-100 flex flex-nowrap items-center w-full h-20 text-black dark:bg-gray-900">
      <Navbar />
      <Header />
      <Backgroundmode />
      <Search />
      <Cart />
    </div>
  );
}
