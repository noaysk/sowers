import React from "react";
import title from "../../img/title.png";
import mtop1 from "../../img/m-top.png";

const Title = () => {
  return (
    <header className=" w-full bg-title-green h-104">
      <div className="pt-20">
        <div className=" text-font text-sm font-bold ">
          <p className="ml-8 relative z-10">
            <span className="relative after:absolute after:content-[''] after:bg-white after:h-[8px] after:bottom-0 after:left-0 after:right-0 after:z-[-1] after:rounded-sm">
              「学ぶこと」ｘ「成長すること」
            </span>
          </p>
        </div>
        <h1>
          <img className="w-96 mx-auto" src={title} alt="" />
        </h1>
        <div className="flex my-10">
          <button className="w-40 h-12 border-4 text-sm bg-slate-900 text-white  border-slate-900 hover:bg-slate-900/75 py-2 px-4 rounded m-5">
            無料体験申し込み
          </button>
          <img className="w-40" src={mtop1} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Title;
