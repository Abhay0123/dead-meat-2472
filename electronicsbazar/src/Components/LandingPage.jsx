import {Box,SimpleGrid,HStack,Image,Text,Heading,GridItem,Grid}  from '@chakra-ui/react';
import React, { useState,useEffect,useRef } from 'react'
import ImageSlider from './ImageSlider.js';
const LandingPage=()=>{
    const [imgInd, setImgInd] = useState(0);
    const timeoutRef = useRef(null);
    const Slides=[
        {url:'https://img.gkbcdn.com/bn/2207/740X670-62c3b8132b40c9270489e6ae._p1_.jpg'},
        {url:'https://img.gkbcdn.com/bn/2211/740x670-636328c82b40c92ed8b1d35e._p1_.jpg'},
        {url:'https://img.gkbcdn.com/bn/2211/740x670-6369b73f2b40c95728c3e707._p1_.jpg'},
        {url:'https://img.gkbcdn.com/bn/2210/740x670-635f8c012b40c90c8c92734d._p1_.jpg'},
        {url:'https://img.gkbcdn.com/bn/2211/740x670-63647bec2b40c94fac2af423._p1_.jpg'},
        {url:'https://img.gkbcdn.com/bn/2211/740x670-63647ba22b40c94fac2af421._p1_.jpg'},
         {url:'https://img.gkbcdn.com/bn/2211/740x670-636382c52b40c94424fc21e0._p1_.jpg'}
    ]

    // const LatestItem=[
    //      {url:''},
    //      {url:''},
    //      {url:''},
    //      {url:''},
    //      {url:''},
    //      {url:''},
    //      {url:''},
    //      {url:''},

    // ]
    const PopularBrandimages = [
         "https://img.gkbcdn.com/bn/2205/1500x260-628f67db2b40c91f8ca376f8._p1_.jpg",
        "https://img.gkbcdn.com/bn/2205/1500x2602-628f67e92b40c91f8ca376f9._p1_.jpg",
        "https://img.gkbcdn.com/bn/2205/1500x2603-628f67f02b40c91f8ca376fa._p1_.jpg",
        
      ];
       function resetTimeout() {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        }
      
        useEffect(() => {
          resetTimeout();
          timeoutRef.current = setTimeout(
            () => setImgInd((prevIndex) => (prevIndex + 1) % PopularBrandimages.length),
            2000
          );
      
          return () => {
            resetTimeout();
          };
        }, [imgInd]);
    
    
      

    return (
        <Box ml='40px' mr='20px'>
            <Box >
            <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
            <Box  style={{width:'700px' ,height:'700px'}}> <ImageSlider slides={Slides}/> </Box>
           <Box ml='45px' width='580px' height='70px' mt='10px'>
                <HStack  borderRadius='6px' border='1px solid gray'>
                        <Box>
                            <Image w='140px' src='https://img.gkbcdn.com/p/2022-10-15/AOSIMAN-140FCC-Portable-14-Inch-Monitor-1920-1200-Resolution-517894-0._w280_p1_.jpg'></Image>
                            <Text ml='20px' bg='red' borderRadius='6px' color='white' fontSize='xs' width='80px'>23% off</Text>
                            <Text as='b'>$94.09</Text>
                            <br />
                            <Text as='s'>$122.73</Text>

                        </Box>
                        <Box>
                            <Image w='140px' src='https://img.gkbcdn.com/p/2022-09-23/SCULPFUN-S30-Pro-10W-Laser-Engraver-Cutter-517192-0._w280_p1_.jpg'></Image>
                            <Text ml='20px' bg='red' borderRadius='6px' color='white' fontSize='xs'  width='80px'>23% off</Text>
                            <Text as='b'>$94.09</Text>
                            <br />
                            <Text as='s'>$122.73</Text>

                        </Box>
                        <Box>
                            <Image w='140px' src='https://img.gkbcdn.com/p/2022-10-14/Multifunctional-Electric-Heating-Pad-Grey-EU-Plug-517864-0._w280_p1_.jpg'></Image>
                            <Text ml='20px' bg='red' borderRadius='6px' color='white' fontSize='xs'  width='80px'>23% off</Text>
                            <Text as='b'>$94.09</Text>
                            <br />
                            <Text as='s'>$122.73</Text>

                        </Box>
                        <Box>
                            <Image w='140px' src='https://img.gkbcdn.com/p/2020-11-02/rg351p-anbernic-retro-game-console-black-1604318839608._w280_p1_.jpg'></Image>
                            <Text ml='20px' bg='red' borderRadius='6px' color='white' fontSize='xs'  width='80px'>23% off</Text>
                            <Text as='b'>$94.09</Text>
                            <br />
                            <Text as='s'>$122.73</Text>

                        </Box>

                </HStack>  
                <HStack mt='30px' border='1px solid gray' borderRadius='6px'>
                        <Box>
                            <Image w='140px' src='https://img.gkbcdn.com/p/2022-05-17/Xiaomi-Mijia-2L-Smart-Automatic-Pet-Water-Dispenser-500597-0._w280_p1_.jpg'></Image>
                            <Text fontSize='sm'>Xiaomi Mijia 2L</Text>
                            <Text as='b'>$94.09</Text>
                            <br />
                            <Text as='s'>$122.73</Text>

                        </Box>
                        <Box>
                            <Image w='140px' src='https://img.gkbcdn.com/p/2022-05-04/Anbernic-RG351MP-Portable-Game-Player-16GB-64GB-TF-Card-Ocean-Blue-500229-0._w280_p1_.jpg'></Image>
                            <Text fontSize='sm'>ANBERNIC RG351MP</Text>
                            <Text as='b'>$94.09</Text>
                            <br />
                            <Text as='s'>$122.73</Text>

                        </Box>
                        <Box>
                            <Image w='140px' src='https://img.gkbcdn.com/p/2021-10-29/P400-Bluetooth-5-2-TWS-Earbuds-475334-3._w280_p1_.jpg'></Image>
                            <Text fontSize='sm'>Air Plus 4 Bluetooth</Text>
                            <Text as='b'>$94.09</Text>
                            <br />
                            <Text as='s'>$122.73</Text>

                        </Box>
                        <Box>
                            <Image w='140px' src='https://img.gkbcdn.com/p/2022-02-10/a6r-tws-wireless-earphones-black-4570b2-1644488631155._w280_p1_.jpg'></Image>
                            <Text fontSize='sm'>A6R TWS Bluetooth</Text>
                            <Text as='b'>$94.09</Text>
                            <br />
                            <Text as='s'>$122.73</Text>

                        </Box>

                </HStack>  
            

           </Box>

        </SimpleGrid>
  </Box>  
  <Heading align='left'>Trending Categories</Heading>
     <HStack mt='10px' padding='10px' gap='20px'>
      <Box border='1px solid gray'>
        <Image src='https://img.gkbcdn.com/bn/2211/3-636b24682b40c91ee886b172._p1_.jpg'></Image>
        <Text ml='10px' fontWeight='800' align='left'>3D Printers & Electronics</Text>
        <Text ml='10px' align='left' fontSize='s' >3D printers, laser engravers, laptops, speakers, earphones and more electronics, up to 70% off!</Text>
      </Box >
      <Box border='1px solid gray'>
        <Image src='https://img.gkbcdn.com/bn/2211/2-636b23e72b40c91ee886b171._p1_.jpg'></Image>
        <Text ml='10px' align='left' fontWeight='800'> Smart Home & Garden</Text>
        <Text ml='10px' align='left' fontSize='s'>Smart cleaning robots and vacuums,living room furniture, patio & garden supplies,up to 60% off!</Text>
      </Box>
      <Box border='1px solid gray'>
        <Image src='https://img.gkbcdn.com/bn/2211/1-636b23b32b40c91ee886b170._p1_.jpg'></Image>
        <Text ml='10px' align='left' fontWeight='800'>E-transport & Outdoor</Text>
        <Text ml='10px' align='left' fontSize='s'> Electric bikes, electric scooters, portable generators, and more outdoor gear, save $50 now!</Text>
      </Box>
      
     </HStack>
   {/* New For You */}
     <Box padding='10px' bg='#f1f6fd' color='white'>
     <Text align='left' fontSize='30px' fontWeight='800'>New For You</Text>
     <SimpleGrid>
       <Box>
        <Image src='https://img.gkbcdn.com/bn/2211/5-636a188c2b40c958a00d243d._p1_.jpg'></Image>
       </Box>
       <Box>
           
       </Box>
        



    </SimpleGrid>
     
    </Box>
    {/* Enjoy life */}
      <HStack mt='20px' mb='20px'>
       <Box >
        <Image h='550px' w='500px' src='https://img.gkbcdn.com/bn/2209/500x632-63326e5e2b40c9222cacb303._p1_.jpg'></Image>
       </Box>
       <Box>
       <Box padding='10px' bg='#f1f6fd'>
       <Text fontWeight='700' align='left' mb='15px'>Go outside for fun and health</Text>
        <HStack>
             <Box>
                <Image src='https://img.gkbcdn.com/bn/2209/210x2107-63326fb32b40c9222cacb304._p1_.jpg'></Image>
                <Text fontSize='xs' color='blue'>Premium e-mobility</Text>
            </Box>
            <Box>
                <Image src='https://img.gkbcdn.com/bn/2205/210x2104-62902c152b40c91cb09e7ada._p1_.jpg'></Image>
                <Text fontSize='xs' color='blue'>Premium e-mobility</Text>
            </Box>
             
           
        </HStack>
        </Box>
        <Box padding='10px' mt='20px' bg='#f1f6fd'>
       <Text fontWeight='700' align='left' mb='15px'>Unleash maximum productivity</Text>
        <HStack>
            <Box>
                <Image src='https://img.gkbcdn.com/bn/2209/210x2102-633270c32b40c9222cacb307._p1_.jpg'></Image>
                <Text fontSize='xs' color='blue'>Premium e-mobility</Text>
            </Box>
            <Box>
                <Image src='https://img.gkbcdn.com/bn/2209/210-633271172b40c9222cacb308._p1_.jpg'></Image>
                <Text fontSize='xs' color='blue'>Premium e-mobility</Text>
            </Box>

        </HStack>
        </Box>
       </Box>
       <Box>
       <Box>
       <Box padding='10px' bg='#f1f6fd'>
       <Text fontWeight='700' align='left' mb='15px'>Easy & efficient home solutions</Text>
        <HStack>
            <Box>
                <Image src='https://img.gkbcdn.com/bn/2209/210x2106-633270272b40c9222cacb305._p1_.jpg'></Image>
                <Text fontSize='xs' color='blue'>Premium e-mobility</Text>
            </Box>
            <Box>
                <Image src='https://img.gkbcdn.com/bn/2209/210x2101-6332707e2b40c9222cacb306._p1_.jpg'></Image>
                <Text fontSize='xs' color='blue'> Premium e-mobility</Text>
            </Box>
           
        </HStack>
        </Box>
        <Box padding='10px' bg='#f1f6fd' mt='20px'>
       <Text fontWeight='700' align='left' mb='15px'>Let's play together</Text>
        <HStack>
            <Box>
                <Image src='https://img.gkbcdn.com/bn/2209/210x2105-633272852b40c9222cacb30a._p1_.jpg'></Image>
                <Text fontSize='xs' color='blue'>Premium e-mobility</Text>
            </Box>
            <Box>
                <Image src='https://img.gkbcdn.com/bn/2209/210x2104-633272352b40c9222cacb309._p1_.jpg'></Image>
                <Text fontSize='xs' color='blue'>Premium e-mobility</Text>
            </Box>
      </HStack>
        </Box>
       </Box>
             
       </Box>
         </HStack>
          {/* Best Sellers  */}
        <Heading>Best Sellers </Heading>
        <Box w='100%' h='400px' bg='gray' mt='20px' mb='20px'>
    
       </Box>
    {/* Popular Brands */}
    
    <Heading>Popular Brands </Heading>
                 <Box className='slideshow' mt='20px' mb='30px'>
                  <img src={PopularBrandimages[imgInd]} alt={imgInd} />
                 <Box className="slider">{PopularBrandimages.map((_, ind) => (
          <Box onClick={() => setImgInd(ind)} className={imgInd === ind ? "active" : ""}/>))}
         </Box>
        </Box>
        


        </Box>
    )
}
export default LandingPage;
















