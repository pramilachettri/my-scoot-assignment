import React from "react";
import Fade from "react-reveal/Fade";
import "../bonuses.css";
import BonusesCard from "./bonusesCard";
import { bunusCardData } from "../bonuses/bonusCardData";
import CountDownTimer from "./countDownTimer";
import CommonBtn from "../common/commonBtn";

const hoursMinSecs = { hours: 10, minutes: 20, seconds: 40 };

const Index = () => {
  return (
    <div className="bonus-container">
      <Fade bottom>
        <h1>Unlock bonuses worth</h1>
        <h1> ₹25,000 </h1>
      </Fade>
      <div className="bonus-card-container">
        {bunusCardData.map((data) => (
          <BonusesCard amount={data.amount} title={data.title} />
        ))}
      </div>
      <div className="count-down-timer">
        <h5>Time is running out. Grab your spot fast!</h5>
        <CountDownTimer hoursMinSecs={hoursMinSecs} />
      </div>

      <div className="bonus-btn-container">
        <CommonBtn btnText="Reserved seat for ₹499" />
      </div>
    </div>
  );
};

export default Index;