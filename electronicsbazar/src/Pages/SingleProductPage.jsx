// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import {Text} from '@chakra-ui/react';
// import axios from 'axios';
// const getData = (url) => {
//   return fetch(url).then((res) => res.json());
// };
// const SingleProduct = () => {
//   const { id } = useParams();
//   const [product, setProduct] = React.useState({});

//   React.useEffect(() => {
//     console.log(id)
//     getData(`http://localhost:3000/NewArrival/`+ id).then((res) =>
//         setProduct(res.data)
//         // console.log(res)
//     );
//      }, []);
//   return (
//     <>
//       <Text>{product.data.Name}</Text>
//       {/* <img src={product.Name} alt="prof-pic" /> */}
//       </>
//   );
// };
// export default SingleProduct;

import {  Text,Box,Image,HStack ,Button, SimpleGrid,useToast} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContextProvider";

const getLocalItems=()=>{
      let list =localStorage.getItem('cartData')
      if(list){
        return JSON.parse(localStorage.getItem('cartData'))
      }else{
        return [];
      }
}

const Cart = () => {
    const {cartData} = useContext(CartContext)
    const toast = useToast()
   // let items = JSON.parse(localStorage.getItem("cartData")) || [];
    const checkout=useNavigate();
    const [items,setItems]=useState(getLocalItems([]));
    const AddToCart=()=>{
     
        console.log(cartData)
      setItems([...items,cartData]);
      toast({
        title: 'Congratulation.',
        description: "Product added successfully.",
        status: 'success',
        duration: 8000,
        isClosable: true,
      })
     }
    
    const Checkout=()=>{
        return  checkout('/checkoutpage');
    }
     
    useEffect(()=>{
        localStorage.setItem('cartData',
        JSON.stringify(cartData))
        console.log(cartData)
    },[items]);



  return (
  <Box w='85%' ml='110px'>
    <Image padding='20px' src='https://img.gkbcdn.com/s3/bn/2211/1500x125-636b223b2b40c91ee886b16f.jpg'></Image>
   {
        cartData.map((el)=>(
            <SimpleGrid columns={2} padding='30px' gap='10px' key={el.id}>

                <Box key={el.id}>

                <Image w='200px' className="hoverToIncreaseWidth" src={el.PicturePath}></Image>
                </Box>
                <Box align='left'>
                <Text fontSize='2xl' >{el.Name}</Text>
                <Text as='mark' >{el.LabelText}</Text>
                <HStack gap='10px' mb='30px'>
                <Text fontWeight='600' fontSize='large'>{el.SalePrice}</Text>
                <Text fontSize='large' as='s'>{el.CsSalesPrice}</Text>
                <Text display='flex' justifyContent='center' alignItems='center' ml='20px' bg='red' borderRadius='2px' color='white' fontSize='s'  width='120px'>{el.Discount}% OFF</Text>
                </HStack>
                 <Button mr='10px' borderRadius='0px' colorScheme='blue' variant='solid' onClick={()=>AddToCart(el)}>  Add To Cart  </Button>
                 <Button  colorScheme='teal' borderRadius='0px' variant='outline' mr='20px' onClick={Checkout}>Checkout</Button>
                </Box>

        </SimpleGrid>
        ))
      }
</Box>
  )
};

export default Cart;
























