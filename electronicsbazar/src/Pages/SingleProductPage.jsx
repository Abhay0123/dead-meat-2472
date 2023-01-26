import { Box, Button, Image, VStack,Text,Container, HStack} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {TiStarFullOutline} from "react-icons/ti";
import {RiFileCopyLine} from 'react-icons/ri';
import {BsArrowDownCircle} from 'react-icons/bs';
import {AiOutlineDollar,AiFillTwitterCircle} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {GrPinterest} from "react-icons/gr";
import {ImMail4} from 'react-icons/im';
import { useContext } from 'react';
import { CartContext } from '../CartContextProvider';


 const SingleProductPage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const [singleData, setSingleData] = useState({});
  //const [cart, setCart] = useState([]);
  const {cartData,setCartData,handleCart} = useContext(CartContext);
  
  const singleProductData = () => {
       setIsLoading(true);
       axios.get(`https://api-pathak-database.vercel.app/NewArrival/${id}`).then((res) => {
     
      setIsLoading(false); 
      setSingleData(res.data);
    //  console.log(singleData);
     }).catch((err) => {
      console.log(err);
    })
  }
  
   console.log("cartData",cartData)

  useEffect(() => {
    singleProductData();
  }, [id])

  const Loading=()=>{
    return(
      <Container>
        <Image w='200px' h='200px' ml='180px'  src='https://reiwa.com.au/ux/reiwa/ux/images/pd/spinner.gif'/>
      </Container>
      
    )
   }   
  
  return isLoading? <Loading /> : (

    <Box >
     
     <Image p='20px' src='https://img.gkbcdn.com/s3/bn/2301/1500x125-63c756662b40c94fdcbe6131.jpg' alt='img'></Image>

       <HStack columns={{base:1,sm:1,md:2,lg:2}} p='20px'>

          <VStack   h='450px' bg='white' w='40%'> 
        
          <Image className="hoverToIncreaseWidth"   src={singleData.PicturePath} alt="image" w='90%' h='90%'/>
          
          <Box>
            <HStack className='img-hover'>
              {  singleData?.MoreImages?.map((el,index)=>{
              return  <img key={index} src={el} alt="img" />   
             })}
            </HStack>
        </Box> 
          
          
          
          <HStack >
             <Text>Share to</Text>
             <HStack className='share-logo'>
              <Box><BsFacebook size='25px' color='blue'/></Box>
              <Box><AiFillTwitterCircle size='30px' color='cyan'/></Box> 
              <Box><ImMail4 size='25px' color='gray'/></Box>
              <Box><GrPinterest size='25px' color='maroon'/></Box>

             </HStack>
          </HStack>
          
          </VStack>


         <Box align='left'  bg='white' p='10px'  w='60%' h='450px'>
              <Text as='b' fontSize='medium'>{singleData.Name}</Text>
              <br />
              <HStack mt='12px'>
                <HStack><TiStarFullOutline color='yellow'/><Text>12 Reviews</Text> </HStack>
              
              <Text  fontSize='sm' >Brand: {singleData.LabelText}</Text>
              <Text  fontSize='sm'  color='rgba(128, 128, 128, 0.849)' ml='30px'>Item Code: {singleData.id}</Text>
              </HStack>
             
                <HStack ml='12px'>
                   <Text  fontSize='3xl' fontWeight='600'> ${singleData.SalePrice}</Text>
                   <Text fontSize='lg' as='del'> ₹{singleData.CsSalesPrice}</Text>
              </HStack>   
              <Text fontSize='xs' color='gray'>inclusive of all Taxes</Text>
              <Box>
              <HStack fontSize='sm' color='blue' p='20px 0px'>
                  <Text bg='#EBF8FF' p='2px 10px'>2% OFF New User</Text>
                  <Text>Get Coupons</Text>
              </HStack>
             <hr />

               <HStack mt='10px'>
                <p>Ship from: </p>
                <Text  color='blue' p='3px 6px' borderRadius='5px'>India</Text>
               </HStack>
               
                <Box mt='30px'> 
                  <Button colorScheme='messenger'  p='26px 45px' fontSize='xl' mr='10px'   onClick={()=>handleCart(singleData)}> Add To Cart </Button>

                  <Link to='/cart'>  <Button colorScheme='blue' p='26px 45px' variant='outline' fontSize='xl' >Buy Now </Button></Link>
                
                </Box>
              <HStack>
                <Text>Payment:</Text>
                <Image w='80px' h='40px' src="https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo-500x281.png" alt="paypal-logo" />
               </HStack>
               <HStack gap='10px'>
                 <HStack><AiOutlineDollar size='30px'/><Text>Price Match</Text></HStack>
                 <HStack><BsArrowDownCircle size='25px'/><Text>Dropshipping Download</Text></HStack>
                  <HStack><RiFileCopyLine size='25px'/><Text>Bulk Order Rebate</Text></HStack>
               </HStack>
              
               <Box className='spp-img'>
                 <span>
                    <i className='mc-img product-img'></i>
                 </span>
                 <span>
                    <i className='money-img product-img'></i>
                 </span>
                 <span>
                    <i className='tax-img product-img'></i>
                 </span>
               </Box>
            </Box>
       </Box>
  </HStack> 
  <VStack mt='60px'>
    <img src={singleData.BottomImageF} alt="" /> 
    <img src={singleData.BottomImageS} alt="" /> 
</VStack>
</Box>
  )
}
export default SingleProductPage;






















