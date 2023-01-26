import { Box, Image, Text ,Button,HStack, SimpleGrid,Flex,useToast} from "@chakra-ui/react";
import { CartContext } from "../CartContextProvider";
  import { useContext } from 'react';
import {ChevronRightIcon} from '@chakra-ui/icons';
import { Link } from "react-router-dom";

const Cart=()=>{
  
     
   const toast = useToast();
   const {cartData,handleDecrement,handleIncrement} = useContext(CartContext)
   console.log("cart-Page-Data",cartData)
  const totalPrice = cartData.reduce((price,e) => +price + (e.quantity)* (e.SalePrice), 0 ) ;
    {console.log(totalPrice)}

   
  const paymoney=()=>{
    toast({
      title: 'Order Placed',
      
      status: 'success',
      duration: 8000,
      isClosable: true,
    })
  }
  return (
    <>

    
      <Box   gap='10px' w='100%' p='40px'>
        <Box textAlign='left' p='40px'> <Text as='b' fontSize='h1' >Product Name & Detail</Text></Box>
         <SimpleGrid bg='RGBA(0, 0, 0, 0.06)' columns={{lg:2}} p='10px 0px' color='#718096'>
          <Box>Product Name & Detail</Box>	
          <Box>
          <HStack>
            <Box w='25%'>UnitPrice</Box>
            <Box w='25%'>Quantity</Box>
            <Box w='25%'>Total</Box>
            <Box>Operation</Box>
          </HStack>
            </Box>
          </SimpleGrid>
       
        {cartData.length >=1 ? ( <Box h='max-content' mt='30px'>
         {cartData.map((el) => (
          <SimpleGrid key={el.id} columns={{lg:2}} mt='10px' className="cart-shown">
            <HStack className="selected_item"align='center' display='flex'>
              <Image w='100px' h='100px' src={el.PicturePath}></Image>
              <HStack key={el.id} className="cartitem" ></HStack>
              <Text align='left' fontSize='16px' fontWeight='100' color='black' >{el.Name}</Text>
              </HStack>  
         
           <HStack columns={{lg:4}}  textalign='center'> 
                 
                  <Text w='25%' fontSize='16px' fontWeight='100' color='RGBA(0, 0, 0, 0.64)'>${el.CsSalesPrice}(-{el.Discount}%)</Text>
                  <HStack w='25%'>
                  <Button colorScheme="red" variant="outline" onClick={()=>handleDecrement(el)}>-</Button>
                  <Text> {"  "+el.quantity+"  "}</Text>
                  <Button colorScheme="green" variant="outline" disabled={el.quantity >= 5}  onClick={()=>handleIncrement(el)}>+</Button>
                  </HStack>
                  <Box w='25%'><Text fontSize='2xl'> ${((el.quantity)*(el.SalePrice)).toFixed(2)}</Text></Box>
                 <Button>Delete</Button>
                
             </HStack>
             <hr/>
           </SimpleGrid>
        ))}   
     
  </Box>) : <Box align='center' w='100%' h='100%'><Text as='b' fontSize='xl'>Your shopping cart is empty, please add an item to your cart to continue shopping.</Text></Box> }
     

      {cartData.length>=1 && <SimpleGrid columns={{lg:2}} className="cartbox"  h='100px'> 
         <HStack>
           
          <Text w='33%' color='RGBA(0, 0, 0, 0.64)'>Continue shopping<ChevronRightIcon/></Text>
          <Text w='33%' color='RGBA(0, 0, 0, 0.64)'>You choose {cartData.length} item(s)</Text>
               <Box className="totalprice" w='33%'>
          <HStack><Text fontSize='xl'> Total:</Text> <Text color='rgb(255, 97, 6)' fontSize='3xl' fontWeight='600'> ${totalPrice}</Text></HStack>
           </Box>
          </HStack> 
          <HStack>
         
            <Box className="clearcart">
           {cartData.length>=1 &&  (
            <Box display='flex' gap='25px'>

       <Image  onClick={()=>paymoney()} w='280px' h='40px' src="https://www.paypalobjects.com/webstatic/mktg/merchant_portal/button/buynow.en.png"/>
     <Link to='/checkout'><Button borderRadius='8px' colorScheme='blue'  padding='20px 32px' >Proceed to Checkout</Button></Link>
     
     </Box>
            )}
       </Box>
          </HStack>
      
       
     
       </SimpleGrid>}
        
     
 </Box>
      
     </>
  );
};
 export default Cart;