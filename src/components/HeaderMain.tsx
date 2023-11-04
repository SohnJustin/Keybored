import React from "react";
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6 ">
      <div className="container sm:flex justify-between items-center gap-8  ">
        <div className="logoNameWrapper h-20 w-fit px-5 text-red-500 text-5xl font-bold sm:m-auto sm:p-auto">
          Key
          <div className="text-2xl xl:p-auto sm:text-sn text-5xl text-cyan-500">
            Bored
          </div>
        </div>
        <div className="w-full sm:w-[300px] md:w-[70%] relative pt-6">
          <input
            type="text"
            placeholder="Enter Product Name..."
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
          />

          <BsSearch
            className="absolute right-0 top-6 mr-3 mt-3 text-gray-400 "
            size={20}
          />
        </div>
        <div className="relative hidden lg:flex gap-4 pl-8 pt-6 text-gray-500 text-[30px]">
          <BiUser />

          <div className="relative">
            <FiHeart size={30} />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          <div className="relative">
            <HiOutlineShoppingBag size={30} />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
