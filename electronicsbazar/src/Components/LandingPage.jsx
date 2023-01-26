import {Box,SimpleGrid,HStack,Image,Text,Heading}  from '@chakra-ui/react';
import React, { useState,useEffect,useRef } from 'react'
import ImageSlider from './ImageSlider.js';

const LandingPage=()=>{
    const [imgInd, setImgInd] = useState(0);
    const timeoutRef = useRef(null);
    const Slides=[
        { id:'1',url:'https://img.gkbcdn.com/bn/2207/740X670-62c3b8132b40c9270489e6ae._p1_.jpg'},
        { id:'2',url:'https://img.gkbcdn.com/bn/2211/740x670-636328c82b40c92ed8b1d35e._p1_.jpg'},
        { id:'3',url:'https://img.gkbcdn.com/bn/2211/740x670-6369b73f2b40c95728c3e707._p1_.jpg'},
        { id:'4',url:'https://img.gkbcdn.com/bn/2210/740x670-635f8c012b40c90c8c92734d._p1_.jpg'},
        { id:'5',url:'https://img.gkbcdn.com/bn/2211/740x670-63647bec2b40c94fac2af423._p1_.jpg'},
        {id:'6',url:'https://img.gkbcdn.com/bn/2211/740x670-63647ba22b40c94fac2af421._p1_.jpg'},
         {id:'7',url:'https://img.gkbcdn.com/bn/2211/740x670-636382c52b40c94424fc21e0._p1_.jpg'}
    ]

 
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
        }, [imgInd,PopularBrandimages.length]);
    
    
      

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
     <SimpleGrid  padding='20px' columns={4}>
       <Box>
       <Image src='https://img.gkbcdn.com/bn/2211/5-636a188c2b40c958a00d243d._p1_.jpg'></Image>
       </Box>
       <Box>
       <Image src='https://img.gkbcdn.com/p/2022-11-04/Q26-Pro-Smartwatch-1-83---TFT-Screen-Black-518108-0._w280_p1_.jpg'></Image>
       </Box>
       <Box>
       <Image src='https://img.gkbcdn.com/p/2020-07-23/Proscenic-P10-Wireless-Hand-Held-Vacuum-Cleaner-Portable-Rechargeable-425841-1._w280_p1_.jpg'></Image>
       </Box>
       <Box>
       <Image src='https://img.gkbcdn.com/p/2022-03-14/Anbernic-RG280V-Retro-Handheld-Game-Console-Add-32GB-TF-Card-Golden-497776-0._w280_.jpg'></Image>
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
        {/* <Heading>Best Sellers </Heading>
        <Box w='100%' h='400px' bg='gray' mt='20px' mb='20px'>
    
       </Box> */}
    {/* Popular Brands */}
    
    <Heading>Popular Brands </Heading>
                 <Box className='slideshow' mt='20px' mb='30px'>
                  <img src={PopularBrandimages[imgInd]} alt={imgInd} />
                 <Box className="slider">{PopularBrandimages.map((_, el) => (
          <Box key={el} onClick={() => setImgInd(el)} className={imgInd === el ? "active" : ""}/>))}
         </Box>
        </Box>
        {/*Lower Section of this page  */}
        <Box border='1px solid gray' w='100%' h='280px' borderRadius='8px' mb='30px'>
          <HStack >
                 <Box w='33%'>
                    <Image borderRadius='4px'  src='https://img.gkbcdn.com/bb/tronsmart-20221007152616686._p1_.jpg'></Image>
                 </Box>
                 <Box w='67%'>
                    <HStack>
                        <Box align='left'>
                            <Image w='160px' src='https://img.gkbcdn.com/p/2020-01-09/Tronsmart-element-T6-plus-Upgrade-Black-895558-._w280_p1_.jpg'></Image>
                            <Text display='flex' justifyContent='center' alignItems='center' bg='red' borderRadius='6px' color='white' fontSize='xs'  width='80px'>38% OFF</Text>
                            <Text noOfLines={2} fontSize='sm' >Tronsmart T6 Plus Upgraded Edition</Text>
                            <Text as='b'>€51.13</Text>
                            <br />
                            <Text as='s'>€81.81</Text>
                        </Box>
                        <Box align='left'>
                            <Image  w='160px' src='https://img.gkbcdn.com/p/2022-11-04/tronsmart-apollo-q10-anc-bluetooth-headphones--e74f5c-1667556691258._w280_p1_.jpg'></Image>
                            <Text  display='flex' justifyContent='center' alignItems='center' bg='red' borderRadius='6px' color='white' fontSize='xs'  width='80px'>50% OFF</Text>
                            <Text noOfLines={2} fontSize='sm'>Tronsmart Apollo Q10 ANC Active Noise</Text>
                            <Text as='b'>€30.67</Text>
                            <br />
                            <Text as='s'>€61.36</Text>
                        </Box>
                         <Box align='left'>
                            <Image  w='160px' src='https://img.gkbcdn.com/p/2019-10-24/tronsmart-element-t6-max-60w-bluetooth-5-0-nfc-speaker-black-1574132858241._w280_p1_.jpg'></Image>
                            <Text display='flex' justifyContent='center' alignItems='center' bg='red' borderRadius='6px' color='white' fontSize='xs'  width='80px'> 36% OFF</Text>
                            <Text noOfLines={2} fontSize='sm' >Tronsmart Element T6 Max 60W Bluetooth 5.0</Text>
                            <Text as='b'>€65.45</Text>
                            <br />
                            <Text as='s'>€102.27</Text>
                        </Box>
                        <Box align='left'>
                            <Image  w='160px' src='https://img.gkbcdn.com/p/2020-03-18/Tronsmart-Onyx-Ace-Bluetooth-5-0-TWS-Earphones-White-899355-._w280_p1_.jpg'></Image>
                            <Text display='flex' justifyContent='center' alignItems='center' bg='red' borderRadius='6px' color='white' fontSize='xs'  width='80px'>40% OFF</Text>
                            <Text fontSize='sm'>Tronsmart Onyx Ace Pro TWS Earbuds, Qualcomm</Text>
                                 
                            <Text as='b'>€24.54</Text>
                            <br />
                            <Text as='s'>€40.90</Text>
                        </Box>
                    </HStack>

                 </Box>

          </HStack>
      </Box>

      <Box border='1px solid gray' w='100%' h='277px' borderRadius='8px' mb='30px'>
          <HStack >
                 <Box w='33%'>
                    <Image  borderRadius='4px' src='https://img.gkbcdn.com/bb/engwe-20221110163953412._p1_.jpg'></Image>
                 </Box>
                 <Box w='67%'>
                    <HStack>
                        <Box align='left'>
                            <Image w='160px' src='https://img.gkbcdn.com/p/2022-05-16/engwe-ep-2-pro-folding-electric-moped-bicycle-750w-motor-black-f02f83-1652693914387._w280_p1_.jpg'></Image>
                            <Text display='flex' justifyContent='center' alignItems='center' bg='red' borderRadius='6px' color='white' fontSize='xs'  width='80px'>38% OFF</Text>
                            <Text noOfLines={2} fontSize='sm' >Tronsmart T6 Plus Upgraded Edition</Text>
                            <Text as='b'>€51.13</Text>
                            <br />
                            <Text as='s'>€81.81</Text>
                        </Box>
                        <Box align='left'>
                            <Image  w='160px' src='https://img.gkbcdn.com/p/2022-07-11/ENGWE-T14-Folding-Electric-Bicycle-14-Inch-Tire-508466-0._w280_p1_.jpg'></Image>
                            <Text  display='flex' justifyContent='center' alignItems='center' bg='red' borderRadius='6px' color='white' fontSize='xs'  width='80px'>50% OFF</Text>
                            <Text noOfLines={2} fontSize='sm'>Tronsmart Apollo Q10 ANC Active Noise</Text>
                            <Text as='b'>€30.67</Text>
                            <br />
                            <Text as='s'>€61.36</Text>
                        </Box>
                         <Box align='left'>
                            <Image  w='160px' src='https://img.gkbcdn.com/p/2022-02-24/engwe-c20-pro-folding-electric-bicycle-67247a-1645673469050._w280_p1_.jpg'></Image>
                            <Text display='flex' justifyContent='center' alignItems='center' bg='red' borderRadius='6px' color='white' fontSize='xs'  width='80px'> 36% OFF</Text>
                            <Text noOfLines={2} fontSize='sm' >Tronsmart Element T6 Max 60W Bluetooth 5.0</Text>
                            <Text as='b'>€65.45</Text>
                            <br />
                            <Text as='s'>€102.27</Text>
                        </Box>
                        <Box align='left'>
                            <Image  w='160px' src='https://img.gkbcdn.com/p/2022-10-28/engwe-engine-pro-folding-electric-bicycle-750w-48v-16ah-battery-black-77682a-1666945658891._w280_p1_.jpg'></Image>
                            <Text display='flex' justifyContent='center' alignItems='center' bg='red' borderRadius='6px' color='white' fontSize='xs'  width='80px'>40% OFF</Text>
                            <Text fontSize='sm'>Tronsmart Onyx Ace Pro TWS Earbuds, Qualcomm</Text>
                                 
                            <Text as='b'>€24.54</Text>
                            <br />
                            <Text as='s'>€40.90</Text>
                        </Box>
                    </HStack>

                 </Box>

          </HStack>
      </Box>

      <Box border='1px solid gray' w='100%' h='280px' borderRadius='8px' mb='30px'>
          <HStack >
                 <Box w='33%'>
                    <Image borderRadius='4px'  src='https://img.gkbcdn.com/bb/sculpfun-20221007152503762._p1_.jpg'></Image>
                 </Box>
                 <Box w='67%'>
                    <HStack>
                        <Box align='left'>
                            <Image w='160px' src='https://img.gkbcdn.com/p/2021-12-22/SCULPFUN-S9-Laser-Engraver-481991-0._w280_p1_.jpg'></Image>
                            <Text display='flex' justifyContent='center' alignItems='center' bg='red' borderRadius='6px' color='white' fontSize='xs'  width='80px'>38% OFF</Text>
                            <Text noOfLines={2} fontSize='sm' >Tronsmart T6 Plus Upgraded Edition</Text>
                            <Text as='b'>€51.13</Text>
                            <br />
                            <Text as='s'>€81.81</Text>
                        </Box>
                        <Box align='left'>
                            <Image  w='160px' src='https://img.gkbcdn.com/p/2022-09-23/SCULPFUN-S30-Pro-10W-Laser-Engraver-Cutter-517192-0._w280_p1_.jpg'></Image>
                            <Text  display='flex' justifyContent='center' alignItems='center' bg='red' borderRadius='6px' color='white' fontSize='xs'  width='80px'>50% OFF</Text>
                            <Text noOfLines={2} fontSize='sm'>Tronsmart Apollo Q10 ANC Active Noise</Text>
                            <Text as='b'>€30.67</Text>
                            <br />
                            <Text as='s'>€61.36</Text>
                        </Box>
                         <Box align='left'>
                            <Image  w='160px' src='https://img.gkbcdn.com/p/2022-05-12/Sculpfun-S10-Laser-Engraver-500429-0._w280_p1_.jpg'></Image>
                            <Text display='flex' justifyContent='center' alignItems='center' bg='red' borderRadius='6px' color='white' fontSize='xs'  width='80px'> 36% OFF</Text>
                            <Text noOfLines={2} fontSize='sm' >Tronsmart Element T6 Max 60W Bluetooth 5.0</Text>
                            <Text as='b'>€65.45</Text>
                            <br />
                            <Text as='s'>€102.27</Text>
                        </Box>
                        <Box align='left'>
                            <Image  w='160px' src='https://img.gkbcdn.com/p/2022-05-09/Sculpfun-Honeycomb-Panel-400x400mm-500292-0._w280_p1_.jpg'></Image>
                            <Text display='flex' justifyContent='center' alignItems='center' bg='red' borderRadius='6px' color='white' fontSize='xs'  width='80px'>40% OFF</Text>
                            <Text fontSize='sm'>Tronsmart Onyx Ace Pro TWS Earbuds, Qualcomm</Text>
                                 
                            <Text as='b'>€24.54</Text>
                            <br />
                            <Text as='s'>€40.90</Text>
                        </Box>
                    </HStack>

                 </Box>

          </HStack>
      </Box>


      <Box border='1px solid gray' w='100%' h='280px' borderRadius='8px' mb='30px'>
          <HStack >
                 <Box w='33%'>
                    <Image  borderRadius='4px' src='https://img.gkbcdn.com/bb/creality-20221007150037712._p1_.jpg'></Image>
                 </Box>
                 <Box w='67%'>
                    <HStack>
                        <Box align='left'>
                            <Image w='160px' src='https://img.gkbcdn.com/p/2022-03-02/creality-ender-3-s1-pro-3d-printer-c9e30b-1646215071933._w280_p1_.jpg'></Image>
                            <Text display='flex' justifyContent='center' alignItems='center' bg='red' borderRadius='6px' color='white' fontSize='xs'  width='80px'>38% OFF</Text>
                            <Text noOfLines={2} fontSize='sm' >Tronsmart T6 Plus Upgraded Edition</Text>
                            <Text as='b'>€51.13</Text>
                            <br />
                            <Text as='s'>€81.81</Text>
                        </Box>
                        <Box align='left'>
                            <Image  w='160px' src='https://img.gkbcdn.com/p/2022-07-09/creality-ender-3-v2-3d-printer-with-upgraded-32-bit-silent-motherboard-732f54-1657351329700._w280_.JPG'></Image>
                            <Text  display='flex' justifyContent='center' alignItems='center' bg='red' borderRadius='6px' color='white' fontSize='xs'  width='80px'>50% OFF</Text>
                            <Text noOfLines={2} fontSize='sm'>Tronsmart Apollo Q10 ANC Active Noise</Text>
                            <Text as='b'>€30.67</Text>
                            <br />
                            <Text as='s'>€61.36</Text>
                        </Box>
                         <Box align='left'>
                            <Image  w='160px' src='https://img.gkbcdn.com/p/2022-05-24/Creality-CR-Scan-Lizard-3D-Scanner-501259-0._w280_p1_.jpg'></Image>
                            <Text display='flex' justifyContent='center' alignItems='center' bg='red' borderRadius='6px' color='white' fontSize='xs'  width='80px'> 36% OFF</Text>
                            <Text noOfLines={2} fontSize='sm' >Tronsmart Element T6 Max 60W Bluetooth 5.0</Text>
                            <Text as='b'>€65.45</Text>
                            <br />
                            <Text as='s'>€102.27</Text>
                        </Box>
                        <Box align='left'>
                            <Image  w='160px' src='https://img.gkbcdn.com/p/2022-10-31/creality-ender-3-s1-3d-printer-303cda-1667202443810._w280_p1_.jpg'></Image>
                            <Text display='flex' justifyContent='center' alignItems='center' bg='red' borderRadius='6px' color='white' fontSize='xs'  width='80px'>40% OFF</Text>
                            <Text fontSize='sm'>Tronsmart Onyx Ace Pro TWS Earbuds, Qualcomm</Text>
                                 
                            <Text as='b'>€24.54</Text>
                            <br />
                            <Text as='s'>€40.90</Text>
                        </Box>
                    </HStack>

                 </Box>

          </HStack>
      </Box>





        </Box>
    )
}
export default LandingPage;
















