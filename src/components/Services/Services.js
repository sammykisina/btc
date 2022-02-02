import React from "react";
import Profit from "../../images/profit.svg";
import Referrals from "../../images/referrals.svg";
import Trade from "../../images/trading.svg";
import StartUpCapital from "../../images/startup capital.svg";
import Card from "./Card";

const Services = () => {
  return (
    // services container
    <div
      id="services"
      className="py-[100px] flex flex-col justify-center items-center bg-[#010606] md:h-[1100px]"
    >
      {/* service h1 */}
      <h1 className="text-[2rem] sm:text-[2.5rem] text-[#fff] mb-[64px]">
        Our Services
      </h1>

      {/* services wrapper */}
      <div className=" max-w-[1000px] mx-auto grid grid-cols-1 items-center gap-[16px] px-[20px] md:grid-cols-2 lg:grid-cols-3 lg:px-[50px]">
        {/* services card */}
        {/* card 1 */}
        <Card
          icon={Profit}
          title1="Daily Profits"
          desc="Our team of analyst guarantee a profit between 5% to 10% daily.BTC will ensure that you dont make any loses at all."
        />

        {/* card 2 */}
        <Card
          icon={Referrals}
          title1="Commissions"
          desc="Invite friends and family via your link and earn commission each
            time they trade.
            Level 1 > 1% Level 2 > 0.5% Level 3 > 0.3%"
        />

        {/* card 3 */}
        <Card
          icon={Trade}
          title1="Trade"
          desc="Invest and make a profit with no loses at all. With BTC you get unlimited trading with maximum return."
        />

        {/* card 3 */}
        <Card
          icon={StartUpCapital}
          title1="Start up Capital"
          desc="We understand that raising  capital maybe a challenge,therefore we help you with a free start up capital to help you get started."
        />
      </div>
    </div>
  );
};

export default Services;
