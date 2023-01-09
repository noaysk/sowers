import React from "react";
import title from "../img/title.png";
import top1 from "../img/top1.png";

const Title = () => {

  return (
    <div className=" ">
   
      <div className="flex ">
        <div className="w-3/5">
          <div className="bg-title-green h-128 top-48 flex justify-center">
            <div className="pt-20 ">
              {/* <div className=" text-font text-xl font-bold relative">
                <p className="ml-10 "> 
                  <div className="absolute bottom-0 w-80 h-3 bg-white "></div>
                  <span className="relative z-10">
                    「学ぶこと」ｘ「成長すること」
                  </span> */}

              <div className=" text-font text-xl font-bold ">
                <p className="ml-10 relative z-10">
                  <span className="relative after:absolute after:content-[''] after:bg-white after:h-[12px] after:bottom-0 after:left-0 after:right-0 after:z-[-1] after:rounded-sm">
                    「学ぶこと」ｘ「成長すること」
                  </span>

                  {/* <span className="border-dashed border-b-4 border-white ">
                    「学ぶこと」ｘ「成長すること」
                  </span> */}
                </p>
              </div>
              <img className="my-5" src={title} alt="" />

              <div className="my-10">
                <button class="border-4 bg-slate-900 text-white font-bold border-slate-900 hover:bg-slate-900/75 py-2 px-4 rounded m-5">
                  資料請求　＞
                </button>
                <button class="border-4 bg-white text-black font-bold border-slate-900 hover:bg-slate-300 py-2 px-4 rounded m-5">
                  お問い合わせ
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/5 mt-24">
          <img className="my-0 mx-auto" src={top1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Title;
