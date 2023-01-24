import React from "react";

const Ticket = () => {
  return (
    <section className="">
      <div className="md:block hidden">
        <h2 className="text-4xl mt-32 text-center">チケット料金</h2>
        <p className="text-center py-5"></p>
        <table className="w-[780px] lg:w-[1000px] mx-auto text-sm text-left text-gray-500 my-12 ">
          <thead className="text-xs text-gray-700 bg-title-green">
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
              <td className="px-6 py-4">
                Learn CSS: Responsive Design (4 Hours)
              </td>
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
      </div>

      {/* モバイル用 */}
      <div className="md:hidden">
        <h2 className="text-xl mt-16 text-center">チケット料金 </h2>

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
      </div>
    </section>
  );
};

export default Ticket;
