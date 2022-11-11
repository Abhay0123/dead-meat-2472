import axios from 'axios';
import {Box,Text,Heading,SimpleGrid,Image} from '@chakra-ui/react';
import {useState,useEffect} from 'react';
const WarehouseList=()=>{
    const [data,setData]=useState([]);
    const getData=()=>{
        axios.get('http://localhost:8000/WarehouseList')
        .then((res)=>{
            setData(res)
          console.log(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
      }
      useEffect(()=>{
        getData();
      },[])
     

    return(
        <Box>
        <Box boxShadow='md' display='flex' justifyContent='center' alignItems='center' w='100%' h='100px'><Heading>Featured Outlet Deals</Heading></Box>
         <Box align='right' bg=' #f1f6fd' >
        <SimpleGrid columns={5} spacing={6} w='90%'  mr='40px'>
              {data?.data?.map((el) => (
             <Box
              className='eachBox'
               mt='20px'
               align='left'
               key={el.ProductId}
               style={{
                 background:'white',
                 fontFamily: "Open Sans",
                 display: "flex",
                 padding:'10px',
                 flexDirection: "column",
                 alignItems: "center"
               }}
             >
          
          <Image src={el.PicturePath}></Image>
                       <Text>{el.Name}</Text>
             <Text ml='-150px' fontWeight='600' fontSize='large'>{el.SalePrice}</Text>
             <Text ml='-150px' fontSize='large'>{el.CsSalesPrice}</Text>
          </Box>
        ))}
    </SimpleGrid>
    </Box>
</Box>
    )
}
export default WarehouseList;



