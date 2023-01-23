import React from "react";
import title from "../img/title.png";
import top1 from "../img/top1.png";

const Title = () => {
  return (
      <content className="flex">
        <div className="w-3/5">
          <div className="bg-title-green h-128 top-48 flex justify-center">
            <div className="pt-20 ">
              <div className=" text-font text-xl font-bold ">
                <p className="ml-10 relative z-10">
                  <span className="relative after:absolute after:content-[''] after:bg-white after:h-[12px] after:bottom-0 after:left-0 after:right-0 after:z-[-1] after:rounded-sm">
                    「学ぶこと」ｘ「成長すること」
                  </span>
                </p>
              </div>
              <img className="my-5 " src={title} alt="" />
              <div className="my-10">
                <button className="border-4 bg-slate-900 text-white font-bold border-slate-900 hover:bg-slate-900/75 py-2 px-4 rounded m-5">
                  資料請求　＞
                </button>
                <button className="border-4 bg-white text-black font-bold border-slate-900 hover:bg-slate-300 py-2 px-4 rounded m-5">
                  お問い合わせ
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5 ">
          <img className="my-0 mx-auto" src={top1} alt="" />
        </div>
      </content>
  );
};

export default Title;
