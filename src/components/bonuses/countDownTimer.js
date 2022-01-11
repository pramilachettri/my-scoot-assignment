import React, { useState, useEffect } from "react";

const CountDownTimer = ({ hoursMinSecs }) => {
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) reset();
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  const reset = () =>
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      <ul>
        <li>
          <span>{hours}</span>
          <i>Hours</i>
        </li>
        <li>
          <span>{mins}</span>
          <i>Minutes</i>
        </li>
        <li>
          <span>{secs}</span>
          <i>Seconds</i>
        </li>
      </ul>
    </div>
  );
};

export default CountDownTimer;