import React, { useState } from "react";
import { GrAppleAppStore } from "react-icons/gr";
import { IoLogoGoogle, IoLogoGooglePlaystore } from "react-icons/io5";
import ButtonComponentOne from "../ui/ButtonComponent/ButtonComponentOne";
import { SiBinance } from "react-icons/si";
import { openLink } from "../../utils/services";

const Downloads = () => {
  const [hoverAndroidBtn, setHoverAndroidBtn] = useState(false);
  const [hoverAppleBtn, setHoverAppleBtn] = useState(false);
  const onHoverAndroidBtn = () => {
    setHoverAndroidBtn(!hoverAndroidBtn);
  };

  const onHoverAppleBtn = () => {
    setHoverAppleBtn(!hoverAppleBtn);
  };
  return (
    // services container
    <div
      id="downloads"
      className="text-[#fff] py-[100px] bg-[#010606] h-[800px]"
    >
      {/* service h1 */}
      <h1 className="text-[2rem] sm:text-[2.5rem] text-[#fff] flex justify-center">
        Important Downloads
      </h1>

      <div className="mx-auto px-[24px] flex justify-center flex-col items-center">
        <div className="w-full md:w-[600px] flex justify-center items-center">
          {/* icons */}
          <div className="flex items-center divide-x-2 ">
            <div>
              <GrAppleAppStore className="h-[100px] w-[100px]" />
            </div>

            <div>
              <IoLogoGooglePlaystore className="h-[100px] w-[100px]" />
            </div>
          </div>
        </div>
        {/* apps */}
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
          <div
            className="mt-[32px] flex flex-col items-center  bg-[#01bf71] text-[#010606] py-[14px] px-[48px] hover:bg-[#fff] cursor-pointer rounded-md"
            onMouseEnter={onHoverAppleBtn}
            onMouseLeave={onHoverAppleBtn}
            onClick={() =>
              openLink("https://www.btcgroup.win/index/index/download.html")
            }
          >
            <div className=" flex justify-center items-center rounded-md">
              <span>BitStream Circle Apple</span>
              <ButtonComponentOne hover={hoverAppleBtn} />
            </div>
          </div>

          <div
            className="mt-[32px] flex flex-col items-center  bg-[#fff] text-[#010606] py-[14px] px-[48px] hover:bg-[#01bf71] cursor-pointer rounded-md"
            onMouseEnter={onHoverAndroidBtn}
            onMouseLeave={onHoverAndroidBtn}
            onClick={() => openLink("https://www.btctge.com/app/bt.apk")}
          >
            <div className=" flex justify-center items-center rounded-md">
              <span>BitStream Circle Android</span>
              <ButtonComponentOne hover={hoverAndroidBtn} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="mt-4">Others</span>
          <div className="underline"></div>
        </div>

        <div className="flex flex-col gap-2">
          <div
            className="w-full mt-2"
            onClick={() =>
              openLink(
                "https://play.google.com/store/apps/details?id=com.binance.dev"
              )
            }
          >
            <div className="w-[200px] border flex justify-center py-1 px-2 items-center gap-4 rounded-full">
              <span>Binance</span> <SiBinance className="text-yellow-500" />
            </div>
          </div>
          <div
            className="w-full mt-2"
            onClick={() =>
              openLink(
                "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"
              )
            }
          >
            <div className="w-[200px] border flex justify-center py-1 px-2 items-center gap-4 rounded-full">
              <IoLogoGoogle className="text-gray-500" />{" "}
              <span>Google Authenticator</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
