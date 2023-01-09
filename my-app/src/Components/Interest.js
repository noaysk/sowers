import React from "react";
import bubble1 from "../img/bubble-1.png";
import bubble2 from "../img/bubble-2.png";
import bubble3 from "../img/bubble-3.png";
import hatena from "../img/hatena.png";

const Intrest = () => {

  return (
    <div className="mx-72 my-40">
    <div className="flex">
      <img className="ml-20" src={bubble1} alt="" />
      <img className="ml-auto" src={bubble2} alt="" />
    </div>
    <h2 className="text-3xl my-10 text-center">
      {/* <span className="inline-block bg-cyan-600"> プログラミングに興味はありますか？</span> */}
      <div className="bg-title-green h-20 p-5 mx-80 rounded-2xl relative z-10">
        <span className="relative after:absolute after:content-[''] after:bg-white after:h-[15px] after:bottom-0 after:left-0 after:right-0 after:z-[-1] after:rounded tracking-wider">
          プログラミングに興味はありますか？
        </span>
      </div>
    </h2>
    <div className="flex">
      <img className="w-1/2" src={hatena} alt="" />
      <img className="ml-48 h-64" src={bubble3} alt="" />
    </div>
  </div>
  );
};

export default Intrest;
