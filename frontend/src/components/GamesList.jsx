
import React from 'react'
function GamesList({ games, addToCart, searchGame }) {

    let gamesData = games.map((game, i) => (
        <div className='d-flex flex-wrap justify-content-center mt-5 card mx-3 ' key={i}>
            <h4 className='d-flex justify-content-center' >{game.name}</h4>
            <img src={`${game.background_image}`} alt={game.name} /> <br />
            Rating: {game.rating} <br />
            Meta Critic: {game.metacritic} <br />
            Price: $60 <br />
            <button className='more-info mt-2' onClick={() => searchGame(game.slug)}>MORE INFO. . .</button>
            <button className='buy-btn' type="submit" onClick={() => addToCart(game)}> Add to Cart</button>


        </div>

    ))
    return (
        <>
            <div className='space'></div>
            <h4 className='gameslist-header d-flex justify-content-center mt-3'> Available Games</h4>
            <div className='d-flex flex-wrap justify-content-center' >
                {gamesData}
            </div>
        </>
    )
}
export default GamesList