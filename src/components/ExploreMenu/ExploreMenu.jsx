// import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
import PropTypes from 'prop-types'; // Import PropTypes

export const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our meals satisfy your cravings and elevate your dining experience, one delicious meal at a time </p>
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                return (
                    <div onClick={()=> setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

// Add prop types validation
ExploreMenu.propTypes = {
    category: PropTypes.string.isRequired, // Assuming category is a string
    setCategory: PropTypes.func.isRequired, // Assuming setCategory is a function
  };
