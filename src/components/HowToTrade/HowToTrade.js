import React from "react";
import Trading from "../../images/trading.svg";

const HowToTrade = () => {
  return (
    <div id="howToTrade" className="text-[#]  bg-[#f9f9f9] py-[100px]">
      <div className="grid justify-center z-[1] h-[900px] md:h-[700px] lg:h-[600px] w-full max-w-[1100px] mx-auto px-[24px]">
        {/* info row */}
        <div className="md:grid grid-cols-2">
          {/* column 1 */}
          <div className=" px-[15px] col-span-1">
            {/* text wrapper */}
            <div className="max-w-[540px] pt-0 pb-[60px]">
              {/* top line */}
              <p className=" text-[#01bf71] text-[16px] leading-[16px] font-[700] uppercase mb-[16px]">
                How to Trade
              </p>
              {/* heading */}
              <div
                className={`mb-[24px] text-[32px]  leading-[1.1] font-[600] text-[#010606] sm:text-[48px]`}
              >
                Trading is as easy as 1,2,3.
              </div>
              {/* subtitle */}
              <div
                className={`max-w-[440px] mb-[5px] text-[18px] leading-[24px] text-[#010606]`}
              >
                For one to trade he/she has to either buy [rise] or [fall],
                input the trading amount and confirm the order.The trading time
                runs for 5 mins after which the outcome can be either a fall or
                a rise. To trade and ensure you make profits daily all
                suggestions are send to the BTC telegram group.You have to buy
                as indicated in the suggestions otherwise face loses.
                <br /> <br />
                After suggestions are sent to the telegram group to purchase
                [Up] or [Down], the purchase amount must be the same as
                indicated in the suggestion.If the betting suggestion is Rise,
                you choose the red button, and if the betting suggestion is
                Fall, you choose the green button and add the amount and press
                the confirm purchase button.
                <br />
                <br />
                After that relax and wait for the time elapse.Remember you won't
                make an order when 15secs are remaining.You only need to confirm
                order only once and wait for the next suggestion.
              </div>
            </div>
          </div>

          {/* column 2 */}
          {/* img wrap */}
          <div className="h-[150px] md:h-[400px] col-span-1 flex justify-center">
            {/* img */}
            <img
              className="h-[150px] md:h-[400px] mb-[10px] pr-0"
              src={Trading}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToTrade;
