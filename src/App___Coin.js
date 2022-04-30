import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins,setCoins] = useState([])
    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
            .then((response) => response.json())
            .then(json=> {
                setCoins(json)
                setLoading(false)
            });
    },[])
    // useEffect(()=>{},[coins])

    const [coin,setCoin]= useState(1)
    const [need,setNeed] = useState(1)

    const calc = (event) => {
        setNeed(event.target.value/coin)
    }

    const onChange = (event) => {
        setCoin( event.target.value )
    }

    return(
        <div>
            <h1>That Coins! {loading? "":`(${coins.length})`}</h1>
            {loading ? <strong>Loading..</strong>:(<select onChange={onChange}>
                <option>Select Coin!</option>
                {coins.map((coin,idx)=><option
                    key={idx}
                    value={coin.quotes.USD.price}
                    id={coin.symbol}>{coin.name}:${coin.quotes.USD.price} USD</option>)}
            </select>)}
            <br/>
            USD <input onChange={calc} placeholder="i have $"/>
            <hr/>
            i can get <input value={need} placeholder="this"/>
        </div>
    )
}

export default App;

