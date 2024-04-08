import React, { useState } from "react";
import Bill from "./Bill";
import Service from "./Service";
import FriendService from "./FriendService";
import Reset from "./Reset";
function TipCalc() {
  const initialPayState = {
    bill: "",
    Service: 0,
    Fservice: 0,
  };
  const [pay, setPay] = useState(initialPayState);

  const average = (pay.Fservice + pay.Service) / 2;
  const total = pay.bill + average;

  function handlePay(e) {
    const { name, value } = e.target;
    setPay((prevPay) => {
      return {
        ...prevPay,
        [name]: Number(value),
      };
    });
  }

  function handleReset() {
    setPay(initialPayState);
    console.log(initialPayState);
  }

  return (
    <div>
      <Bill onAddHandlePay={handlePay} bill={pay.bill} />
      <Service onAddHandlePay={handlePay} Service={pay.Service} />
      <FriendService onAddHandlePay={handlePay} Fservice={pay.Fservice} />

      {pay.bill > 0 && (
        <>
          <div>
            <strong>
              You Pay ${total} (${pay.bill} + ${average}tip)
            </strong>
          </div>
        </>
      )}
      <Reset onReset={handleReset} />
    </div>
  );
}

export default TipCalc;
