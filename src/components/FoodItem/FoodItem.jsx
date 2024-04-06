//import React from 'react'
import { assets } from '../../assets/assets';
import './FoodItem.css';
import PropTypes from 'prop-types'; // Import PropTypes

const FoodItem = ({id, name, price, description, image }) => {

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-img' src={image} alt="" />
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-desc'>{id}</p>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>{price}</p>
        </div>

    </div>
  )
}

export default FoodItem

FoodItem.propTypes = {
    id: PropTypes.number.isRequired, 
    name: PropTypes.string.isRequired, 
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired, 
    image: PropTypes.any.isRequired, 
  };