import React from "react";
import bubble4 from "../img/bubble-4.png";
import notepc from "../img/note-pc.png";
import website from "../img/website.png";
import database from "../img/database.png";
import smartphone from "../img/smartphone.png";

const Way = () => {

  return (
    <div>
       <div className="mx-48">
    <img className="ml-32" src={bubble4} alt="" />
    <h2 className=" text-3xl text-center tracking-wider">
      目的別学習法から探す
    </h2>
  </div>  

  <ul className="flex flex-row flex-wrap justify-center mx-24">
        <li className="bg-gray-300 w-0.5 mt-10"></li>
        <li className=" w-1/6 m-10 ">
          <img className="mx-auto object-contain" src={notepc} alt="" />
          <p className="text-center">
            <span className="text-xl font-mono ">PC用ゲーム</span>を制作したい
          </p>
          <p className="break-words ">
            簡単なゲームを最短1ヵ月ほどで制作。
            家庭用ゲームや高度な技術を使ったゲーム制作などは、十分なプログラミング知識やゲームエンジンの使用スキルが備わっていないと難しいです。
            まず最初はそこにたどり着くための技術を一歩一歩手に入れていきましょう。{" "}
          </p>
          <p>学ぶ言語</p>
          <ul>
            <li>・C#</li>
            <li>・C++</li>
            <li>・JavaScript</li>
            <li>・Swift</li>
            <li>・Ruby</li>
          </ul>
        </li>
        <li className="bg-gray-300 w-0.5 mt-10"></li>
        <li className=" w-1/6 m-10 ">
          <img className="mx-auto object-contain" src={website} alt="" />
          <p className="text-center">
            <span className="text-xl font-mono ">ウェブサイト</span>を制作したい
          </p>
          <p className="break-words ">
            ・費用をかけずに自分でホームページを作りたい
            ・Web制作に関わる仕事に転職したい
            基礎的なことをしっかり理解していないと、応用ができずに壁にぶち当たってしまいます。またWebサイト制作にはサイトについてだけでなく、セキュリティやインターネット通信など色々な知識が必要となります。
          </p>
          <p>学ぶ言語</p>
          <ul>
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・JavaScript</li>
          </ul>
        </li>
        <li className="bg-gray-300 w-0.5 mt-10"></li>
        <li className=" w-1/6 m-10 ">
          <img className="mx-auto object-contain" src={database} alt="" />
          <p className="text-center">
            <span className="text-xl font-mono ">データベース</span>を勉強したい
          </p>
          <p className="break-words ">
            blablablablablablablablablablablablablablablablablablablablablablablabla
          </p>
          <p>学ぶ言語</p>
          <ul>
            <li>・</li>
            <li>・</li>
            <li>・</li>
          </ul>
        </li>
        <li className="bg-gray-300 w-0.5 mt-10"></li>
        <li className=" w-1/6 m-10 ">
          <img className="mx-auto object-contain" src={smartphone} alt="" />
          <p className="text-center">
            <span className="text-xl font-mono ">スマホ用アプリ</span>
            を制作したい
          </p>
          <p className="break-words ">
            blablablablablablablablablablablablablablablablablablablablablablablabla{" "}
          </p>
          <p>学ぶ言語</p>
          <ul>
            <li>・</li>
            <li>・</li>
            <li>・</li>
          </ul>
        </li>
        <li className="bg-gray-300 w-0.5 mt-10"></li>
      </ul>



    </div>
   

  );
};

export default Way;
