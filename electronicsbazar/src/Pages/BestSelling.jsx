import axios from 'axios';
import {Box,Text,Heading,SimpleGrid,Image} from '@chakra-ui/react';
import {useState,useEffect} from 'react';
const BestSelling=()=>{
    const [data,setData]=useState([]);
    const getData=()=>{
        axios.get('http://localhost:8000/BestSelling')
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
         <Box>
     <Box boxShadow='md' display='flex' justifyContent='center' alignItems='center' w='100%' h='100px'><Heading>Bestselling</Heading></Box>
      <Box align='right' bg=' #f1f6fd' >
     <SimpleGrid columns={4} spacing={6} w='75%'  mr='40px'>
           {data?.data?.map((el) => (
          <Box
           className='eachBox'
            mt='20px'
            align='left'
            key={el.ID}
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
            <Image width='60px' ml='-150px' src='https://img.gkbcdn.com/s3/bn/2211/1111-636b8e9c2b40c926000ab10a.gif'></Image>
            <Text>{el.Name}</Text>
             <Text ml='-150px' fontWeight='600' fontSize='large'>{el.SalePrice}</Text>
             <Text ml='-150px' fontSize='large'>{el.CsSalesPrice}</Text>
          </Box>
        ))}
    </SimpleGrid>
    </Box>
</Box>
    </Box>
    )
}
export default BestSelling;



