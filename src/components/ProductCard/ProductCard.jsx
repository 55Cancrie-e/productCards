import React from 'react'
import './productCard.css'
const ProductCard = ({ category, name, price, onClick }) => {
  return (
    <div className='card-container'>
      <div className='cardInfoBlock'>
        <h3 className='card-category'>{category}</h3>
        <h2 className='card-name'>{name}</h2>
      </div>
    <div className='cardPriceBlock'>
      <h2 className='cardPrice'><span className='dollarSighn'>$</span>{price}</h2>
      <button className='card-buuton' onClick={onClick}>buy</button>
    </div>
    </div>
  )
}

export default ProductCard;