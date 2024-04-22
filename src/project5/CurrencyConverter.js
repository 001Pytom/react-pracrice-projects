import React, { useState, useEffect } from "react";

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          `https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}`
        );
        const data = await response.json();
        if (response.ok) {
          setExchangeRate(data.rates[toCurrency]);
        } else {
          throw new Error(data.error); // Throw error if API response is not OK
        }
      } catch (error) {
        console.error("Error fetching exchange rate:", error.message);
        setErrorMessage(
          "Error fetching exchange rate. Please try again later."
        );
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
    setErrorMessage(null); // Reset error message when source currency changes
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
    setErrorMessage(null); // Reset error message when target currency changes
  };

  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  return (
    <div>
      <input type="number" value={amount} onChange={handleAmountChange} />
      <select value={fromCurrency} onChange={handleFromCurrencyChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
        <option value="CAD">CAD</option>
        {/* Add more currency options as needed */}
      </select>
      <select value={toCurrency} onChange={handleToCurrencyChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
        <option value="CAD">CAD</option>
        {/* Add more currency options as needed */}
      </select>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <div>
        {exchangeRate !== null && (
          <p>
            {amount} {fromCurrency} equals {convertedAmount} {toCurrency}
          </p>
        )}
      </div>
    </div>
  );
}

export default CurrencyConverter;
