import React, { useState } from 'react'
import './AddProduct.css';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { collection, addDoc } from "firebase/firestore";

const initialState = {
  title: "",
  image: "",
  category: "",
  description: "",
  price: "",
  rating: ""
}
const AddProduct = () => {

  const location = useNavigate();

  const [addproduct, setAddProduct] = useState(initialState);

  const {title, image, category, description, price, rating} = addproduct;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(addproduct);
    const data = collection(db, 'EMP');
    addDoc(data, {
      title: title,
      image: image,
      category: category,
      description: description,
      price: price,
      rating: rating
    }).then(() => {
      toast.success("Added successfully");
      location('/');
    })
  }

  return (
    <div>
      <div className="MainAdd">
        <h5>Add Details</h5>
        <input type="text" className='inputs' onChange={(e) => setAddProduct((prev) => ({ ...prev, title: e.target.value }))} placeholder='Enter the title' />
        <br />
        
        <input type="text" className='inputs' onChange={(e) => setAddProduct((prev) => ({ ...prev, image: e.target.value }))} placeholder='Enter the image' />
        <br />
        
        <input type="text" className='inputs' onChange={(e) => setAddProduct((prev) => ({ ...prev, category: e.target.value }))} placeholder='Enter the category' />
        <br />
        
        <input type="text" className='inputs' onChange={(e) => setAddProduct((prev) => ({ ...prev, description: e.target.value }))} placeholder='Enter the description' />
        <br />
        
        <input type="text" className='inputs' onChange={(e) => setAddProduct((prev) => ({ ...prev, price: e.target.value }))} placeholder='Enter the price' />
        <br />
        
        <input type="text" className='inputs' onChange={(e) => setAddProduct((prev) => ({ ...prev, rating: e.target.value }))} placeholder='Enter the rating' />
        <br />
        <button onClick={handleSubmit} className='btn1'>Submit</button>
      </div>
    </div>
  )
}

export default AddProduct
