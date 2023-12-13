import React, { useState, useEffect } from 'react';
import { useEmojiContext } from '../Store/EmojiContext';
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
function BitcoinRates() {
  const { emoji } = useEmojiContext();
  const [currency, setCurrency] = useState(currencies[0]);
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const baseApiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=`;

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  useEffect(() => {
    setIsLoading(true);
    const currentURL = `${baseApiUrl}${currency}`;
    fetch(currentURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(
          'data',
          data,
          data.bitcoin,
          currency,
          data.bitcoin[currency.toLocaleLowerCase()]
        );
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

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {isLoading ? (
        <p>Loading...</p>
      ) : bitcoinPrice !== null ? (
        <div>
          <p>
            Current Bitcoin Price in {currency}: {bitcoinPrice}
          </p>
          <p>Current Emoji: {emoji}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default BitcoinRates;
