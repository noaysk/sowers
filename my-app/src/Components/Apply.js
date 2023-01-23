import React from "react";

const Apply = () => {
  return (
    <section>
      <div className="hidden lg:block">
        <div className="flex justify-center items-center bg-title-green h-80">
          <button className="w-128 h-20 text-3xl border-4 bg-slate-900 text-white font-bold border-slate-900 hover:bg-slate-900/75 rounded">
            無料体験に申し込む　＞
          </button>
        </div>
      </div>

      {/* モバイル用 */}
      <div className="lg:hidden">
        <div className="flex justify-center items-center bg-title-green h-32 mt-10">
          <button className="py-2 px-5 text-base border-4 bg-slate-900 text-white font-bold border-slate-900 hover:bg-slate-900/75 rounded">
            無料体験に申し込む　＞
          </button>
        </div>
      </div>
    </section>
  );
};

export default Apply;
