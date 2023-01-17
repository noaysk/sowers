import React from "react";
import bubble1 from "../img/bubble-1.png";
import bubble2 from "../img/bubble-2.png";
import bubble3 from "../img/bubble-3.png";
import hatena from "../img/hatena.png";

const Intrest = () => {

  return (
    <div className="mx-80 my-40">
    <div className="flex">
      <img className="object-contain w-96 ml-24" src={bubble1} alt="" />
      <img className="ml-auto object-contain w-[30rem]" src={bubble2} alt="" />
    </div>
    <h2 className="text-3xl  my-5 text-center text-black">
      <div className="bg-title-green h-20 p-5 mx-72 rounded-2xl relative z-10">
        <span className="relative after:absolute after:content-[''] after:bg-white after:h-[15px] after:bottom-0 after:left-0 after:right-0 after:z-[-1] after:rounded tracking-wider">
           プログラミングに興味はありますか？ 
        </span>
      </div>
    </h2>
    <div className="flex mr-24">
      <img className="object-contain w-[32rem]" src={hatena} alt="" />
      <img className="ml-auto object-contain w-[28rem]" src={bubble3} alt="" />
    </div>
  </div>
  );
};

export default Intrest;
