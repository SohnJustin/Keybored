import React from "react";
import Image from "next/image";

const Reviews = () => {
  return (
    <div>
      <div className="container pt-16 pb-16 grid-col-2">
        <h2 className="font-medium text-2xl pb-4">Reviews</h2>
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
          <div className=" border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
            <div className="text-center flex flex-col items-center gap-1">
              <Image
                className="rounded-full inline-block"
                src="/laugh.png"
                width={80}
                height={80}
                alt="dp"
              />
              <h2 className=" text-gray-500 font-black text-[20px]">
                Justin Sohn
              </h2>
              <p>CEO of KeyBored</p>
              <Image
                className="inline-block py-2"
                src="/quotation-mark.png"
                width={30}
                height={30}
                alt="rating"
              />
              <p className="max-w-[200px] text-gray-500">
                If you ever feel bored and want a keyboard come to KeyBored!!
                we'll turn your boredom into a keyboard (with money of course).
              </p>
              <Image
                className="inline-block py-2"
                src="/bottom-quotation-mark.png"
                width={30}
                height={30}
                alt="rating"
              />
            </div>
          </div>
          <div className="bg-red-600 bg-[url(/cta-banner.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center">
            <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
              <button className=" bg-black text-white p-2 rounded-md">
                25% OFF DISCOUNT
              </button>
              <h2 className="font-extrabold text-2xl text-[#272727]">
                Japanese Edition
              </h2>
              <p className="text-gray-500 texct-[20px]">
                Starting as low as <b className="text-[#272727]">$49.99</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
