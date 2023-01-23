import React from "react";
import join01 from "../../img/01.png";
import join02 from "../../img/02.png";
import join03 from "../../img/03.png";
import join04 from "../../img/04.png";
import join05 from "../../img/05.png";

const Join = () => {
  return (
    <section className="">
      <div className="bg-m-join-green bg-no-repeat bg-contain bg-center ">
        <h2 className="text-xl mt-16 text-center">
          うちのスクールに参加しませんか？
        </h2>
        <p className="text-sm text-center pt-2"> SOWERSのスクールの特徴を紹介</p>
        <div className="">
          <ul className="flex flex-row flex-wrap justify-center">
            <li className="w-32 m-5">
              <p className="text-4xl">01</p>
              <img
                className="mx-auto my-10 object-contain h-24"
                src={join01}
                alt=""
              />
              <p className="text-center my-5">
                <span className="text-base font-mono">
                  無料体験
                </span>
              </p>
              <p className="break-words text-xs">
                blablablablablablablablablablablablablablablablablablablablablablablabla
              </p>
            </li>


            
            <li className="w-32 m-5">
              <p className="text-4xl">02</p>
              <img
                className="mx-auto my-10 object-contain h-24"
                src={join02}
                alt=""
              />
              <p className="text-center my-5">
                <span className="text-base font-mono">
                  チケット制
                </span>
              </p>
              <p className="break-words text-xs ">
                blablablablablablablablablablablablablablablablablablablablablablablabla
              </p>
            </li>
            <li className="w-32 m-5">
              <p className="text-4xl">03</p>
              <img
                className="mx-auto my-10 object-contain h-24"
                src={join03}
                alt=""
              />
              <p className="text-center my-5">
                <span className="text-base font-mono">
                  レベルと参加人数
                </span>
              </p>
              <p className="break-words text-xs ">
                blablablablablablablablablablablablablablablablablablablablablablablabla
              </p>
            </li>
            <li className="w-32 m-5">
              <p className="text-4xl">04</p>
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
            <li className="w-32 m-5">
              <p className="text-4xl">05</p>
              <img
                className="mx-auto my-10 object-contain h-24"
                src={join05}
                alt=""
              />
              <p className="text-center my-5">
                <span className="text-base font-mono">
                  友達割
                </span>
              </p>
              <p className="break-words text-xs ">
                blablablablablablablablablablablablablablablablablablablablablablablabla
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Join;
