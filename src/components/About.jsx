import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './About.css'
import Carousel from 'react-bootstrap/Carousel';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const About = () => {
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
      <div style={{ width: '18rem' }}>
        <Card.Img className='acardimg' variant="top" src="/images/about.jpg" />
        <Card.Body className='cardbody'>
          <p className='acardtitle'>About US</p>
          <Carousel className='carosel'>
            <Carousel.Item className='caritem' >
              <img
                className="d-block w-100"
                src="/images/yellow.jpg"
                alt="First slide"
              />
              <Carousel.Caption >
                <h3 >Building a marketplace for homemade meals and bakes</h3>
                <p>
                  Dreamlly is an app-based aggregator of homechefs and homebakers. Of the foodies, by the foodies, for the foodies! We are proud to be India's  homechef and homebaker marketplace!

                  Through Dreammly Fresh, we aim to provide that platform to our homechefs and homebakers so that they earn recognition in
                  the society for their cooking and baking skills. Our team loves food and want you to have the best food experience too!

                  Dreamlly Fresh is currently operational in Bangalore.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='caritem'>
              <img
                className="d-block w-100"
                src="/images/yellow.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>We Like doing good</h3>
                <p >All of us like our mom's food don't We! Ghar-ka-Khaana is special and close to our hearts.Many of us have thought
                  of having our moms open a restaurant of her own so that she can share her delicacy with the world! We all have been there!
                  Through Dreammly Fresh, we aim to provide that platform to our homechefs and homebakers so that they earn recognition in
                  the society for their cooking and baking skills. We want to bring to you recipes inherited down generations.We aim to be a community
                  that spreads homemade delicacies  outside the boundaries of our homes! </p>
                <h3>And We love making Stars out of our homechefs and homebakers!</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Card.Body>
      </div>
    </>
  )
}

export default About
