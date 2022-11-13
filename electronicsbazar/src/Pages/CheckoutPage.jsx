import {Image,Box,Text} from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    useToast,
    TableContainer,Button
  } from '@chakra-ui/react'
  import React from 'react';
import { useEffect } from 'react';
  //import { useNavigate } from "react-router-dom";
  import { CartContext } from "../CartContextProvider";
  import { useContext } from 'react';
const CheckoutPage=()=>{
     const [data,setData]=React.useState([]);
     const toast=useToast();
    // const list = JSON.parse(localStorage.getItem('cartData')) || [];
   // console.log(list)
   const {cartData} = useContext(CartContext)
   console.log("cartData",cartData)
    
  const getData=()=>{
    try{
      const list = JSON.parse(localStorage.getItem('cartData')) ;
        setData(list);
     
     
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
     getData();
  },[])

  const paymoney=()=>{
    toast({
      title: 'Order Placed',
      
      status: 'success',
      duration: 8000,
      isClosable: true,
    })
  }

  console.log(data)
    return (
        <Box w='95%' ml='30px' mt='30px'>
        <Box align='left' display='flex' mb='10px' justifyContent='space-between'>
            <Text as='b'>Product Name & Detail</Text>
            <Text>Ship to</Text>
         </Box>

    
 <TableContainer>
  <Table  variant='simple' >
  <Thead bg='gray' opacity='50%' mb=''>
    <Tr  className='Theading' >
      <Th >Product Name & Detail</Th>
      <Th >Unit Price</Th>
      <Th>Quantity</Th>
      <Th>Total</Th>
      <Th>Quantity</Th>

      <Th isNumeric>multiply by</Th>
     
    </Tr>
  </Thead>
  <Tbody border='1px solid gray' padding='5px' borderRadius='10px' mt='30px'>
    <Tr>image</Tr>
    <Tr>
       
        {data.map((el)=>{
           <Box key={el.id}>  
            <Image src={el.LinkUrl} alt='cartImg'/>
             <Td>{el.Name}</Td>
             let name=document.createElement('p')
             name.innerText=el.Name
             </Box>
          })} 
    
    </Tr>
   
  </Tbody>
  </Table>
</TableContainer>
<Box display='flex' justifyContent='space-evenly' alignitem='center' mt='30px'>

    <a href='/newarrival'><Text as='b' color='red'>Continue</Text></a>
    <Text>Pay Money</Text>
    <Box display='flex' gap='25px'>

    <Image  onClick={()=>paymoney()} w='260px' h='40px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3AuiOYtuPqEWEs2HuJgGdL6vc6fYCbeEhg&usqp=CAU"/>
    <Button borderRadius='22px' colorScheme='blue'  padding='15px' >Proceed to Checkout</Button>
    </Box>
      </Box>
    
 </Box>
    )
}
export default CheckoutPage;
