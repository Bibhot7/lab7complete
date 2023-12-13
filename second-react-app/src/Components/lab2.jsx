import React, { useState, useEffect, useReducer } from 'react';
import { useBitcoinRates } from '../Store/BitcoinHook';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

// Custom hook for fetching Bitcoin rates

function BitcoinRatesWithHook() {
  const { currency, dispatch, bitcoinPrice, isLoading } = useBitcoinRates(
    currencies[0]
  );

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
        <select
          value={currency}
          onChange={(e) =>
            dispatch({ type: 'CHANGE_CURRENCY', payload: e.target.value })
          }
        >
          {options}
        </select>
      </label>
      {isLoading ? (
        <p>Loading...</p>
      ) : bitcoinPrice !== null ? (
        <p>
          Current Bitcoin Price in {currency}: {bitcoinPrice}
        </p>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default BitcoinRatesWithHook;
