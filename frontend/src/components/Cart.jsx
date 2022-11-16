import { React } from 'react'


function Cart({ cart, setCart, amountOfItems }) {



  const cartTotal = cart.reduce((total) => total + 60, 0);

  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === item.id);

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }
      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };

  // const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

  const listItemsInCart = () => cart.map((item) => (
    <div className='mb-5' key={item.id}>
      <h3 className='' >
        ({amountOfItems(item.id)} x $60) {`${item.name}`}
      </h3>
      <img className="cart-image" src={`${item.background_image}`} alt={item.name} /> <br />
      <button className='btn btn-danger me-5 mx-5' type="submit" onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  ));

  const checkout = () => {
    setCart([])
  }

  return (
    <div className="px-3 py-5">
      <h2 className='mb-4 fw-normal text-white mt-3'>Your Shopping Cart</h2>
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <div className="card-body rounded-3 mb-4">{listItemsInCart()}</div>
        <div className='col-mb-4 me-5 total-cart '>
          <h3 className='mt-5'>Total: ${cartTotal}</h3>
          <button className='btn btn-success mt-3' onClick={checkout}>Check Out</button>
        </div>
      </div>
    </div>
  )

  // return (
  //   <div className="cart-container">
  //     <h2 className='text-white'>Your Shopping Cart</h2>
  //     <div className='d-flex justify-content-center mt-5 bg-light'>
  //       <div className="cart-items">{listItemsInCart()}</div>
  //       <div className='cart-total'>
  //         <h3 className=''>Total: ${cartTotal}</h3>
  //         <button className='btn btn-success mt-3' onClick={checkout}>Check Out</button>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default Cart