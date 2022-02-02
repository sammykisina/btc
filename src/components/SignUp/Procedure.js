import React from "react";

const Procedure = ({ title, number, desc }) => {
  return (
    <div className="rounded-md bg-[#0f172a] my-3 w-[350px] h-[260px] py-2 px-2 relative">
      <div className="absolute top-2 left-3 text-4xl text-white border w-[40px] h-[40px] flex justify-center items-center rounded-full border-[#01bf71]">
        {number}
      </div>
      <div className="flex justify-center text-lg text-white ">{title}</div>

      <div className="mt-7 h-[200px] text-white">{desc}</div>
    </div>
  );
};

export default Procedure;
