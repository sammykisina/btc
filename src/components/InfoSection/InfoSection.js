import React from "react";
import Button from "../ui/Button";

const InfoSection = ({
  id,
  lightBg,
  lightText,
  darkText,
  title,
  headline,
  description,
  buttonLabel,
  imgStart,
  img,
  alt,
}) => {
  return (
    <>
      {/* info container */}
      <div
        id={id}
        className={`text-[#fff] py-[100px] ${
          lightBg ? "bg-[#f9f9f9]" : "bg-[#010606]"
        } `}
      >
        {/* info wrapper */}
        <div className="grid justify-center z-[1] h-[1300px] sm:h-[1200px] md:h-[940px] w-full max-w-[1100px] mx-auto px-[24px]">
          {/* info row */}
          <div className="md:grid grid-cols-2">
            {/* column 1 */}
            <div className="mb-[15px] px-[15px] col-span-1">
              {/* text wrapper */}
              <div className="max-w-[540px] pt-0 pb-[60px]">
                {/* top line */}
                <p className=" text-[#01bf71] text-[16px] leading-[16px] font-[700] uppercase mb-[16px]">
                  {title}
                </p>
                {/* heading */}
                <div
                  className={`mb-[24px] text-[32px]  leading-[1.1] font-[600] ${
                    lightText
                      ? "text-[#f7f8fa]"
                      : "text-[#010606] sm:text-[48px]"
                  }`}
                >
                  {headline}
                </div>
                {/* subtitle */}
                <p
                  className={`max-w-[440px] mb-[35px] text-[18px] leading-[24px] ${
                    darkText ? "text-[#010606]" : "text-[#fff]"
                  }`}
                >
                  {description === "about" ? (
                    <div>
                      BT platform has a strong financial background,stable and
                      safe operating system, top-level technical team to ensure
                      the safety of your funds.
                      <br /> <br />
                      <span className="text-[#01bf71] text-[13px] leading-[10px] font-[700] uppercase mb-[16px]">
                        Security
                      </span>
                      <br />
                      BitStream Circle offers a Two way authentication system to
                      ensure that your funds are safe from untrusted parties
                      while in the platform.With the trusted Google
                      Authenticator in place at every Login Phase and Withdraw
                      your funds have never been more safer!
                      <br />
                      <br />
                      <span className="text-[#01bf71] text-[13px] leading-[10px] font-[700] uppercase mb-[16px]">
                        Analysis
                      </span>
                      <br />
                      To ensure that all our users gain from their daily
                      investments, we have a dedicated team of experts who take
                      their time to analysis the market and give accurate
                      suggestions to all our users before trading.
                      <br />
                      <br />
                      <span className="text-[#01bf71] text-[13px] leading-[10px] font-[700] uppercase mb-[16px]">
                        Online Service
                      </span>
                      <br />
                      Are you stuck? Do you have any question about any thing in
                      BTC?Contact our online support team who are ready to
                      help.Chat with our help team live and ask any thing and
                      they will offer you the help you need within seconds.
                      <br />
                      <br />
                      Get access to BTC app or Web App that allows you to make
                      unlimited trading transactions without getting charged any
                      fees.
                    </div>
                  ) : (
                    description
                  )}
                </p>
                {/* btn wrap */}
                <div className="flex justify-start">
                  <Button
                    to="howToTrade"
                    title={buttonLabel}
                    primary="true"
                    dark="true"
                  />
                </div>
              </div>
            </div>

            {/* column 2 */}
            {/* img wrap */}
            <div className="max-w-[500px] h-[400px] col-span-1 flex justify-center">
              {/* img */}
              <img className="w-[400px] mb-[10px] pr-0" src={img} alt={alt} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
