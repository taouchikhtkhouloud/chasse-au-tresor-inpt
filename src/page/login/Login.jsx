import './login.scss'
import React from 'react';
import {  useState , useRef  } from 'react';
//import { Link } from "react-router-dom";
import logo from '../../images/logo olympiades vertical.png'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();
  const myError = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/home')
    } catch (e) {
      setError("Authentification failed !!");
      myError.current.classList.add("errorMsg");
      
    }
  };


  return (
    <div className="container">

      
   
      

      <div className="wrapperr" >
      <img src={logo} alt="" className='logoImg1' />
        
        <h1 className="title">Se connecter</h1>
        <form className="form" onSubmit={handleSubmit}>

          <p className="" ref={myError} >{error}</p>
          <input className="input" type="text" name="email" placeholder="email" autoFocus required value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input className="input" type="password" name="password" placeholder="mot de passe" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          
          

          <button className="button" type="submit" >Se connecter</button>
          
         
        </form>
      </div>
      
   
      
    </div>
  );
};

export default Login;