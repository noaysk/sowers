import React from "react";
import bubble1 from "../img/bubble-1.png";
import bubble2 from "../img/bubble-2.png";
import bubble3 from "../img/bubble-3.png";
import hatena from "../img/hatena.png";

const Interest = () => {
  return (
    <section className="my-40">
      <div className="flex flex-wrap justify-center">
        <img className="object-contain w-96 mx-40" src={bubble1} alt="" />
        <img className="object-contain w-[30rem] mx-40" src={bubble2} alt="" />
      </div>
      <h2 className="text-3xl my-5 text-center text-black">
        <div className="bg-title-green h-20 p-5 w-[50rem] rounded-2xl relative z-10 mx-auto">
          <span className="relative after:absolute after:content-[''] after:bg-white after:h-[15px] after:bottom-0 after:left-0 after:right-0 after:z-[-1] after:rounded tracking-wider">
            プログラミングに興味はありますか？
          </span>
        </div>
      </h2>
      <div className="flex flex-wrap justify-center">
        <img className="object-contain w-[32rem] mx-40" src={hatena} alt="" />
        <img className="object-contain w-[28rem] mx-48" src={bubble3} alt="" />
      </div>
    </section>
  );
};

export default Interest;
