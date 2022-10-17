import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import './Home.css'
import { ButtonToolbar } from 'react-bootstrap';

const Home = () => {
  const { cartTotalQuantity } = useSelector(state => state.cart)

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
      <div >
        <Carousel>
          <Carousel.Item>
            <a href='/Products/Pizza' >
              <img
                className="d-block1 w-100"
                src="images/p13.jpg"
                alt="First slide"
              />
            </a>
            <Carousel.Caption>
              <h3>Made With Love</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href='/Products/Pasta' >
              <img
                className="d-block1 w-100"
                src="images/pista1.jpeg"
                alt="Second slide"
              />
            </a>
            <Carousel.Caption>
              <h3 style={{ color: 'Black' }}>We're Better...We're Fresher...We're Tastier!</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href='/Products/Drinks' >
              <img
                className="d-block1  w-100"
                src="images/mocktail.jpg"
                alt="Third slide"
              />
            </a>
            <Carousel.Caption>
              <h3>Good Time, Great Taste</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div style={{ backgroundColor: 'rgb(239, 195, 18)', color: 'white' }}>
          <Card.Body>
            <Card.Text style={{ fontSize: '30px', textAlign: 'center', fontWeight: 'bold', fontSize: '30px' }}>
              Happy to connect with you for anything! <Link to='/Contact' style={{ textDecoration: 'underline', textDecorationColor: 'white' }}><span style={{ color: 'White' }}>Contact US</span></Link>
            </Card.Text>
          </Card.Body>
        </div>
        <Col className='d-flex'>
          <div className='cardtitle1' style={{ width: '18rem' }}>
            <Card.Img className='cardimg' variant="top" src="/images/Pizza.jpg" />
            <Card.Body>
              <Card.Title className='cardtitle'>Pizza</Card.Title>
              <div className='cardbtn'>
                <Link to='/Products/Pizza' className='nav-link' style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>View All</Link>
              </div>
            </Card.Body>
          </div>
          <div className='cardtitle1' style={{ width: '18rem' }}  >
            <Card.Img className='cardimg' variant="top" src="/images/dessert.jpg" />
            <Card.Body>
              <Card.Title className='cardtitle'>Desserts</Card.Title>
              <div className='cardbtn'>
                <Link to='/Products/Dessert' className='nav-link' style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>View All</Link>
              </div>
            </Card.Body>
          </div>
          <div className='cardtitle3' style={{ width: '18rem' }}>
            <Card.Img className='cardimg' variant="top" src="/images/pasta.jpg" />
            <Card.Body>
              <Card.Title className='cardtitle'>Pasta</Card.Title>
              <div className='cardbtn'>
                <Link to='/Products/Pasta' className='nav-link' style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>View All</Link>
              </div>
            </Card.Body>
          </div>
        </Col>
        <Col className='d-flex'>
          <div className='cardtitle1' style={{ width: '18rem' }}>
            <Card.Img className='cardimg' variant="top" src="/images/Salad.jpg" />
            <Card.Body>
              <Card.Title className='cardtitle'>Salads</Card.Title>
              <div className='cardbtn'>
                <Link to='/Products/Salads' style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }} className='nav-link'>View All</Link>
              </div>
            </Card.Body>
          </div>
          <div className='cardtitle2' style={{ width: '18rem' }}>
            <Card.Img className='cardimg' variant="top" src="/images/sauce.jpg" />
            <Card.Body>
              <Card.Title className='cardtitle'>Sauces</Card.Title>
              <div className='cardbtn'>
                <Link to='/Products/Sauces' className='nav-link' style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>View All</Link>
              </div>
            </Card.Body>
          </div>
          <div className='cardtitle3' style={{ width: '18rem' }}>
            <Card.Img className='cardimg' variant="top" src="/images/drink.png" />
            <Card.Body>
              <Card.Title className='cardtitle'>Drinks</Card.Title>
              <div className='cardbtn'>
                <Link to='/Products/Drinks' className='nav-link' style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>View All</Link>
              </div>
            </Card.Body>
          </div>
        </Col>
        <Col>
          <div className='cardtitle4' style={{ width: '18rem' }}>
            <Card.Img className='cardimg1' variant="top" src="/images/french.jpg" />
            <Card.Body>
              <Card.Title className='cardtitle'>Sides</Card.Title>
              <div className='cardbtn'>
                <Link to='/Products/Sides' className='nav-link' style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>View All</Link>
              </div>
            </Card.Body>
          </div>
        </Col>
      </div>
    </>
  )
}


export default Home
