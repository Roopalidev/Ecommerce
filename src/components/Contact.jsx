import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Contact = () => {
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
      <Col className='d-flex'>
        <div className='cardbody1' style={{ width: '400px' }}>
          <Card.Body >
            <Card.Title><a href='https://www.google.co.in/maps/search/Nagarbhavi+Village+Public+Park,+Manikanta+Complex,+Karnataka/@12.9584924,77.5215821,16.59z' target="_blank"><FontAwesomeIcon style={{ color: "rgb(239, 195, 18)", fontSize: "30px", marginLeft: '150px' }} icon={faLocationDot} /></a></Card.Title>
            <Card.Title style={{ marginLeft: '115px', marginTop: '50px', fontWeight: 'bold', fontSize: '25px' }}>
              Find US
            </Card.Title>
            <Card.Text style={{ marginTop: "40px", marginLeft: '10px', fontSize: '18px', lineHeight: '40px', textAlign: 'justify' }}>
              #53/3 Second Floor, Nagarbhavi Village Public Park, Manikanta Complex,  Karnataka ,Bengaluru,
              560072.
            </Card.Text>
          </Card.Body>
        </div>
        <div className='cardbody2' style={{ width: '400px' }}>
          <Card.Body>
            <Card.Title><FontAwesomeIcon style={{ color: "rgb(239, 195, 18)", fontSize: "30px", marginLeft: '150px' }} icon={faPhone} /></Card.Title>
            <Card.Title style={{ marginLeft: '120px', marginTop: '50px', fontWeight: 'bold', fontSize: '25px' }}>
              Call US
            </Card.Title>
            <Card.Text style={{ marginTop: "40px", marginLeft: '65px', fontSize: '18px' }}>
              (+91) 1111 - 22 - 3333
            </Card.Text>
          </Card.Body>
        </div>
        <div className='cardbody3' style={{ width: '400px' }}>
          <Card.Body>
            <Card.Title><FontAwesomeIcon style={{ color: "rgb(239, 195, 18)", fontSize: "30px", marginLeft: '150px' }} icon={faEnvelope} /></Card.Title>
            <Card.Title style={{ marginLeft: '120px', marginTop: '50px', fontWeight: 'bold', fontSize: '25px' }}>
              Email US
            </Card.Title>
            <Card.Text style={{ marginTop: "40px", marginLeft: '65px', fontSize: '18px' }}>
              roopalipanake@gmail.com
            </Card.Text>
          </Card.Body>
        </div>
      </Col>
      <hr style={{ width: '1500px', marginLeft: '110px' }}></hr>
      <div>
        <p className='dreampara'>
          Dreamlly Fresh is a platform that connects users with homechefs and homebakers near them. Khushi se Khao…Khushi se Khilao is our motto and we bring happiness to all our consumers and sellers alike. Dreamlly Fresh is a marketplace for homemade, authentic recipes, all created by neighbourhood homechefs and homebakers. Dreamlly Fresh helps home based sellers monetize their kitchens while keeping the financial benefits in their community. Dreamlly Fresh also promotes connection, community and trust with the help of app technology.
        </p>
        <p className='dreampara1' >
          Our purpose is to do good by doing right. Our mission is to act as a tech-based catalyst for creating entrepreneurial opportunity and recognition for millions of homechefs and homebakers by providing a marketplace to serve consumers who crave healthy and hygienic homemade meals and bakes with home delivery.
        </p>
        <div className='footer'>
          <Card.Body>
            <Card.Title style={{ marginLeft: '120px', marginTop: '50px', fontWeight: 'bold', fontSize: '25px', color: 'white' }}>
              GET IN TOUCH
            </Card.Title>
            <hr className='getin'></hr>
            <Card.Text style={{ marginTop: "15px", marginLeft: '115px', fontSize: '18px', color: 'grey' }}>
              We are always looking for your feedback! Reach out to us.
            </Card.Text>
            <Card.Text style={{ marginTop: "15px", marginLeft: '115px', fontSize: '18px', color: 'grey' }}>
              <span style={{ fontSize: '18px', fontWeight: 'bold' }} >Head Office:</span>  Dreamlly Fresh Pvt Ltd,<br />
              #53/3 Second Floor,
              2nd Block,<br />Nagarbhavi,
              Bengaluru KA 560072
            </Card.Text>
            <Card.Text style={{ marginTop: "15px", marginLeft: '115px', fontSize: '18px', color: 'grey' }}>
              <span style={{ fontSize: '18px', fontWeight: 'bold' }} >Branch Office:</span> Dreamlly Fresh Pvt Ltd,<br />
              #53/3 Second Floor,
              Vishvas Olive,<br />Nagarbhavi,
              Bengaluru KA 560072
            </Card.Text>
            <Card.Text style={{ marginTop: "15px", marginLeft: '115px', fontSize: '18px', color: 'grey' }}>
              <span style={{ fontSize: '18px', fontWeight: 'bold' }} > Call US:</span>(+91) 1111-22-3333
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    </>
  )
}

export default Contact
