import React from "react";
import bubble1 from "../../img/m-bubble-1.png";
import bubble2 from "../../img/m-bubble-2.png";
import bubble3 from "../../img/m-bubble-3.png";
import hatena from "../../img/m-hatena.png";

const Interest = () => {
  return (
    <section className="my-10">
      <div className="flex flex-wrap justify-center">
        <img className="object-contain mx-5" src={bubble1} alt="" />
        <img className="object-contain" src={bubble2} alt="" />
      </div>
      <h2 className="text-center text-black">
        <div className="bg-title-green w-80 relative z-10 mx-auto rounded-md text-sm p-2">
          <span className="relative after:absolute after:content-[''] after:bg-white after:h-[8px] after:bottom-0 after:left-0 after:right-0 after:z-[-1] after:rounded-sm tracking-wider">
            プログラミングに興味はありますか？
          </span>
        </div>
      </h2>
      <div className="flex flex-wrap justify-center">
        <img className="object-contain mx-5" src={hatena} alt="" />
        <img className="object-contain" src={bubble3} alt="" />
      </div>
    </section>
  );
};

export default Interest;
