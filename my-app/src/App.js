import "./App.css";

import group3 from "./img/Group 3.png";

// import MyInput from "./Components/MyInput";
import Title from "./Components/Title";
import Interest from "./Components/Interest";

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
      <Title />
      <Interest />

      <div className="mx-48">
          <img className="ml-32" src={group3} alt="" />
        <h2 className=" text-3xl text-center tracking-wider">目的別学習法から探す</h2>
      </div>

      <ul className="flex flex-row flex-wrap justify-center mx-24">
  <li className="bg-title-green w-1/5 h-32 m-10">1</li>
  <li className="bg-title-green w-1/5 h-32 m-10">2</li>
  <li className="bg-title-green w-1/5 h-32 m-10">3</li>
  <li className="bg-title-green w-1/5 h-32 m-10">4</li>

</ul>



    </body>
  );
}

export default App;
