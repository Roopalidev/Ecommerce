import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductList } from '../redux/productSlice';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { getTotals } from '../redux/cartSlice';
import { addToCart } from '../redux/cartSlice';

const Pizza = () => {

  const cart = useSelector(state => state.cart)
  const productListData = useSelector((state) => state.product.products)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getTotals());
    dispatch(fetchProductList());

  }, [cart, dispatch])

  const handleAddToCart = (data) => {
    dispatch(addToCart(data));

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
      <>
        {productListData?.map((data) => (
          <Container className='container'>
            <Row>
              <Card className='cardbody' style={{ width: '500px', marginTop: '40px', marginLeft: '290px' }} key={data.id}>
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                  <Card.Title><span style={{ fontWeight: 'bold', fontSize: '20px', marginLeft: '200px' }} >Name:</span><span style={{ fontSize: '20px', color: "black", paddingLeft: '15px' }}>{data.name}</span></Card.Title>
                  <Card.Text style={{ marginTop: '20px' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '20px', marginLeft: '200px', marginTop: '10px' }} > Price:</span><span style={{ fontSize: '20px', color: "black", paddingLeft: '20px' }}>${data.price}</span>
                  </Card.Text>
                  <Card.Text>
                    <span style={{ fontWeight: 'bold', fontSize: '25px', marginLeft: '40px' }} >Ingredients:</span><span style={{ fontSize: '20px', color: "black" }}> {data.ingredients}</span>
                  </Card.Text>
                  <div >
                    <div style={{ backgroundColor: 'black', marginLeft: '100px', color: 'white', width: '200px', fontWeight: 'bold', paddingLeft: '50px' }}>
                      <Link to='/Cart' className='nav-link'>Go to Cart</Link>
                    </div>
                    <div style={{ backgroundColor: 'rgb(239, 195, 18)', height: '40px', width: '120px', color: 'white', width: '200px', fontWeight: 'bold', marginLeft: '330px', marginTop: '-40px', paddingTop: '9px', paddingLeft: '50px' }} onClick={() => handleAddToCart(data)}>Add to cart </div>
                  </div>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        ))}
      </>
    </>
  )
}
export default Pizza
