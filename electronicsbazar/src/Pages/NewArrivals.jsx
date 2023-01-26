import axios from 'axios';
import {Box,Text,Heading,SimpleGrid,Image,Container,Button ,useToast,Flex,Badge, VStack} from '@chakra-ui/react';
import {IoIosStarOutline} from 'react-icons/io';
import {useState,useEffect,useContext} from 'react';
import { CartContext } from '../CartContextProvider';
import { Link } from "react-router-dom";
import {TriangleUpIcon,ChevronUpIcon,ChevronDownIcon} from "@chakra-ui/icons";
import {TriangleDownIcon} from "@chakra-ui/icons";
const Loading=()=>{
  return(
    <Container>
      <Image w='200px' h='200px' ml='180px'  src='https://reiwa.com.au/ux/reiwa/ux/images/pd/spinner.gif'/>
    </Container>
    
  )
 }
const NewArrivals=()=>{
    const toast = useToast();
    const [datas,setDatas]=useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const {cartData, handleCart} = useContext(CartContext);
   
   
    const getData=()=>{
      setIsLoading(true)
        axios.get(`https://api-pathak-database.vercel.app/NewArrival?_page=${page}&_limit=20`)
        .then((res)=>{
            setDatas(res.data);
            setIsLoading(false);
           // console.log(res.data);
        })
           .catch((error)=>{
            setIsLoading(false)
            console.log(error)
        })
      }
    
        
      const handleAddToCart = (el)=>{
          
          toast({
          title: 'Product View',
          position:'bottom-left',
          statur:'success',
          isClosable: true,
        })
            }

       const lowtohigh = () => {
       const  newData = [...datas].sort((a, b) => {
          return +a.CsSalesPrice - +b.CsSalesPrice
           });
         setDatas(newData);
         };

        const hightolow = ()=>{
        const  newData = [...datas].sort((a, b) => {
          return +b.CsSalesPrice - +a.CsSalesPrice
            });
            setDatas(newData);
           };   

           const fromAtoZ = ()=>{
            const  newData = [...datas].sort((a, b) => {
             const nameA = a.LabelText.toUpperCase(); 
             const nameB = b.LabelText.toUpperCase();
           //  return a.LabelText.toUpperCase() - b.LabelText.toUpperCase()
            if (nameA > nameB) {
              return -1;
            }
            if (nameA < nameB) {
              return 1;
            }
                });
                setDatas(newData);
                console.log(newData)
               };
               const fromZtoA = ()=>{
                const  newData = [...datas].sort((a, b) => {
                 const nameA = b.LabelText.toUpperCase(); 
                 const nameB = a.LabelText.toUpperCase();
               //  return a.LabelText.toUpperCase() - b.LabelText.toUpperCase()
                if (nameA > nameB) {
                  return -1;
                }
                if (nameA < nameB) {
                  return 1;
                }
                    });
                    setDatas(newData);
                    console.log(newData)
                   };


          const lowDiscount = ()=>{
          const  newData = [...datas].sort((a, b) => {
            return +b.Discount - +a.Discount
              });
              setDatas(newData);
         }      
         const highDiscount = ()=>{
          const  newData = [...datas].sort((a, b) => {
            return +a.Discount - +b.Discount
              });
              setDatas(newData);
         } 
       const filterByStarFive = (rating)=>{
           const newData  = [...datas].filter((el)=>{
            return el.Rating === rating
           })
           setDatas(newData);
        }  

      

      useEffect(()=>{
        getData(page);
      },[page])


    return( isLoading ? ( <Loading/>) : ( 
    <Box>
     <Box boxShadow='md' display='flex' justifyContent='center' alignItems='center' w='100%' h='100px'>
      <Heading>New Arrivals</Heading></Box>
    
     <Flex  bg='#f1f6fd' gap='55px' p='15px'>  
      <Box p='10px' className='an-sidebar'  h='max-content' w='20%' bg='#ffff'>
             
            <div className="alldropdown">
                    <Text textAlign='left' fontSize='larger'>All Categories</Text>
                     <details className="sidebar-dropdown">
                            <summary>Consumer Electronics</summary>
                            <ul>
                                <li>Earbud Headphones</li>
                                <li>On-ear & Over-ear Headphones</li>
                                <li>FDM 3D Printers</li>
                                <li>Laser Engravers & Cutters</li>
                                <li>3D Printer Accessories</li>
                                <li>Accessories</li>
                                <li>New Creative Electronic Gadgets</li>
                                <li>Handheld Game Consoles</li>
                                <li>Wireless & Bluetooth Speakers</li>
                                <li>Power Inverters</li>
                       </ul>
                        </details> 
                        <details className="sidebar-dropdown">
                            <summary>Sports & Outdoors</summary>
                            <ul>
                                <li>Fitness & Body Building</li>
                                <li>Bikes</li>
                                <li>Electric Scooters</li>
                                <li>Portable Power Stations</li>
                                <li>Solar Panels</li>
                                
                            </ul>
                        </details>
                        <details className="sidebar-dropdown">
                        <summary>Computers,Tablet & Acce...</summary>
                        <ul>
                            <li>Android Tablet</li>
                            <li>Cases & Covers</li>
                            <li>Wired Keyboards</li>
                            <li>Others</li>
                            <li>Ultrabooks</li>                          
                        </ul>
                    </details>
                    <details className="sidebar-dropdown">
                        <summary>Smart Home & Garden</summary>
                        <ul>
                            <li>Robot Vacuum Cleaner</li>
                            <li>Cordless Vacuum Cleaners</li>
                            <li>Bakeware</li>
                             <li>CookWare</li>
                             <li>Kitchen Appliances</li>
                            <li>LED Outdoor Lights</li>
                            <li>Cordless Vacuum Cleaner Accessories</li>
                             <li>Dog Supplies</li> 
                             <li>Cat Supplies</li>
                            <li>Others</li> 
                            <li>Other Pet Supplies</li>
                            <li>Other Furniture & Accessories</li>
                   </ul>
                    </details >

                        <details className="sidebar-dropdown">
                            <summary>Wearable Devices</summary>
                            <ul>
                                <li>Smart Watches</li>
                                <li>Smart Bracelets</li>
                                <li>Wearables Accessories</li>
                            </ul>
                        </details>
                        <details className="sidebar-dropdown">
                        <summary>TV Boxes & Mini PCs</summary>
                        <ul>
                            <li>TV Boxes</li>
                            <li>Window Mini PCs</li>
      
                        </ul>
                    </details>

                        <details className="sidebar-dropdown">
                            <summary>Toy & Hobbies</summary>
                            <ul>
                                <li>RC Quadcopters</li>
                            </ul>
                        </details>
        
                        <details className="sidebar-dropdown">
                            <summary>Automobiles & Motorcycles</summary>
                            <ul>
                               <li>Car Repairs & Maintenance</li>
                            </ul>
                        </details>
                    
                </div>
            </Box>
  
  <Box  w='75%'>
     <VStack>
      <Box w='100%' h='200px' mb='10px' p='20px' bg='#ffff'>
      <Box display='flex' mb='10px'   gap='10px' className='sort-text-byPrice'>
           <Text>New Arrived:</Text>
          <Box onClick={fromAtoZ}><Text fontSize='sm'>7 days</Text> </Box>
          <Box onClick={fromZtoA}><Text fontSize='sm'>15 days</Text> </Box>
          <Box onClick={fromAtoZ}> <Text fontSize='sm'>30 Days</Text> </Box>
      </Box>
        <Box display='flex'   gap='10px' className='sort-text-byPrice'>
           <Text>Sort by Price :</Text>
          <Box    onClick={lowtohigh}><Text fontSize='sm'>Low to High<ChevronUpIcon/></Text> </Box>
          <Box    onClick={hightolow}><Text fontSize='sm'>High to Low  <ChevronDownIcon/></Text> </Box>
          <Box    onClick={fromAtoZ}> <Text fontSize='sm'>New Arrival</Text> </Box>
            
              </Box>
              <Box display='flex'   gap='10px' className='sort-text-byDiscount' mt='10px'>
                  <Text>Sort by Discount % :</Text>
                  <Box onClick={lowDiscount}><Text fontSize='sm'><TriangleUpIcon/></Text> </Box>
                  <Box onClick={highDiscount}><Text fontSize='sm'><TriangleDownIcon/></Text> </Box>
             </Box>
             
             <Box display='flex'   gap='10px' className='sort-text-byPrice' mt='10px'>
                 <Text>Filter by :</Text>
                 <Box onClick={()=>filterByStarFive(5)}><Text fontSize='sm'>5 Star Rating</Text></Box>
            </Box>
                 
             </Box>
              

      
      <Box>
     <SimpleGrid columns={{base:2,sm:2,md:3,lg:4}} spacing={4} >
           {datas.length>0 && datas.map((el) => (
          <Link  to= {`/newarrivals/${el.id}`} key={el.id}>
          <Box 
           onClick={()=>handleAddToCart(el)}
           key={el.id}
           className='eachBox'
           pos='relative'
           style={{
              background:'white',
              fontFamily: "Open Sans",
              display: "flex",
              padding:'10px',
              flexDirection: "column",
               }}
          >
           
            <Image position='absolute'  mt='-10px' right='0' src='https://img.gkbcdn.com/s3/l/label/Label1.png?version=20221110'></Image>
            <Image src={el.PicturePath}></Image>
           
            <Box
          mt='1'
          as='h4'
          lineHeight='tight'
          noOfLines={2}
          textAlign='left'
        >
         {el.Name}
        </Box>
           <Box textAlign='left'>
            <Text  fontWeight='600' fontSize='large'>${el.SalePrice}</Text>
            <Box display='flex' gap='3px'> 
              <Text textAlign='left' as='del' fontSize='xs' color='gray'>${el.CsSalesPrice} </Text>
             <Text  textAlign='left' fontSize='xs' color='gray'>({el.Discount}%off)</Text>
             </Box>
             <Badge ml='1' colorScheme='green' display='flex' alignItems='center' w='max-content'>
             <IoIosStarOutline /><Text fontSize='sm'>{el.Rating}</Text>
      </Badge>
          
             
             </Box>
             
          </Box>
    </Link>
        ))}
    </SimpleGrid>
    </Box>
     </VStack>
    </Box> 
    </Flex>
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



