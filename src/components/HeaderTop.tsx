import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center=">
          <div className="hidden lg:flex gap-3">
            <div className="headerIconWrapper text-2xl">
              <BsLinkedin />
            </div>
            <div className="headerIconWrapper text-2xl">
              <BsGithub />
            </div>
          </div>
          <div className="text-gray-500 text-[12px]">
            <b> FREE SHIPPING </b>FOR ORDERS OVER{" "}
            <b>
              <u>$100+ </u>
            </b>
          </div>
          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="Spanish">Español</option>
              <option value="French">Français</option>
              <option value="Korean">한국어</option>
              <option value="Japanese">日本語</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
