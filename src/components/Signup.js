import React, { useState } from 'react'
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';


const initialState = {
  Name: '',
  Email: '',
  Pass: ''
}

const Signup = () => {
  const navigate = useNavigate();

  const [state, setState] = useState(initialState)

  const {Name, Email, Pass} = state;

  const [submitdisable, setSubmitDisable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!Name || !Email || !Pass){
      toast.error("Please fill all the details!")
      return;
    }
    setSubmitDisable(true);
    createUserWithEmailAndPassword(auth, Email, Pass).then(async(res) => {
      setSubmitDisable(false);
      const user = res.user;
      // console.log(user);
      await updateProfile(user, {
        displayName: Name
      });
      toast.success("Logged In Successfully");
      navigate('/login');
    }).catch((err) => {
      setSubmitDisable(false);
      console.log(err.message);
    })
  }

  return (
    <div>
      <div className="container">
        <div className="context">
          <h2>Sign Up</h2>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" placeholder='Enter your Name' onChange={(e) => setState((prev) => ({ ...prev, Name: e.target.value }))} />

          <br />

          <label htmlFor="email">Email</label>
          <br />
          <input type="email" placeholder='Enter your email' onChange={(e) => setState((prev) => ({ ...prev, Email: e.target.value }))} />

          <br />

          <label htmlFor="password">Password</label>
          <br />
          <input type="password" placeholder='Enter your password' onChange={(e) => setState((prev) => ({ ...prev, Pass: e.target.value }))} />

          <br />

          <button className='btn' onClick={handleSubmit} disabled={submitdisable}>Signup</button>
          <p>Already have an Account? <Link className='Authh' to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  )
}
export default Signup