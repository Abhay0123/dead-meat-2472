import { createContext,useState } from "react";
export const CartContext =createContext();

const CartContextProvider = ({children}) => {
    const [cartData, setCartData] = useState([]);
  
    const handleCart = (data) => {
      if (cartData.indexOf(data) !== -1) {
       //  console.log(cartData.indexOf(data));
        return;
      }
     setCartData([...cartData, data]);
      //  console.log(cartData.indexOf(data));
    };
    return <CartContext.Provider value={{cartData,setCartData,handleCart}} >
           {children}
    </CartContext.Provider>
  };
  export default CartContextProvider;


