import { Box, HStack, Image, SimpleGrid, Text,VStack,useToast } from '@chakra-ui/react';
import React from 'react'
import { FaRegCreditCard } from 'react-icons/fa';
import { RiRadioButtonLine } from 'react-icons/ri';

const Payment = () => {
    const toast = useToast();

    const paymentToast=()=>{
        toast({
            title: `Payment Successfull`,
            status: "success",
            isClosable: true,
          })
    }
  return (
    <Box p='20px'>
      <Text as='b' aligntext='left' fontSize='xl'>Payment Method</Text>
       <SimpleGrid columns={{base:1,sm:1,md:2,lg:2}} className='payment-body' gap='20px'>
         <Box w='100%' h='160px' className='paypal-pay' p={'10px'}>
        <HStack>
            <RiRadioButtonLine color='green'/>
            <Image  w='20%' src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png" alt="" /> 
        </HStack> 
        <Text align='left'>The safer, easier way to pay</Text>


        </Box>
         <Box w={{base:'100%',sm:"100%",md:'80%',lg:'60%'}}  h='300px' className='order-grand' p='20px'>
           <Box>
            <Text color='gray'>Order Number:</Text>
            <Text as='b'>5810450</Text>
           </Box>
           <Box>
            <Text color='gray'>Grand Total:</Text>
            <Text as='b'>${234567}</Text></Box>
            <hr />
            <Box mt='10px'>
            <Text fontSize='xl' color='gray'>Payable Amount:</Text>
            <Text as='b' fontSize='3xl'>${234567}</Text></Box>
           <VStack >
            <Image cursor={'pointer'} onClick={paymentToast} mt='10px' src='https://www.paypalobjects.com/webstatic/mktg/merchant_portal/button/buynow.en.png'></Image>
            <HStack cursor={'pointer'} onClick={paymentToast} mt='10px' className='debitcard'><FaRegCreditCard/><Text>Debit or Credit Card</Text></HStack>
           </VStack>
           <HStack>
            <Box display='flex' justifyContent='center' alignItems='center' margin='auto'> 
            <Box> <Text as='xs' color='gray'>powered by</Text></Box>
            <Box> <Image w='60px' src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png" alt="" />
            </Box>
            </Box>
           
           </HStack>
         </Box>
       </SimpleGrid>

    </Box>
  ) 
}

export default Payment;