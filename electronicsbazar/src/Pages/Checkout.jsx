import {Box, FormControl, FormLabel, Image,InputGroup, Input, 
    InputLeftAddon, Select, SimpleGrid, Text, Button,HStack } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { CartContext } from '../CartContextProvider';
import {SmallCloseIcon,CheckCircleIcon} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Checkout = () => {

    const {cartData} = useContext(CartContext)
    console.log("cart-Page-Data",cartData)
     const totalPrice = cartData.reduce((price,e) => +price + (e.quantity)* (e.SalePrice), 0 ) ;
   
  return (
    <Box  p='30px'>
   
    <Text w='90%' p='20px' ml='40px' align='left' fontSize='xl'>Shipping Address</Text>
    <Box bg='#FED7D7' ml='40px' p='0px 20px' m='10px' w='90%' margin={'auto'}><Text align='left' fontSize='md' color='gray'>To ensure delivery and prevent delays, please enter the valid alphabetic character.</Text></Box>
    <SimpleGrid className="form-address-fill" columns={{lg:2}} mt='20px'>
     <Box >
    <FormControl action="" className="form" aligntext='right'>
        <FormLabel>First Name:  <Input type="text" name="firstName"  required/></FormLabel> 
        <FormLabel> Last Name:<Input type="text" name="lastName" required/></FormLabel>
        <FormLabel> Email: <Input type="email" name="lastName" required/></FormLabel>

        <FormControl>
  <FormLabel>Country/Region:</FormLabel>
  <Select placeholder='Select country'>
            <option value="">Select country</option>
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="United States">United States</option>
            <option value="Italy">Italy</option>
            <option value="Australia">Australia</option>
            <option value="Germany" >Germany</option>
            <option value="Nepal" >Nepal</option>
            <option value="Aland Islands" >Åland Islands</option>
            <option value="Albania" >Albania</option>
            <option value="Algeria" >Algeria</option>
            <option value="Andorra" >Andorra</option>
  </Select>
</FormControl>
        

       
        <FormControl>
  <FormLabel>State/Province:</FormLabel>
        <Select placeholder='Select country'>
            <option value="">Select state</option>
            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
  </Select>

  <FormLabel>City:</FormLabel>
  <Select placeholder='Select country'>
    <option value="">Select City</option>
            <option value="Badarpur">Badarpur</option>
            <option value="Burari">Burari</option>
            <option value="Chilla Saroda Bangar">Chilla Saroda Bangar</option>
            <option value="Firozabad">Firozabad</option>
            <option value="Tughlakabad">Tughlakabad</option>
            <option value="Mehrauli">Mehrauli</option>
            <option value="Shergarh">Shergarh</option>
            <option value="Qila Rai Pithora">Qila Rai Pithora</option>
            <option value="Shahjehabanad">Shahjehabanad</option>
            <option value="Siri">Siri</option>
           
  </Select>
</FormControl>
    

        <FormLabel> Zip/Postal code:<Input type="number" className="pincode"/></FormLabel>
        <FormLabel> Address: <Input type="text" className="address" /></FormLabel>
       
            <Text textAlign='left'> Phone number:</Text>
            <SimpleGrid gap='4%'  columns={{base:1,sm:1,md:2,lg:2}} w={{base:'100%',sm:'100%',md:'190%',lg:'200%'}}>
                <InputGroup>
                <InputLeftAddon children='+91' />
    <Input type='tel' placeholder='phone number' />
    </InputGroup>
          <Text textAlign='left' color='gray'>Note: Required by courier/postman to ensure delivery and prevent delays. Please enter your correct number.</Text>
            </SimpleGrid>
             
       
       <HStack gap='10px'>
        <Button type="submit" Text ='10px 30px' colorScheme='messenger'>Save</Button>
        <Button type="cencel" Text ='10px 30px' variant='outline' colorScheme='messenger'>cancel</Button>
       </HStack>
        </FormControl></Box>
    <Box></Box>
   </SimpleGrid>
   
   
   

{/*==================================== Product List ==========================================*/}
 <Text w='90%' p='20px' ml='40px' align='left' fontSize='xl'>Product List</Text>
  <Box  className='checkout-product-view'> 
  
  {cartData.length >=1 ? ( <Box h='max-content'>
       
         {cartData.map((el) => (
          <SimpleGrid key={el.id} columns={{base:1,lg:2}} >
           
            <HStack >
              <Image w='100px' h='100px' src={el.PicturePath}></Image>
             
              <Text align='left' fontSize='16px' fontWeight='100' color='black' >{el.Name}</Text>
              </HStack>
             
         
           <HStack > 
                 <Text w='25%' fontSize='16px' fontWeight='100' color='RGBA(0, 0, 0, 0.64)'>${el.CsSalesPrice}</Text>
                   <Text w='25%'><SmallCloseIcon/>{"  "+el.quantity+"  "}</Text> 
                
                 <Text w='25%'  fontSize='xl' > ${((el.quantity)*(el.SalePrice)).toFixed(2)}</Text>
                 <CheckCircleIcon w='25%' color='green'/>
                 </HStack>
          
           </SimpleGrid>
        ))}   
     </Box>) : <Box align='center' w='100%' h='100%'><Text as='b' fontSize='xl'>Your shopping cart is empty, please add an item to your cart for shipment.</Text></Box> }
        
 </Box>
  {/* ================================Total price list on checkout page ==============================*/}
     
      
 
    
      
    <SimpleGrid columns={{lg:2}}  className='grand-total' >
        <Box>  <Text fontSize='2xl' textAlign='left'>Shipping & Delivery</Text></Box>
      
        <Box  ml='360px'  className='grand-total-div'>
        <Box>
            <Text color='gray'>Order Subtotal: ${totalPrice}</Text >
          
        </Box>
       
        <Box>
            <Text color='gray'>Shipping Cost: $25</Text>
           
        </Box>
        <Box>
            <Text color='gray' >Insurance: $10</Text >
           
        </Box>
        <HStack>
            <Text color='gray'>Grand Total: </Text ><Text color='rgb(255, 97, 6)' fontSize='3xl' className="">${totalPrice + 25 + 10}</Text>
           </HStack>
        <Link  to='/checkout/payment'> <Button colorScheme='messenger' p='30px 40px'>Place Your Order</Button></Link>
       
        </Box>
        
</SimpleGrid>

<Box mt='20px' align='center'> <Image src="https://content1.geekbuying.com/V1.4/en/images/shopcart_footicon.png" alt=""/></Box>


</Box>

   )
}

export default Checkout;
                 
                 
                 
                 
                
            


 