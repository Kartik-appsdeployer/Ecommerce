import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import './ViewProduct.css';

const ViewProduct = () => {

  const location = useLocation();
  const myData = location.state;
  // console.log(myData);

  return (
    <div>
      <div className="centerContent">
        <h4 className='title'>{myData.title}</h4>
        <img src={myData.image} alt="" />
        <hr />
        <h4 className='category'>{myData.category}</h4>
        <h4 className='desc'><span>Description: </span>{myData.description}</h4>
        <h4 className='price'>{`Price: $${myData.price}`}</h4>
        <h4 className='rating'>{`Rating: ${myData.rating}`}</h4>
      </div>
    </div>
  )
}

export default ViewProduct
