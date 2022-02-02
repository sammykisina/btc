import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import Button from "../ui/Button";
import ButtonComponentOne from "../ui/ButtonComponent/ButtonComponentOne";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    // Hero container
    <div className="bg-[#0c0c0c] flex justify-center items-center px-[30px] h-[800px] relative z-[1] heroContent">
      {/* hero bg */}
      <div className=" absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden">
        {/* video bg */}
        <video
          src={Video}
          autoPlay
          loop
          muted
          type="video/mp4"
          className="w-full h-full heroVideoBg"
        ></video>
      </div>

      {/* hero content */}
      <div className="z-[3] max-w-[1200px] absolute py-[8px] px-[24px] flex flex-col items-center">
        {/* hero header */}
        <div className="text-[#fff] text-[32px] sm:text-[40px] md:text-[48px] text-center">
          Making Money Made Easy
        </div>
        {/* hero paragraph */}
        <div className="mt-[24px] text-[#fff]  text-center max-w-[600px] text-[18px] sm:text-[24px] md:text-[24px]">
          Sign up for a new account today and earn profits each single day.
        </div>

        {/* hero brn wrapper */}
        <div
          className="mt-[32px] flex flex-col items-center rounded-full"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
        >
          <Button
            to="signup"
            title=" Get started"
            primary="true"
            dark="true"
            btnComponent={<ButtonComponentOne hover={hover} />}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
