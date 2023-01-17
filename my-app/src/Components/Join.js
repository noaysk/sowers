import React from "react";
import join01 from "../img/01.png";
import join02 from "../img/02.png";
import join03 from "../img/03.png";
import join04 from "../img/04.png";
import join05 from "../img/05.png";

const Join = () => {
  return (
    <div className="">
      <div className="bg-join-green bg-[length:1800px_1500px] bg-no-repeat bg-right-top ">
        <h2 className="text-4xl mt-32 text-center">
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
                <span className="text-xl font-mono">
                  無料体験
                </span>
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
                <span className="text-xl font-mono">
                  チケット制
                </span>
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
                <span className="text-xl font-mono">
                  レベルと参加人数
                </span>
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
                <span className="text-xl font-mono">
                  友達割
                </span>
              </p>
              <p className="break-words ">
                blablablablablablablablablablablablablablablablablablablablablablablabla
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Join;
