import axios from 'axios';
import {Button,Box,Text,Heading,SimpleGrid,Image,Container} from '@chakra-ui/react';
import {useState,useEffect} from 'react';
const Loading=()=>{
    return(
      <Container>
        <Image w='200px' h='200px' ml='180px'  src='https://reiwa.com.au/ux/reiwa/ux/images/pd/spinner.gif'/>
      </Container>
      
    )
   }
const BestSelling=()=>{
    const [isLoading, setIsLoading] = useState(false)
    const [data,setData]=useState([]);
    const [page, setPage] = useState(1);
    const getData=()=>{
        setIsLoading(true)
        axios.get(`https://api-pathak-database.vercel.app/BestSelling?_page=${page}&_limit=20`)
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
     

    return(isLoading ? ( <Loading/>) : (
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
        ))}
    </SimpleGrid>
    </Box>
    <Box mb='10px'bg=' #f1f6fd' padding='30px'>
    <Button   colorScheme='teal' variant='outline' disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </Button>
      <Button colorScheme='blue' m='30px'>{page}</Button>
      <Button colorScheme='teal' variant='outline' disabled={page >= 8} onClick={() => setPage(page + 1)}>
        NEXT
      </Button>
    </Box>
</Box>
    </Box>
    )
    )
}
export default BestSelling;



