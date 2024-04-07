import { createContext, useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

        const [cartItems, setCartItems] = useState({})

        const addToCart = (itemId)=>{
            if(!cartItems[itemId]){
                setCartItems((prev)=>({...prev,[itemId]:1}))
            }
            else{
                setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            }
        }

        const removeFromCart = (itemId)=>{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        }
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
// Add prop types validation
StoreContextProvider.propTypes = {
    children: PropTypes.string.isRequired, // Assuming category is a string
  };

export default StoreContextProvider;