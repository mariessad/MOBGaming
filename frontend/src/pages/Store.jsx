import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import GamesList from '../components/GamesList';
// import Search from '../components/Search';
import Detail from '../components/Detail';

const apiKey = process.env.REACT_APP_API_KEY



function Store({ foundGame, setFoundGame, cart, setCart, searchGame, rFoundGame }) {


  const [games, setGames] = useState([])


  const getGame = async () => {
    try {
      console.log(apiKey)
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${apiKey}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      // console.log(data.results)
      const gamesList = data.results
      console.log(gamesList)
      setGames(gamesList);
    } catch (e) {
      console.error(e)
    }
  };
  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);


  useEffect(() => {
    getGame()
  }, [])



  return (

    <div className='store-container'>

      {foundGame ? (

        <Detail foundGame={foundGame} setFoundGame={setFoundGame} addToCart={addToCart} rFoundGame={rFoundGame} />
      ) : (
        <GamesList games={games} addToCart={addToCart} cart={cart} setCart={setCart} searchGame={searchGame} />
      )}

    </div>

  )

}

export default Store