import "./App.css";

import title from "./img/Group 4.png";

import hatena from "./img/hatena.png";
// import bubblem from "./img/bubble-m.png";
// import bubbleb from "./img/bubble-b.png";

// import union2  from "./img/Union2.png";
// import union3  from "./img/Union3.png";
import union4 from "./img/Union4.png";

import group1 from "./img/Group 1.png";
import group2 from "./img/Group 2.png";
import group3 from "./img/Group 3.png";

import top1 from "./img/top1.png";

// import MyInput from "./Components/MyInput";

function App() {
  // return<MyInput ></MyInput>;
  return (
    // <div className="flex">
    //   <div className={`w-72 h-screen bg-dark-purple`}>Sidebar</div>
    //   <div className="p-7 text-2xl font-semibold">
    //     <h1>Here is our main heading</h1>
    //   </div>
    // </div>
    <body className=" bg-title-green/25">
      <div className=" ">
        <div className="my-20">
          <div className="flex ">
            <div className="w-3/5">
              <div className="bg-title-green h-128 top-48 flex justify-center">
                <div className="pt-20 ">
                  <div className=" text-font text-xl font-bold ">
                    <p className="ml-10">
                      <span className="border-dashed border-b-4 border-white ">
                        「学ぶこと」ｘ「成長すること」
                      </span>
                    </p>

                    {/* <div className="bg-white h-2 w-80"></div> */}
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

        <div className="mx-72 my-40">
          <div className="flex">
            <img className="ml-20" src={group1} alt="" />
            <img className="ml-auto" src={group2} alt="" />
          </div>
          <h2 className="text-3xl my-10 text-center">
            {/* <span className="inline-block bg-cyan-600"> プログラミングに興味はありますか？</span> */}
            <div className="bg-title-green h-20 p-5 mx-80 rounded-2xl">
              <span className="border-dashed border-b-8 border-white">
             
                プログラミングに興味はありますか？
              </span>
            </div>
          </h2>
          <div className="flex">
            <img className="w-1/2" src={hatena} alt="" />
            <img className="ml-48 h-64" src={union4} alt="" />
          </div>
        </div>

        <div className="mx-48">
          <div className="flex">
            <img className="ml-32" src={group3} alt="" />
          </div>
          <h2 className="text-3xl my-10 mx-auto">目的別学習法から探す</h2>
        </div>
      </div>
    </body>
  );
}

export default App;
