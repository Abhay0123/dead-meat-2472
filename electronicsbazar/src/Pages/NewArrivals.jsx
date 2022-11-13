import axios from 'axios';
import {Box,Text,Heading,SimpleGrid,Image,Container,Button ,useToast} from '@chakra-ui/react';

import {useState,useEffect,useContext} from 'react';
import { CartContext } from '../CartContextProvider';
import { Link } from "react-router-dom";
const Loading=()=>{
  return(
    <Container>
      <Image w='200px' h='200px' ml='180px'  src='https://reiwa.com.au/ux/reiwa/ux/images/pd/spinner.gif'/>
    </Container>
    
  )
 }
const NewArrivals=()=>{
  const toast = useToast()
    const [data,setData]=useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const {cartData, handleCart} = useContext(CartContext)
    const getData=()=>{
      setIsLoading(true)
        axios.get(`http://localhost:3000/NewArrival?_page=${page}&_limit=20`)
        .then((res)=>{
            setData(res)
            setIsLoading(false)
          console.log(res.data)
        })
        .catch((error)=>{
          setIsLoading(false)
            console.log(error)
        })
      }
      useEffect(()=>{
        getData(page);
      },[page])
        
      const handleAddToCart = (el)=>{
         handleCart(el)
         toast({
          title: 'Product View',
          position:'bottom-left',
          statur:'success',
          isClosable: true,
        })
            }

    return( isLoading ? ( <Loading/>) : ( 
    <Box >
     <Box boxShadow='md' display='flex' justifyContent='center' alignItems='center' w='100%' h='100px'><Heading>New Arrivals</Heading></Box>
      <Box  align='right' bg=' #f1f6fd'>
     <SimpleGrid columns={4} spacing={6} w='75%'  mr='40px'>
           {data?.data?.map((el) => (
          <Link  to= {`/newarrivals/${el.id}`} key={el.id}>
          <Box 
           onClick={()=>handleAddToCart(el)}
           key={el.id}
           className='eachBox'
            mt='20px'
            align='left'
           
            style={{
              background:'white',
              fontFamily: "Open Sans",
              display: "flex",
              padding:'10px',
              flexDirection: "column",
              alignItems: "center"
            }}
          >
           
            <Image position='absolute' mt='-10px' ml='100px' src='https://img.gkbcdn.com/s3/l/label/Label1.png?version=20221110'></Image>
            <Image src={el.PicturePath}></Image>
           
            <Box
          mt='1'
          
          as='h4'
          lineHeight='tight'
          noOfLines={2}
        >
         {el.Name}
        </Box>
          
             <Text ml='-150px' fontWeight='600' fontSize='large'>{el.SalePrice}</Text>
             <Text ml='-150px' fontSize='large'>{el.CsSalesPrice}</Text>
          </Box>
    </Link>
        ))}
    </SimpleGrid>
    </Box>
    <Box mb='10px'bg=' #f1f6fd' padding='30px'>
    <Button   colorScheme='teal' variant='outline' disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </Button>
      <Button colorScheme='blue' m='30px'>{page}</Button>
      <Button colorScheme='teal' variant='outline' disabled={page >= 4} onClick={() => setPage(page + 1)}>
        NEXT
      </Button>
    </Box>
</Box>
    )
    )
}
export default NewArrivals;



