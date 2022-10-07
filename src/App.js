import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState([]);
  const onChange = (e) => {
    setMoney(e.target.value);
  }
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then((response) => response.json())
    .then((json) => {setCoins(json); setLoading(false)});
  },[])
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      <input type="number" value={money} onChange={onChange} placeholder="Write your USD" />
      {loading ? <strong>Loading...</strong> : <select>
        {/* {coins.map((coin) => <option>{coin.name} ({coin.symbol}): {coin.quotes.USD.price}</option>)} */}
        {coins.map((coin) => <option>{coin.name} ({coin.symbol}) : {money / coin.quotes.USD.price}</option>)}
      </select>}
      
    </div>
  );
}

export default App;
