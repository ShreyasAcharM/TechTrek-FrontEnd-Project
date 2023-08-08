import React from 'react'
import './card.css'

export default function Product(props){
    return (
        <div className='card-container'>
            <img
                className='product-image'
                src={props.url}
                alt="image"
            />
            <h2 className='product-name'>{props.name}</h2>
            <p className='price'>{props.price}</p>
            <p><button className='card-btn'>Add to cart</button></p>
        </div>
    );
}