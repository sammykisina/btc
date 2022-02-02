import React from "react";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

const ButtonComponentOne = ({ hover }) => {
  return (
    <div>
      {hover ? (
        <div className="ml-[8px] text-[20px]">
          <MdArrowForward />
        </div>
      ) : (
        <div className="ml-[8px] text-[20px]">
          <MdKeyboardArrowRight />
        </div>
      )}
    </div>
  );
};

export default ButtonComponentOne;
