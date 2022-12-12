import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Landing from './components/Landing'
import Login from './components/Login'
import ProductList from './components/ProductList'
import ViewProduct from './components/ViewProduct'
import AddProduct from './components/AddProduct'
import Signup from './components/Signup'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { auth } from './firebase';

function App() {

  const [username, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName);
      }
      else{
        setUserName("");
      }
    })
  })

  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position='top-center' />
        <Routes>
          <Route path="/" element={<Landing name={username} />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/prodlist" element={<ProductList />} />
          <Route path="/addprod" element={<AddProduct />} />
          <Route path="/viewprod/:id" element={<ViewProduct />} />
        </Routes>
      </div >
    </BrowserRouter>
  );
}

export default App;
