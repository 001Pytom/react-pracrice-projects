import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleNext() {
    setCount((count) => count + step);
  }
  function handlePrev() {
    setCount((count) => count - step);
  }
  // function handleStpnext() {
  //   setStep((step) => step + 1);
  // }
  // function handleStpPrev() {
  //   setStep((step) => step - 1);
  // }

  return (
    <div className="container">
      <div className="step">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span> Step: {step}</span>
      </div>
      <div className="count">
        <button onClick={handlePrev}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleNext}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

export default Counter;
