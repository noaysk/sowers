import React from "react";

const Curriculum = () => {
  return (
    <section className="">
      <h2 className="text-4xl mt-32 text-center">カリキュラム </h2>
      <p className=" text-center py-5">
        現役エンジニア講師ならではの、厳選したノウハウを詰め込んでいます。
      </p>
      <table className="w-[1000px] mx-auto text-sm text-left text-gray-500 my-12 ">
        <thead className="text-xs text-gray-700 bg-title-green ">
          <tr>
            <th scope="col" className="px-6 py-3">
              クラス
            </th>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              パソコン初心者クラス
            </th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
          </tr>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              ゲーム制作　Javaクラス
            </th>
            <td className="px-6 py-4">
              Getting start with Java Using Alice (4 Hours)
            </td>
            <td className="px-6 py-4">
              Creating Java Programs with Greenfoot (8 Hours)
            </td>
            <td className="px-6 py-4">
              Programming the Finch Robot inn Greenfoot (8 Hours)
            </td>
          </tr>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              ウェブサイト制作　HTML/CSS クラス
            </th>
            <td className="px-6 py-4">
              Start at the beginning by learning HTML basics (4 Hours)
            </td>
            <td className="px-6 py-4">
              Build a Website with HTML, CSS, and GitHub Pages (8 Hours)
            </td>
            <td className="px-6 py-4">Learn CSS: Responsive Design (4 Hours)</td>
          </tr>
          <tr className="bg-white">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              データベース クラス
            </th>
            <td className="px-6 py-4">Solve it with SQL (4 Hours)</td>
            <td className="px-6 py-4">Database Foundations (8 Hours)</td>
            <td className="px-6 py-4">
              Database design and Programming with SQL (8 Hours)
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Curriculum;
