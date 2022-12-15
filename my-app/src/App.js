import "./App.css";
import bubble from "./img/bubble.png";
import bubblem from "./img/bubble-m.png";

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
    <div className="text-center h-screen ">
      <div className="my-8">
        <h1 className="text-5xl font-semibold  mt-48">
          Here is our main heading
        </h1>
        <div className="">
          <button class="border-4 bg-slate-900 text-white font-bold border-slate-900 hover:bg-slate-900/75 py-2 px-4 rounded m-5">
            資料請求　＞
          </button>
          <button class="border-4              text-black font-bold border-slate-900 hover:bg-slate-300 py-2 px-4 rounded m-5">
            お問い合わせ
          </button>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center">
          <img className="w-80" src={bubble} alt="" />
          <img className="w-80" src={bubblem} alt="" />
          <img className="w-80 self-end" src={bubblem} alt="" />

        </div>
        <h2 className="text-3xl">プログラミングに興味はありますか？</h2>
      </div>
    </div>
  );
}

export default App;
