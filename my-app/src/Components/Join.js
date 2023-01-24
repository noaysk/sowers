import React from "react";
import join01 from "../img/01.png";
import join02 from "../img/02.png";
import join03 from "../img/03.png";
import join04 from "../img/04.png";
import join05 from "../img/05.png";

const Join = () => {
  return (
    <section className="">
      <div className="hidden xl:block">
        <div className="bg-join-green bg-no-repeat bg-contain bg-center ">
          <h2 className="text-4xl font-extrabold mt-32 text-center">
            うちのスクールに参加しませんか？
          </h2>
          <p className=" text-center pt-5"> SOWERSのスクールの特徴を紹介</p>
          <div className="mx-24">
            <ul className="flex flex-row flex-wrap justify-center mx-24">
              <li className="w-80 mx-20 mt-10">
                <p className="text-6xl">01</p>
                <img
                  className="mx-auto my-10 object-contain h-32"
                  src={join01}
                  alt=""
                />
                <p className="text-center my-5">
                  <span className="text-xl font-mono">無料体験</span>
                </p>
                <p className="break-words ">
                  blablablablablablablablablablablablablablablablablablablablablablablabla
                </p>
              </li>
              <li className="w-80 mx-20 mt-24">
                <p className="text-6xl">02</p>
                <img
                  className="mx-auto my-10 object-contain h-32"
                  src={join02}
                  alt=""
                />
                <p className="text-center my-5">
                  <span className="text-xl font-mono">チケット制</span>
                </p>
                <p className="break-words ">
                  blablablablablablablablablablablablablablablablablablablablablablablabla
                </p>
              </li>
              <li className="w-80 mx-20 mt-40">
                <p className="text-6xl">03</p>
                <img
                  className="mx-auto my-10 object-contain h-32"
                  src={join03}
                  alt=""
                />
                <p className="text-center my-5">
                  <span className="text-xl font-mono">レベルと参加人数</span>
                </p>
                <p className="break-words ">
                  blablablablablablablablablablablablablablablablablablablablablablablabla
                </p>
              </li>
              <li className="w-80 mx-20 mt-16">
                <p className="text-6xl">04</p>
                <img
                  className="mx-auto my-10 object-contain h-32"
                  src={join04}
                  alt=""
                />
                <p className="text-center my-5">
                  <span className="text-xl font-mono relative">
                    豊富な授業内容
                  </span>
                </p>
                <p className="break-words ">
                  blablablablablablablablablablablablablablablablablablablablablablablabla
                </p>
              </li>
              <li className="w-80 mx-20 mt-40">
                <p className="text-6xl">05</p>
                <img
                  className="mx-auto my-10 object-contain h-32"
                  src={join05}
                  alt=""
                />
                <p className="text-center my-5">
                  <span className="text-xl font-mono">友達割</span>
                </p>
                <p className="break-words ">
                  blablablablablablablablablablablablablablablablablablablablablablablabla
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* モバイル用 */}
      <div className="xl:hidden">
        <div className="bg-m-join-green bg-no-repeat bg-contain bg-center md:bg-join-green">
          <h2 className="text-xl mt-8 text-center">
            うちのスクールに参加しませんか？
          </h2>
          <p className="text-sm text-center pt-2">
            SOWERSのスクールの特徴を紹介
          </p>
          <div className="lg:mx-12 md:mx-5">
            <ul className="flex flex-row flex-wrap justify-center">
              <li className="w-32 m-5 md:mx-8 md:w-48">
                <p className="text-4xl md:text-5x">01</p>
                <img
                  className="mx-auto my-10 object-contain h-24"
                  src={join01}
                  alt=""
                />
                <p className="text-center my-5">
                  <span className="text-base font-mono">無料体験</span>
                </p>
                <p className="break-words text-xs">
                  blablablablablablablablablablablablablablablablablablablablablablablabla
                </p>
              </li>

              <li className="w-32 m-5 md:mx-8 md:w-48 md:mt-16">
                <p className="text-4xl md:text-5xl">02</p>
                <img
                  className="mx-auto my-10 object-contain h-24"
                  src={join02}
                  alt=""
                />
                <p className="text-center my-5">
                  <span className="text-base font-mono">チケット制</span>
                </p>
                <p className="break-words text-xs ">
                  blablablablablablablablablablablablablablablablablablablablablablablabla
                </p>
              </li>
              <li className="w-32 m-5 md:mx-8 md:w-48 md:mt-32">
                <p className="text-4xl md:text-5xl">03</p>
                <img
                  className="mx-auto my-10 object-contain h-24"
                  src={join03}
                  alt=""
                />
                <p className="text-center my-5">
                  <span className="text-base font-mono">レベルと参加人数</span>
                </p>
                <p className="break-words text-xs ">
                  blablablablablablablablablablablablablablablablablablablablablablablabla
                </p>
              </li>
              <li className="w-32 m-5 md:mx-8 md:w-48">
                <p className="text-4xl md:text-5xl">04</p>
                <img
                  className="mx-auto my-10 object-contain h-24"
                  src={join04}
                  alt=""
                />
                <p className="text-center my-5">
                  <span className="text-base font-mono relative">
                    豊富な授業内容
                  </span>
                </p>
                <p className="break-words text-xs ">
                  blablablablablablablablablablablablablablablablablablablablablablablabla
                </p>
              </li>
              <li className="w-32 m-5 md:mx-8 md:w-48 md:mt-16">
                <p className="text-4xl md:text-5xl">05</p>
                <img
                  className="mx-auto my-10 object-contain h-24"
                  src={join05}
                  alt=""
                />
                <p className="text-center my-5">
                  <span className="text-base font-mono">友達割</span>
                </p>
                <p className="break-words text-xs ">
                  blablablablablablablablablablablablablablablablablablablablablablablabla
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
