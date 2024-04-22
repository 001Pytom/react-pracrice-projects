import { useEffect, useState } from "react";

function CurrConverter() {
  const [amount, setAmount] = useState(1);
  const [currFrom, setCurrFrom] = useState("USD");
  const [currTo, setCurrTo] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.frankfurter.app/latest?from=${currFrom}&to=${currTo}`
        );
        const data = await response.json();
        // console.log( data);
        if (response.ok) {
          setExchangeRate(data.rates[currTo]);
          setIsLoading(false);
        } else {
          throw new Error(data.error); // Throw error if API response is not OK
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (currFrom === currTo) return setConvertedAmount(amount);
    fetchExchangeRate();
  }, [currFrom, currTo]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  function handleAmount(e) {
    setAmount((amount) => Number(e.target.value));
  }

  // console.log(typeof amount);

  function handleCurrFrom(e) {
    setCurrFrom((currFrom) => e.target.value);
  }

  function handleCurrTo(e) {
    setCurrTo((currTo) => e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={handleAmount}
        disabled={isLoading}
      />
      <select value={currFrom} onChange={handleCurrFrom} disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={currTo} onChange={handleCurrTo} disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {exchangeRate !== null && (
        <p>
          {amount} {currFrom} equals {convertedAmount} {currTo}
        </p>
      )}
    </div>
  );
}

export default CurrConverter;
