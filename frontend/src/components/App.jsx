import '../App.css';
import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import Store from "../pages/Store";
import Navbar from "./Navbar";
import { getUser } from "../utilities/users-service";
const apiKey = process.env.REACT_APP_API_KEY

function App() {
  const [user, setUser] = useState(getUser());
  const [foundGame, setFoundGame] = useState(null)
  const [cart, setCart] = useState([]);
  console.log(user)

  const searchGame = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games/${searchTerm}?key=${apiKey}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      // console.log(data.results)
      // const game = data
       console.log(data)
      setFoundGame(data);
      
    } catch (e) {
      console.error(e)
    }
  };

  const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

  const rFoundGame = () => {
    setFoundGame(null)
   }

  return (
    <div className="App">
       {user ? (
        <>
          <Navbar user={user} setUser={setUser} searchGame={searchGame} cart={cart} rFoundGame={rFoundGame}/>
          <Routes>
            <Route path="/games/cart" element={<CartPage cart={cart} setCart={setCart} amountOfItems={amountOfItems}/>} />
            <Route path="/games" element={<Store foundGame={foundGame} setFoundGame={setFoundGame} cart={cart} setCart={setCart} searchGame={searchGame} rFoundGame={rFoundGame}/>} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
      <div className='icons-wrapper' bg="dark" variant="dark" >
      
        <div>
          <a href="https://github.com/mariessad"><i className="bi bi-github regular-icon icon" style={{ color: '#E75480' }}></i></a>
          <h4 className='text-white'><span>M</span>ariessa</h4>
        </div> 
         <div>
          <a href="https://github.com/Oksanka25"><i className="bi bi-github github-middle icon " style={{ color: 'white' }}></i></a>
          <h4 className='text-white'><span>O</span>ksana</h4>
        </div>
        <div>
          <a href="https://github.com/ImNGodmode"><i className="bi bi-github regular-icon icon" style={{ color: 'blue' }}></i></a>
          <h4 className='text-white'> <span>B</span>lake </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
