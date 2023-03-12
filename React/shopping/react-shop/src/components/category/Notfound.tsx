import React from "react";
import Foot from "../footer/Foot";
import Head from "../header/Head";
import { Link } from "react-router-dom";
export default function Notfound() {
  return (
    <div>
      <Head />
      <div className="py-60 flex flex-col items-center justify-center dark:bg-gray-800 dark:text-gray-400">
        <div className="text-9xl font-bold pb-3">404</div>
        <div className="text-5xl">페이지를 찾을 수 없습니다.</div>
        <Link to={"/"}>
          <button
            type="button"
            className="mt-10 flex w-44 h-20 items-center justify-center rounded-md border border-transparent bg-indigo-600 hover:bg-indigo-800 py-3 px-8 whitespace-nowrap text-base text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            메인으로
          </button>
        </Link>
      </div>
      <Foot />
    </div>
  );
}
