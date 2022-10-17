import React from 'react'
import ProductList from '../features/ProductList'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import './Products.css'
const Products = () => {
  const cart = useSelector(state => state.cart)

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
                    <Link to='/Cart' className='nav-link'><FontAwesomeIcon icon={faCartShopping} style={{ marginRight: "10px" }} />Cart({cart.cartTotalQuantity}) </Link>
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
      <div style={{ backgroundImage: `url('/images/backgrounds.webp')`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: '100%', height: '746px' }}>
        <p style={{ fontSize: '36px', color: 'white', marginLeft: '800px', paddingTop: '40px' }}>
          <a href="https://drive.google.com/file/d/1IPz4SmL6uoUxza3OReHHJu8SgWA_OfnR/view?usp=sharing" style={{ textDecoration: 'None', fontWeight: 'bold', color: '#bab7b6' }} target='_blank'>Pizza</a></p>
        <hr style={{ color: '#808080', width: '800px', marginLeft: '800px', height: '3px' }}></hr>
        <p style={{ fontSize: '36px', color: 'white', marginLeft: '800px' }}>
          <a href="https://drive.google.com/file/d/1IwuVM_ZPxxU4kbcc7DXb23jflu6coNAw/view?usp=sharing" style={{ textDecoration: 'None', color: '#bab7b6', fontWeight: 'bold' }} target='_blank'>Dessert</a></p>
        <hr style={{ color: '#808080', width: '800px', marginLeft: '800px', height: '3px' }}></hr>
        <p style={{ fontSize: '36px', color: 'white', marginLeft: '800px' }}>
          <a href="https://drive.google.com/file/d/1I_p5yTG4so7e1eIFiNIzwWK8Mes6Bk9N/view?usp=sharing" style={{ textDecoration: 'None', color: '#bab7b6', fontWeight: 'bold' }} target='_blank'>Pasta</a></p>
        <hr style={{ color: '#808080', width: '800px', marginLeft: '800px', height: '3px' }}></hr>
        <p style={{ fontSize: '36px', color: 'white', marginLeft: '800px' }}>
          <a href="https://drive.google.com/file/d/1Iv3Yej5Y6qVe0_BcyZpCIJKAxc_puy3G/view?usp=sharing" style={{ textDecoration: 'None', color: '#bab7b6', fontWeight: 'bold' }} target='_blank'>Salads</a></p>
        <hr style={{ color: '#808080', width: '800px', marginLeft: '800px', height: '3px' }}></hr>
        <p style={{ fontSize: '36px', color: 'white', marginLeft: '800px' }}>
          <a href="https://drive.google.com/file/d/1Ib0spznohDJ-QE5ZfbFCAcso7_To8Eo5/view?usp=sharing" style={{ textDecoration: 'None', color: '#bab7b6', fontWeight: 'bold' }} target='_blank'>Drinks</a></p>
        <hr style={{ color: '#808080', width: '800px', marginLeft: '800px', height: '3px' }}></hr>
        <p style={{ fontSize: '36px', color: 'white', marginLeft: '800px' }}>
          <a href="https://drive.google.com/file/d/1Iv3Yej5Y6qVe0_BcyZpCIJKAxc_puy3G/view?usp=sharing" style={{ textDecoration: 'None', color: '#bab7b6', fontWeight: 'bold' }} target='_blank'>Sides</a></p>
        <hr style={{ color: '#808080', width: '800px', marginLeft: '800px', height: '3px' }}></hr>
        <p style={{ fontSize: '36px', color: 'white', marginLeft: '800px' }}><a href="https://drive.google.com/file/d/1I9Czj5oHY07F7A1TpuGQDu9jy8AGHvNV/view?usp=sharing" style={{ textDecoration: 'None', color: '#bab7b6', fontWeight: 'bold' }} target='_blank'>Sauces</a></p>
        <hr style={{ color: '#808080', width: '800px', marginLeft: '800px', height: '3px' }}></hr>
      </div>
    </>
  )
}

export default Products
