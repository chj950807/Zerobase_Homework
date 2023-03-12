import React from "react";
import { GrFacebookOption, GrGithub, GrInstagram } from "react-icons/gr";

export default function Foot() {
  return (
    <div className="bg-gray-200 dark:text-gray-200 dark:bg-gray-900">
      <div className="text-sm mx-auto max-w-2xl py-5 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col items-center">
        <div className="pb-4">제로베이스</div>
        <div className="pb-4 flex justify-around w-80 ">
          <span>
            <img className="w-10 h-6 rounded bg-white" src="./visa.png" />
          </span>
          <span>
            <img className="w-10 h-6 rounded bg-white" src="./mastercard.png" />
          </span>
          <span>
            <img className="w-10 h-6 rounded bg-white" src="./amex.png" />
          </span>
          <span>
            <img className="w-10 h-6 rounded bg-white" src="./paypal.png" />
          </span>
          <span>
            <img className="w-10 h-6 rounded bg-white" src="./diners.png" />
          </span>
          <span>
            <img className="w-10 h-6 rounded bg-white" src="./discover.png" />
          </span>
        </div>
        <div className="pb-4 flex justify-around text-2xl w-32">
          <a
            href="https://www.facebook.com/0base"
            target={"_blank"}
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <span>
              <GrFacebookOption />{" "}
            </span>
          </a>
          <a
            href="https://www.instagram.com/zerobase.official/"
            target={"_blank"}
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <span>
              <GrInstagram />
            </span>
          </a>
          <a
            href="https://github.com/oinochoe"
            target={"_blank"}
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <span>
              <GrGithub />
            </span>
          </a>
        </div>
        <div>Copyright © 2022 Zero Base</div>
      </div>
    </div>
  );
}
