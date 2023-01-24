import React from "react";
import title from "../img/title.png";
import top1 from "../img/top1.png";
import mtop1 from "../img/m-top.png";

const Title = () => {
  return (
    <header>
      <div className="hidden xl:block">
        <div className="flex ">
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
        </div>
      </div>




      {/* <div className="min-lg:flex bg-title-green h-128 hidden">
            <div className="top-48 flex justify-center w-152">
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
      
          <div className="self-center w-80 mx-auto">
            <img className="" src={mtop1} alt="" />
          </div>
        </div>



 */}




      {/* モバイル用 */}
      <div className="xl:hidden ">
      <div className="bg-title-green h-104 md:h-128 ">
          <div className="pt-20">
            <div className="text-font text-sm font-bold md:ml-5">
              <p className="ml-8 relative z-10">
                <span className="relative after:absolute after:content-[''] after:bg-white after:h-[8px] after:bottom-0 after:left-0 after:right-0 after:z-[-1] after:rounded-sm">
                  「学ぶこと」ｘ「成長すること」
                </span>
              </p>
            </div>
            <h1>
              <img
                className="w-96 mx-auto md:ml-10 md:mt-5 md:w-128"
                src={title}
                alt=""
              />
            </h1>
            <div className="flex my-10 md:my-3 md:mx-24">
              <button className="w-40 h-12 border-4 text-sm bg-slate-900 text-white  border-slate-900 hover:bg-slate-900/75 py-2 px-4 rounded m-5">
                無料体験申し込み
              </button>
              <img className="w-40 md:w-56 md:ml-auto" src={mtop1} alt="" />
            </div>
          </div>
        </div>

        

        
      </div>
    </header>
  );
};

export default Title;
