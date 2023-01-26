import { createContext,useState } from "react";
import { useToast } from "@chakra-ui/react";
export const CartContext =createContext();

const CartContextProvider = ({children}) => {
   const toast = useToast();
    const [cartData, setCartData] = useState([]);
  
    // let handleCart = (data) => {
      
    //   if (cartData.indexOf(data) !== -1) {
    //    //  console.log(cartData.indexOf(data));
    //     return;
    //   }
    //  setCartData([...cartData, data]);
    //    console.log(cartData);
    // };
    const handleCart = (product) => {
  
      const productExist = cartData.find((el) => el.id === product.id);
      if (productExist){
        setCartData(
          cartData.map((el) =>
            el.id === product.id
              ? { ...productExist, quantity: productExist.quantity + 1 }
              : el
          )
        );
      } else{
        setCartData([...cartData, { ...product, quantity: 1 }]);
        toast({
          title: 'Product added successfully!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      }
      console.log(cartData);
    };
    const handleIncrement= (product) => {
   
      const productExist = cartData.find((el) => el.id === product.id);
      if (productExist.quantity >= 1) {
        if(productExist.quantity >= 4){
          toast({
            title: 'Now,You have reached the maximum limit.',
            status: 'warning',
            duration: 6000,
            isClosable: true,
          })
        }
       setCartData(
          cartData.map((el) =>
            el.id === product.id
              ? { ...productExist, quantity: productExist.quantity + 1 }
              : el
          )
        );
      }
    };

  const handleDecrement = (product) => {
    const productExist = cartData.find((el) => el.id === product.id);
    if (productExist.quantity === 1) {
      setCartData(cartData.filter((el) => el.id !== product.id));
    } else {
      setCartData(
        cartData.map((el) =>
          el.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : el
        )
      );
    }
  };
    return <CartContext.Provider value={{cartData,setCartData,handleCart,handleDecrement,handleIncrement}} >
           {children}
    </CartContext.Provider>
  };
  export default CartContextProvider;


