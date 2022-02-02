import React from "react";
// import Button from "../ui/Button";
import Procedure from "./Procedure";

const SignUp = ({
  id,
  lightBg,
  lightText,
  darkText,
  title,
  headline,
  description,
}) => {
  return (
    <>
      {/* info container */}
      <div
        id={id}
        className={`h-[2400px] md:h-[1400px] py-[100px] ${
          lightBg ? "bg-[#f9f9f9]" : "bg-[#010606]"
        } `}
      >
        {/* info wrapper */}
        <div className="grid justify-center z-[1] h-[500px] w-full max-w-[1100px] mx-auto px-[24px]">
          {/* info row */}
          <div className="md:grid grid-cols-2">
            {/* column 1 */}
            <div className="px-[15px] col-span-1">
              {/* text wrapper */}
              <div className="max-w-[540px] pt-0">
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
                  className={`max-w-[440px] mb-[5px] text-[18px] leading-[24px] ${
                    darkText ? "text-[#010606]" : "text-[#fff]"
                  }`}
                >
                  {description}
                </p>
              </div>
            </div>

            {/* column 2 */}
            {/* img wrap */}
            <div className="max-w-[500px] h-[400px] col-span-1">
              {/* title */}
              <div className="text-[#010606] text-lg flex items-center  flex-col">
                <span className="font-bold"> What You are supposed to do.</span>
                <div className="underline"></div>
              </div>

              {/* data */}
              <div className="">
                <div className="mx-[5px] flex flex-col items-center">
                  <div>
                    <Procedure
                      title="Create Binance Account"
                      number="1"
                      desc="Download and create your binance account so as to form a wallet to hold your funds.To ensure your account is valid and ready to use, you should verify it first."
                    />
                    <Procedure
                      title="Register In BTC"
                      number="2"
                      desc="Use the BTC app or BTC web with the link www.btcgroup.win/index/login/register.html?fid=358357 to create your BTC account with just few clicks. This will include your phone number and a strong password to ensure security of your funds.DONT SHARE YOUR PASSWORD WITH ANYBODY."
                    />
                  </div>

                  <div className="md:hidden">
                    <Procedure
                      title="Set Finance Password"
                      number="3"
                      desc="Set a secure and strong finance password after creating your BTC account that will be used to withdraw your funds.DO NOT FOR ANY REASON SHARE YOUR FINANCE PASSWORD WITH ANYONE"
                    />
                    <Procedure
                      title="Get Google Authenticator Code"
                      number="4"
                      desc="Because BTC cares more about the security of your funds,we take it a step further with Google Authenticator.Scan your BTC QR Code to ensure that you can't lose funds to scanners or thieves.If not able to scan the QR code, copy the given marked red letters and paste it on your Google Authenticator and enter the name btc.gtoupwin to get your code."
                    />
                    <Procedure
                      title="Bid Binance wallet address"
                      number="5"
                      desc="Get your wallet address on binance by clicking deposit, choose USDT, choose network tron (trc20) network and copy the given wallet address.In BTC, click User tab, withdraw address section and paste it in the provided field.Fill the rest of the data and save."
                    />
                    <Procedure
                      title="Recharge BTC Account"
                      number="6"
                      desc="Now you are ready to Recharge your BTC account and make profit.Use the address provided in your BTC account (just click the recharge button in the User tab) and use it  deposit a minimum of 20 usdt from your Binance wallet."
                    />
                    <Procedure
                      title="Wait for Suggestions"
                      number="7"
                      desc="Open you telegram BTC group (BT Elite Exchange Team) and join thousands of other BTC users and make money.Mentor Riaz will provide you with trading Suggestions and all you have to do is follow them perfectly.You should recharged your account by 10.00 am and then strictly follow the orders given."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <Procedure
              title="Set Finance Password"
              number="3"
              desc="Set a secure and strong finance password after creating your BTC account that will be used to withdraw your funds.DO NOT FOR ANY REASON SHARE YOUR FINANCE PASSWORD WITH ANYONE"
            />
            <div className="grid grid-cols-2 items-center justify-center">
              <Procedure
                title="Get Google Authenticator Code"
                number="4"
                desc="Because BTC cares more about the security of your funds,we take it a step further with Google Authenticator.Scan your BTC QR Code to ensure that you can't lose funds to scanners or thieves.If not able to scan the QR code, copy the given marked red letters and paste it on your Google Authenticator and enter the name btc.gtoupwin to get your code."
              />
              <Procedure
                title="Bid Binance wallet address"
                number="5"
                desc="Get your wallet address on binance by clicking deposit, choose USDT, choose network tron (trc20) network and copy the given wallet address.In BTC, click User tab, withdraw address section and paste it in the provided field.Fill the rest of the data and save."
              />
              <Procedure
                title="Recharge BTC Account"
                number="6"
                desc="Now you are ready to Recharge your BTC account and make profit.Use the address provided in your BTC account (just click the recharge button in the User tab) and use it  deposit a minimum of 20 usdt from your Binance wallet."
              />
              <Procedure
                title="Wait for Suggestions"
                number="7"
                desc="Open you telegram BTC group (BT Elite Exchange Team) and join thousands of other BTC users and make money.Mentor Riaz will provide you with trading Suggestions and all you have to do is follow them perfectly.You should recharged your account by 10.00 am and then strictly follow the orders given."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
