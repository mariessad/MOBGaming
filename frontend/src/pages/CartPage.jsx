import React from 'react'
import Cart from '../components/Cart'

function CartPage({ cart, setCart, amountOfItems }) {
  return (
    <div className='cart-container'>
      <Cart cart={cart} setCart={setCart} amountOfItems={amountOfItems} />

    </div>
  )
}

export default CartPage