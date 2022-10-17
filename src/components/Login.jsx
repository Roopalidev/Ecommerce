import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'
import Navbar from './Navbar';
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user-info')) {

    }
  }, [])

  const login = async () => {
    let item = { email, password };
    let result = await fetch('https://api.storerestapi.com/auth/login',
      {
        method: 'POST',
        body: JSON.stringify({
          email: 'marklyan@gmail.com',
          password: 'simple_password'
        }

        ),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },

      })
    result = await result.json()
    localStorage.setItem("user-info", JSON.stringify(result))
    if (email === 'marklyan@gmail.com' && password === "simple_password") {
      navigate("/Home")
    }
    else {
      alert("Invalid Email or  Password")
    }

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
            </ul>
          </div>
        </div>
      </nav>
      <Card style={{ backgroundImage: `url('/images/black.webp')`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: '100%', height: '500px', marginTop: '90px', width: '600px', marginLeft: '500px' }}>
        <br />
        <br />
        <br />
        <FontAwesomeIcon icon={faUser} style={{ color: 'white', fontSize: '50px', marginTop: '-10px' }} />
        <div style={{ color: 'white', marginLeft: '255px', marginTop: '20px', fontSize: '30px', fontWeight: 'bold' }}>LOGIN</div>
        <div className='col-sm-6 offset-sm-3'  >
          <br />
          <input type="text" placeholder='email' className="form-control" onChange={(e) => setEmail(e.target.value)} />
          <br />
          <br />
          <input type="text" placeholder='password' className="form-control" onChange={(e) => setPassword(e.target.value)} />
          <br />
          <div onClick={login} style={{ marginLeft: '50px', color: 'white', backgroundColor: 'rgb(239, 195, 18)', marginTop: '20px', height: '35px', borderRadius: '20px', textAlign: 'center', paddingTop: '6px', marginRight: '40px', fontWeight: 'bold' }}>Login</div>
        </div>
      </Card>
    </>
  )
}

export default Login
