import React, { useState, useEffect, useReducer } from 'react';
export function useBitcoinRates(initialCurrency) {
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
        if (
          data &&
          data.bitcoin &&
          data.bitcoin[currency.toLocaleLowerCase()]
        ) {
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
