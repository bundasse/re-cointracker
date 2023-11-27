import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState("true");
  const [coins, setCoins] = useState([]);
  useEffect(()=>{
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then((response)=>response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false)
    })
  },[])
  return (
    <div className="App">
      <h1>Coin Tracker({coins.length})</h1>
      {loading? <strong>Now Loading...</strong> : null}
      <ul>
        {coins.map((e)=> (
          <li>
            {e.name} ({e.symbol}): {e.quotes.USD.price}
          </li>
        ) )}
      </ul>
    </div>
  );
}

export default App;
