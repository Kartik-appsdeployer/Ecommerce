import React, {useState} from 'react'
import { useLocation, Link } from 'react-router-dom'
import './Products.css';

const ProductList = () => {

    const location = useLocation();
    const data = location.state;

    return (
        <div>
            <h1>List of all the Products</h1>
            <div className="grid-container">
                
                {data.map(object => (
                    <div className="grid-item" key={object.id}>
                        <div className="Img">
                            <img src={object.image} alt="" />
                        </div>
                        <div className="Category">
                            {`Name: ${object.category}`}
                        </div>
                        <div className="pricerating">
                            {`Price: $${object.price}`}
                        </div>
                        <div className="pricerating">
                            {`Rating: ${object.rating}`}
                        </div>
                        <button className='btn'><Link style={{color: 'black', textDecoration: 'none'}} to='/viewprod/`${object.id}`' state={object}>View Product</Link></button>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default ProductList