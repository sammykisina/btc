import React from "react";

const Card = ({ icon, title1, desc }) => {
  return (
    <div className="bg-[#fff] flex flex-col justify-start items-center rounded-[10px] max-h-[340px] p-[30px] shadow-md btnTransition transform hover:scale-[1.02] cursor-pointer">
      {/* service icon */}
      <img className="h-[160px] w-[160px] mb-[10px]" src={icon} alt="" />

      {/* service  h2*/}
      <h2 className="text-[1rem] mb-[10px] font-bold">{title1}</h2>

      {/*  services p*/}
      <p className="text-[1rem] text-center">{desc}</p>
    </div>
  );
};

export default Card;
