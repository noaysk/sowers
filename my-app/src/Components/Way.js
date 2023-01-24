import React from "react";
import bubble4 from "../img/bubble-4.png";
import notepc from "../img/note-pc.png";
import website from "../img/website.png";
import database from "../img/database.png";
import smartphone from "../img/smartphone.png";

const Way = () => {
  return (
    <section>
      <div className="hidden xl:block">
        <div className="mx-48">
          <img className="ml-32" src={bubble4} alt="" />
          <h2 className=" text-3xl text-center tracking-wider">
            目的別学習法から探す
          </h2>
        </div>
        <ul className="flex flex-row flex-wrap justify-center mx-24">
          <li className="bg-gray-300 w-0.5 mt-10"></li>
          <li className="w-72 m-10 ">
            <img className="mx-auto object-contain h-48" src={notepc} alt="" />
            <h3 className="text-center my-5 relative z-10">
              <span className="text-xl font-mono relative after:absolute after:content-[''] after:bg-blue after:h-[12px] after:bottom-0 after:left-0 after:right-0 after:z-[-1] after:rounded-sm">
                PC用ゲーム
              </span>
              を制作したい
            </h3>
            <p className="break-words ">
              簡単なゲームを最短1ヵ月ほどで制作。
              家庭用ゲームや高度な技術を使ったゲーム制作などは、十分なプログラミング知識やゲームエンジンの使用スキルが備わっていないと難しいです。
              まず最初はそこにたどり着くための技術を一歩一歩手に入れていきましょう。{" "}
            </p>
            <div className="mt-5">
              <p>学ぶ言語</p>
              <ul>
                <li>・C#</li>
                <li>・C++</li>
                <li>・JavaScript</li>
                <li>・Swift</li>
                <li>・Ruby</li>
              </ul>
            </div>
          </li>
          <li className="bg-gray-300 w-0.5 mt-10"></li>
          <li className=" w-72 m-10 ">
            <img className="mx-auto object-contain h-48" src={website} alt="" />
            <h3 className="text-center my-5 relative z-10">
              <span className="text-xl font-mono relative after:absolute after:content-[''] after:bg-pink after:h-[12px] after:bottom-0 after:left-0 after:right-0 after:z-[-1] after:rounded-sm">
                ウェブサイト
              </span>
              を制作したい
            </h3>
            <p className="break-words ">
              ・費用をかけずに自分でホームページを作りたい
              ・Web制作に関わる仕事に転職したい
              基礎的なことをしっかり理解していないと、応用ができずに壁にぶち当たってしまいます。またWebサイト制作にはサイトについてだけでなく、セキュリティやインターネット通信など色々な知識が必要となります。
            </p>
            <div className="mt-5">
              <p>学ぶ言語</p>
              <ul>
                <li>・HTML</li>
                <li>・CSS</li>
                <li>・JavaScript</li>
              </ul>
            </div>
          </li>
          <li className="bg-gray-300 w-0.5 mt-10"></li>
          <li className=" w-72 m-10 ">
            <img
              className="mx-auto object-contain h-48"
              src={database}
              alt=""
            />
            <h3 className="text-center my-5 relative z-10">
              <span className="text-xl font-mono relative after:absolute after:content-[''] after:bg-green after:h-[12px] after:bottom-0 after:left-0 after:right-0 after:z-[-1] after:rounded-sm">
                データベース
              </span>
              を勉強したい
            </h3>
            <p className="break-words ">
              blablablablablablablablablablablablablablablablablablablablablablablabla
            </p>
            <div className="mt-5">
              <p>学ぶ言語</p>
              <ul>
                <li>・</li>
                <li>・</li>
                <li>・</li>
              </ul>
            </div>
          </li>
          <li className="bg-gray-300 w-0.5 mt-10"></li>
          <li className=" w-72 m-10 ">
            <img
              className="mx-auto object-contain h-48"
              src={smartphone}
              alt=""
            />
            <h3 className="text-center my-5 relative z-10">
              <span className="text-xl font-mono relative after:absolute after:content-[''] after:bg-yellow after:h-[12px] after:bottom-0 after:left-0 after:right-0 after:z-[-1] after:rounded-sm">
                スマホ用アプリ
              </span>
              を制作したい
            </h3>
            <p className="break-words ">
              blablablablablablablablablablablablablablablablablablablablablablablabla{" "}
            </p>
            <div>
              <p className="mt-5">学ぶ言語</p>
              <ul>
                <li>・</li>
                <li>・</li>
                <li>・</li>
              </ul>
            </div>
          </li>
          <li className="bg-gray-300 w-0.5 mt-10"></li>
        </ul>
      </div>

      {/* モバイル用 */}
      <div className="xl:hidden">
        <div className="">
          <img className="w-32 ml-5 md:w-40 md:ml-32" src={bubble4} alt="" />
          <h2 className="text-xl text-center">目的別学習法から探す</h2>
        </div>
        <ul className="flex flex-row flex-wrap justify-center">
          <li className="w-32 m-5 ">
            <img className="mx-auto object-contain" src={notepc} alt="" />
            <h3 className="text-center my-5 relative z-10 text-xs">
              <span className="block text-base font-mono relative after:absolute after:content-[''] after:bg-blue after:h-[10px] after:bottom-0 after:left-0 after:right-0 after:z-[-1] after:rounded-sm">
                PC用ゲーム
              </span>
              を制作したい
            </h3>
            <p className="break-words text-xs">
              簡単なゲームを最短1ヵ月ほどで制作。
              家庭用ゲームや高度な技術を使ったゲーム制作などは、十分なプログラミング知識やゲームエンジンの使用スキルが備わっていないと難しいです。
              まず最初はそこにたどり着くための技術を一歩一歩手に入れていきましょう。
            </p>
            <div className="mt-5 text-xs">
              <p>学ぶ言語</p>
              <ul>
                <li>・C#</li>
                <li>・C++</li>
                <li>・JavaScript</li>
                <li>・Swift</li>
                <li>・Ruby</li>
              </ul>
            </div>
          </li>
          <li className="bg-gray-300 w-0.5 mt-10"></li>
          <li className=" w-32 m-5 ">
            <img className="mx-auto object-contain" src={website} alt="" />
            <h3 className="text-center my-5 relative z-10 text-xs">
              <span className="block text-base font-mono relative after:absolute after:content-[''] after:bg-pink after:h-[10px] after:bottom-0 after:left-0 after:right-0 after:z-[-1] after:rounded-sm">
                ウェブサイト
              </span>
              を制作したい
            </h3>
            <p className="break-words text-xs">
              ・費用をかけずに自分でホームページを作りたい
              ・Web制作に関わる仕事に転職したい
              基礎的なことをしっかり理解していないと、応用ができずに壁にぶち当たってしまいます。またWebサイト制作にはサイトについてだけでなく、セキュリティやインターネット通信など色々な知識が必要となります。
            </p>
            <div className="mt-5 text-xs">
              <p>学ぶ言語</p>
              <ul>
                <li>・HTML</li>
                <li>・CSS</li>
                <li>・JavaScript</li>
              </ul>
            </div>
          </li>
          <li className="md:bg-gray-300 md:w-0.5 md:mt-10"></li>

          <li className=" w-32 m-5 ">
            <img className="mx-auto object-contain" src={database} alt="" />
            <h3 className="text-center my-5 relative z-10 text-xs">
              <span className="block text-base font-mono relative after:absolute after:content-[''] after:bg-green after:h-[10px] after:bottom-0 after:left-0 after:right-0 after:z-[-1] after:rounded-sm">
                データベース
              </span>
              を勉強したい
            </h3>
            <p className="break-words text-xs">
              blablablablablablablablablablablablablablablablablablablablablablablabla
            </p>
            <div className="mt-5 text-xs">
              <p>学ぶ言語</p>
              <ul>
                <li>・</li>
                <li>・</li>
                <li>・</li>
              </ul>
            </div>
          </li>
          <li className="bg-gray-300 w-0.5 mt-10"></li>
          <li className=" w-32 m-5 ">
            <img className="mx-auto object-contain" src={smartphone} alt="" />
            <h3 className="text-center my-5 relative z-10 text-xs">
              <span className="block text-base font-mono relative after:absolute after:content-[''] after:bg-yellow after:h-[10px] after:bottom-0 after:left-0 after:right-0 after:z-[-1] after:rounded-sm">
                スマホ用アプリ
              </span>
              を制作したい
            </h3>
            <p className="break-words text-xs">
              blablablablablablablablablablablablablablablablablablablablablablablabla{" "}
            </p>
            <div className="mt-5 text-xs">
              <p>学ぶ言語</p>
              <ul>
                <li>・</li>
                <li>・</li>
                <li>・</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Way;
