import React from 'react'
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"


// import { useSelector } from 'react-redux';
// import Pizza from './Pizza'






const Navbar = () => {
    const { cartTotalQuantity } = useSelector(state => state.cart)
    // const state = useSelector((state) => state.handleCart)
    // const getdata = useSelector((state)=> state.cartreducer);
    // const counterValue = useSelector((state) => state.counter.value);

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

                            {/* {
                                localStorage.getItem("user-info") ? 
                                <>
                             <p type="button" className="btn1">
                                <Link to='/Login' className='nav-link'> <FontAwesomeIcon icon={faArrowRightToBracket} style={{ marginRight: "10px" }} />Login</Link>
                            </p>


                            <p type="button" className="btn2">
                                <Link to='/Register' className='nav-link'><FontAwesomeIcon icon={faUserPlus} style={{ marginRight: "8px" }} />Register</Link>
                            </p> 
                             
                            
                                </>
                                :
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
                            <p type="button" className="btn3">
                                <Link to='/Cart' className='nav-link'><FontAwesomeIcon icon={faCartShopping} style={{ marginRight: "10px" }} />Cart({cartTotalQuantity}) </Link>
                            </p>
                             
                                </>
                            } */}
                            {/* <Link component={RouterLink} to='/Home'>Home</Link> */}


                        </ul>



                    </div>
                </div>
            </nav>
        </>


    )
}

export default Navbar
