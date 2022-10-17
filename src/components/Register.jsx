// import React from 'react'
// import { useState} from 'react'
// import Navbar from './Navbar'
// import { useNavigate } from 'react-router-dom'


// const Register = () => {
//   const [name, setName] = useState("")
//   const [password, setPassword]=useState("")
//   const [email, setEmail]=useState("")
//   const navigate = useNavigate();
//   const signUp = async () => {
  
    
//     let item={name,password,email}
   
//     let result = await fetch('https://api.storerestapi.com/auth/register',
//       {
//           method: 'POST',
//           body: JSON.stringify({ name: 'Alex Pi',
//           email: 'example@mail.com',
//           password: 'Simple12345'
                 
//                 }
            
//           ),
//           headers:{
//                     "Content-Type":"application/json",
//                     "Accept":"application/json"
//                    },
         
//       })
// result = await  result.json()
//       localStorage.setItem("user-info",JSON.stringify(result))

//       navigate("/Login")
//   }
  
//   return (
//     <>
//     <Navbar />
//     <div className='col-sm-6 offset-sm-3'>
//      <h1>Register Page</h1>
//      <input type="text" className='form-control' value={name} placeholder='name' onChange={(e) => setName(e.target.value)} />
//      <br />
//      <input type="password" className='form-control' value={password} placeholder='password'  onChange={(e) => setPassword(e.target.value)}/>
//      <br />
//      <input type="text" className='form-control'value={email} placeholder='email'  onChange={(e) => setEmail(e.target.value)}/>
//      <br />
//      <button className='btn btn-primary' onClick={signUp}>Sign UP</button>
//     </div>
//     </>
//   )
// }

// export default Register
