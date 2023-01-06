import React from "react";
import group1 from "../img/Group 1.png";
import group2 from "../img/Group 2.png";
import union4 from "../img/Union4.png";
import hatena from "../img/hatena.png";

const Intrest = () => {

  return (
    <div className="mx-72 my-40">
    <div className="flex">
      <img className="ml-20" src={group1} alt="" />
      <img className="ml-auto" src={group2} alt="" />
    </div>
    <h2 className="text-3xl my-10 text-center">
      {/* <span className="inline-block bg-cyan-600"> プログラミングに興味はありますか？</span> */}
      <div className="bg-title-green h-20 p-5 mx-80 rounded-2xl">
        <span className="border-dashed border-b-8 border-white tracking-wider">
          プログラミングに興味はありますか？
        </span>
      </div>
    </h2>
    <div className="flex">
      <img className="w-1/2" src={hatena} alt="" />
      <img className="ml-48 h-64" src={union4} alt="" />
    </div>
  </div>
  );
};

export default Intrest;
