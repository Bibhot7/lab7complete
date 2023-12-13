import React, { useState, useEffect, useReducer } from 'react';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

// Custom hook for fetching Bitcoin rates
function useBitcoinRates(initialCurrency) {
  const [currency, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'CHANGE_CURRENCY':
        return action.payload;
      default:
        return state;
    }
  }, initialCurrency);

  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.bitcoin && data.bitcoin[currency.toLocaleLowerCase()]) {
          setBitcoinPrice(data.bitcoin[currency.toLocaleLowerCase()]);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching Bitcoin data:', error);
        setIsLoading(false);
      });
  }, [currency]);

  return { currency, dispatch, bitcoinPrice, isLoading };
}

function BitcoinRates() {
  const { currency, dispatch, bitcoinPrice, isLoading } = useBitcoinRates(currencies[0]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => dispatch({ type: 'CHANGE_CURRENCY', payload: e.target.value })}>
          {options}
        </select>
      </label>
      {isLoading ? (
        <p>Loading...</p>
      ) : bitcoinPrice !== null ? (
        <p>Current Bitcoin Price in {currency}: {bitcoinPrice}</p>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default BitcoinRates;
