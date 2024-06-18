import React, { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [int, setInt] = useState(null);

  const HandleInc = () => {
    clearInterval(int);
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    setInt(interval);
  };
  const HandleDec = () => {
    clearInterval(int);
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    setInt(interval);
  };
  const HandlePause = () => {
    clearInterval(int);
    setTime(time);
  };
  const HandleReset = () => {
    clearInterval(int);
    setTime(0);
  };

  return (
    <>
      <h1>Timer application</h1>
      <div>
        <h1>{time}</h1>
        <button onClick={HandleInc}>Auto Inc</button>&nbsp;
        <button onClick={HandleDec}>Auto Dec</button>&nbsp;
        <button onClick={HandlePause}>Pause</button>&nbsp;
        <button onClick={HandleReset}>Reset</button>&nbsp;
      </div>
    </>
  );
};

export default Timer;
