import React from "react";
import triangle from "../img/triangle.png";

const Triangle = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <img className="mt-24 my-10 mx-auto" src={triangle} alt="" />
        <img className="my-10 mx-auto" src={triangle} alt="" />
        <img className="my-10 mx-auto" src={triangle} alt="" />
      </div>
      
   {/* モバイル用 */}
      <div className="lg:hidden">
        <img className="my-5 mx-auto w-16" src={triangle} alt="" />
        <img className="my-5 mx-auto w-16" src={triangle} alt="" />
        <img className="my-5 mx-auto w-16" src={triangle} alt="" />
      </div>
    </div>
  );
};

export default Triangle;
