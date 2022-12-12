import './Login.css';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const initialState = {
  Email: '',
  Pass: ''
}

const Login = () => {

  const navigate = useNavigate();

  const [state, setState] = useState(initialState)

  const {Email, Pass} = state;

  const [submitdisable, setSubmitDisable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!Email || !Pass){
      toast.error("Please fill all the details!")
      return;
    }
    setSubmitDisable(true);
    signInWithEmailAndPassword(auth, Email, Pass).then((res) => {
      setSubmitDisable(false);
      toast.success("Signed Up Successfully");
      navigate('/');
    }).catch((err) => {
      setSubmitDisable(false);
      console.log(err.message);
    })
  }

  return (
    <div>
        <div className="container">
          <div className="context">
            <h2>Login</h2>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" placeholder='Enter your email' onChange={(e) => setState((prev) => ({ ...prev, Email: e.target.value }))}/>

            <br />

            <label htmlFor="password">Password</label>
            <br />
            <input type="password" placeholder='Enter your password' onChange={(e) => setState((prev) => ({ ...prev, Pass: e.target.value }))}/>

            <br />

            <button className='btn' onClick={handleSubmit} disabled={submitdisable}>Login</button>
            <p>Don't have an Account? <Link className='Authh' to="/signup">Signup</Link></p>
          </div>
        </div>
    </div>
  )
}

export default Login