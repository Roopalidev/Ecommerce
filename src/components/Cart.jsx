import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'
import { removeFromCart, decreaseCart, addToCart, clearCart, getTotals } from '../redux/cartSlice';

const Cart = () => {
  const { cartTotalQuantity } = useSelector(state => state.cart)
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  }
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  }
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  }
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark  bg-dark bg-gradient">
        <div className="container-fluid">
           <a className="navbar-brand fw-bold fs-2" href="#">Dreamlly Fresh<FontAwesomeIcon icon={faLeaf} /></a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
 <>
 <li className="nav-item" aria-current="page" href="#">
                  <Link to='/Home' className='nav-link'>Home</Link>
                </li>
 <li className="nav-item" aria-current="page" href="#">
                  <Link to='/Products' className='nav-link'>Menu</Link>
                </li>
                <li className="nav-item" aria-current="page" href="#">
                  <Link to='/About' className='nav-link'>About</Link>
                </li>
                <li className="nav-item" aria-current="page" href="#">
                  <Link to='/Contact' className='nav-link'>Contact</Link>
                </li>
                <div>
                  <p type="button" className="btn4">
                    <Link to='/Cart' className='nav-link'><FontAwesomeIcon icon={faCartShopping} style={{ marginRight: "10px" }} />Cart({cartTotalQuantity}) </Link>
                  </p>
                </div>
                <div>
                  <p type="button" className="btn3">
                    <Link to='/Login' className='nav-link'>Logout </Link>
                  </p>
                </div>
  </>
</ul>
 </div>
        </div>
      </nav>
      <div className='cart-container'>
{cart.cartItems.length === 0 ? (
          <div className='cart-empty'>
            <p style={{ color: 'rgb(239, 195, 18)', fontWeight: 'bold', fontSize: '40px', marginTop: '120px' }}> Your cart is currently empty</p>
            <div className='start-shopping'>
<Link to='/Home' >
                <FontAwesomeIcon icon={faArrowLeftLong} style={{ color: 'black' }} />
                <span style={{ color: 'black', fontWeight: 'bold' }}>Start Shopping</span>
              </Link>
            </div>
              </div>
        ) : (
          <div>
            <div className="titles">
              <h3 className='product-title'>Products</h3>
              <h3 className='product-price'>Price</h3>
              <h3 className='product-quant'>Quantity</h3>
              <h3 className='product-total'>Total</h3>
 </div>
            <div className='card-items'>
 {cart.cartItems?.map(cartItem => (
    <div className='cart-item' key={cartItem.name}>
                  <div className="cart-product">
                    <img src={cartItem.image} alt={cartItem.name} />
                    <div>
                      <h3 >
                        {cartItem.name}
                      </h3>
                      <p>{cartItem.ingredients}</p>
                      <p>{cartItem.description}</p>
                      <button style={{ backgroundColor: 'rgb(239, 195, 18)', height: '38px', marginLeft: '1330px', marginTop: '-50px', borderRadius: '20px', color: 'white' }} onClick={() => handleRemoveFromCart(cartItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">
                    ${cartItem.price}
                  </div>
                  <div className='cart-product-quantity'>
                    <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                    <div className='count'>{cartItem.cartQuantity}</div>
                    <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
                  </div>
                  <div className="cart-product-total">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
                   </div>
              ))}
            </div>
            <div className='cart-summary'>
              <button className='clearchat' onClick={() => handleClearCart()}>Clearchat</button>
              <div className='cart-checkout'>
                <div className="subtotal">
                  <span>Subtotal</span>
  <span className="amount">${cart.cartTotalAmount}</span>
                </div>
                {/* <p>Taxes and shiping calculated at checkout</p>
        <button>Check out</button> */}
                <div className='continue-shopping'>
                  <Link to='/Home'><FontAwesomeIcon icon={faArrowLeftLong} />Continue Shopping</Link></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart
