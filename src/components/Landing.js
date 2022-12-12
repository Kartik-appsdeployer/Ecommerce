import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import logo from './Logo.jpg'
import axios from 'axios'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'



const Landing = (props) => {

  const [products, setProducts] = useState([]);

  // This code is for the rendering data from firestore
  const data = collection(db, 'EMP');
  getDocs(data).then((snapshot) => {
    let res = [];
    snapshot.docs.forEach((item) => {
      res.push({...item.data(), id: item.id});
      
    })
    // console.log(res);
    setProducts(res);
  });

  
  // This code is for the rendering data through api
  // useEffect(() => {
  //   axios({
  //     method: 'GET',
  //     url: 'https://fakestoreapi.com/products'
  //   }).then((res) => {
  //     setProducts(res.data);
  //     console.log(res.data)
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }, [])

  return (
    <div>
      <div className="Header">

        <div className='logo'>
          <h2 className='logo1'>Apna Amazon</h2>
        </div>

        <div className="central">
          <Link to='/prodlist' className='links' state={products}>Products</Link>
          <Link to='/addprod' className='links'>Add Product</Link>
        </div>

        <div className="User">
          <h2>{props.name ? `Welcome, ${props.name}` : "Login yourself"}</h2>
          <Link to="/login" className='Link'>Logout</Link>
        </div>
        
      </div>

      <div className="Main">
        <h1>Welcome to Apna Amazon Shopping App</h1>
        <h5>We are offering more discount than all the Shopping Company. We will be having discount offers on the ocassion of Christmas and New Year. Please view our products having great discount offers</h5>
        <img src={logo} alt="" />
      </div>
    </div>
  )
}

export default Landing
