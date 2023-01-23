import React from "react";

const Curriculum = () => {
  return (
    <section className="">
      <h2 className="text-xl mt-16 text-center">カリキュラム </h2>
      <h3 className="text-sm text-center">
        現役エンジニア講師ならではの
        <span className="block">厳選したノウハウを詰め込んでいます。</span>
      </h3>
      <table className="w-80 mx-auto text-sm text-center">
        <tr className="">
          <th className="block bg-title-green border-solid text-gray-900 p-2 mt-5">
            ゲーム制作　Javaクラス
          </th>
          <td className="block w-full border-b-1 bg-white border-b">
            Getting start with Java Using Alice
            <span className="block">(4 Hours)</span>
          </td>
          <td className="block w-full border-b-1 bg-white border-b">
            Creating Java Programs with Greenfoot
            <span className="block">(8 Hours)</span>
          </td>
          <td className="block w-full border-b-1 bg-white border-b">
            Programming the Finch Robot inn Greenfoot
            <span className="block">(8 Hours)</span>
          </td>
        </tr>
        <tr className="">
          <th className="block bg-title-green border-solid text-gray-900 p-2 mt-5">
            ウェブサイト制作　HTML/CSS クラス
          </th>
          <td className="block w-full border-b-1 bg-white border-b">
            Start at the beginning by learning HTML basics
            <span className="block">(4 Hours)</span>
          </td>
          <td className="block w-full border-b-1 bg-white border-b">
            Build a Website with HTML, CSS, and GitHub Pages
            <span className="block">(8 Hours)</span>
          </td>
          <td className="block w-full border-b-1 bg-white border-b">
            Learn CSS: Responsive Design
            <span className="block">(4 Hours)</span>
          </td>
        </tr>
        <tr className="">
          <th className="block bg-title-green border-solid text-gray-900 p-2 mt-5">
            データベース クラス
          </th>
          <td className="block w-full border-b-1 bg-white border-b">
            Solve it with SQL <span className="block">(4 Hours)</span>
          </td>
          <td className="block w-full border-b-1 bg-white border-b">
            Database Foundations <span className="block">(8 Hours)</span>
          </td>
          <td className="block w-full border-b-1 bg-white border-b">
            Database design and Programming with SQL
            <span className="block">(8 Hours)</span>
          </td>
        </tr>
      </table>
    </section>
  );
};

export default Curriculum;
