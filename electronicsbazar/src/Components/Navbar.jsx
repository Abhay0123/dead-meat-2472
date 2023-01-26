import {
  Box,
  Stack,
  Grid,
  GridItem,
  HStack,
  Link,
  Image,
  Text,
  Input,
  InputGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  VStack
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { HamburgerIcon } from "@chakra-ui/icons";
import { BsCart } from "react-icons/bs";

import { HiOutlineUser } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
   
const links = [
    { path: "/newarrivals", title: <Text bg='red' as={"b"}>NEW</Text>},
    { path: "/bestselling", title: "Bestselling"},
    { path: "/items", title: " Brand"},
    { path: "/clearance", title: "Clearance"},
    { path: "/warehouselist", title: "Deals"},
    { path: "/", title: "Home"},
    { path: "/cart", title: "Cart"}
   
    
];

const  activeStyle={
        textDecoration : 'none',
        color : 'red',
        padding:'10px'
      }
      
const  defaultStyle={
        textDecoration : 'none',
        color  : 'black',
        padding:'10px'
           
    }

const Navbar = () => {

  // const url = `https://api-pathak-database.vercel.app/Items`
  // const ref = useRef(null)
  // const [hiddenDiv, setHiddenDiv] = useState(false)
  // const [data, setData] = useState([])
  // const [searchVal, setSearchVal] = useState("");
  // useEffect(()=>{
  //   fetchData(searchVal)
  // },[searchVal])
  // const fetchData=(searchVal)=>{
  //   fetch(`${url}?_limit=5&q=${searchVal}`)
  //   .then((res)=>res.json())
  //   .then((res)=>{
  //     // setData(res)
  //     setData(res)
  //     console.log(res, " search input data after fetched ");
  //   })
  // }
  // const debounce = (fn, timeout)=>{
  //   let timerid;
  //   return ()=>{
  //     clearTimeout(timerid)
  //     timerid = setTimeout(() => {
  //       fn()
  //     }, timeout);
  //   }
  // }
  // const handleinput = debounce(()=>{
  //   const val = ref.current.value
  //   console.log(" event val check in debounce ", val);
  //   setHiddenDiv(true)
  //   setSearchVal(val)
  // }, 500)

  // window.addEventListener("click",(e)=>{
  //   console.log(e.target.id, " check window ");
  //   if(e.target.id!=="inputBox"){
  //     setHiddenDiv(false)
  //   }
  // })
  return (
    <>
      <Box w="100%" h="166px" bg=" #0066ff">
        {/* upper navbar */}
        <Box
          style={{ display: "flex", justifyContent: "right" }}
          mr="50px"
          h="40px"
          gap="40px"
          color="white"
        >
          <Box>
            <Box className="active1">
              <Text>Save BIG with our app! </Text>
              <div className="deepmenu1" w="200px">
                <ul style={{ display: "inline-block" }} className="menu">
                  <div>
                    <Link>
                      <Text w="300px">
                        Download app to get up to 70% off app-only deals and
                        coupons worth $50
                      </Text>{" "}
                    </Link>
                    <Grid
                      h="100px"
                      templateRows="repeat(3, 1fr)"
                      templateColumns="repeat(2, 1fr)"
                      gap={2}
                    >
                      <GridItem rowSpan={3} colSpan={1}>
                        <Image src="https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png"></Image>
                      </GridItem>
                      <GridItem colSpan={1}>
                        <Image src="https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg"></Image>
                      </GridItem>
                      <GridItem colSpan={1}>
                        <Image src="https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg"></Image>
                      </GridItem>
                      <GridItem colSpan={1}>
                        <Image src="https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg"></Image>
                      </GridItem>
                    </Grid>
                  </div>
                  <Box mt="40px">
                    {" "}
                    <hr />{" "}
                  </Box>
                  <Link>Go To mobile site</Link>
                </ul>
              </div>
            </Box>
          </Box>

          <Box h={200}>
            <Box className="active2">
              <Text >Language </Text>
              <div className="deepmenu2">
                <ul style={{ display: "inline-block" }} className="menu">
                  <div>
                    < >English</>
                  </div>
                  <div>
                    <Text >Italiano</Text>
                  </div>
                  <div>
                    <Text >Deutsch</Text>
                  </div>
                  <div>
                    <Text >Español</Text>
                  </div>
                  <div>
                    <Text >Français</Text>
                  </div>
                  <div>
                    <Text >Português</Text>
                  </div>
                  <div>
                    <Text >Slovenčina</Text>
                  </div>
                  <div>
                    <Text >Magyar</Text>
                  </div>
                  <div>
                    <Text >Slovenščina</Text>
                  </div>
                  <div>
                    <Text >Lietuvių kalba</Text>
                  </div>
                  <div>
                    <Text >Svenska</Text>
                  </div>
                  <div>
                    <Text>Ελληνικά</Text>
                  </div>
                  <div>
                    <Text>Dansk</Text>
                  </div>
                  <div>
                    <Text >עברית</Text>
                  </div>
                  <div>
                    <Text >Hrvatski jezik</Text>
                  </div>
                  <div>
                    <Text >Polskie</Text>
                  </div>
                  <div>
                    <Text >Limba română</Text>
                  </div>
                  <div>
                    <Text>Čeština</Text>
                  </div>
                  <div>
                    <Text>Japanese </Text>
                  </div>
                </ul>
              </div>
            </Box>
          </Box>

          <Box>
            <Box className="active3">
              <Text >Support Center</Text>
              <div className="deepmenu3">
                <ul style={{ display: "inline-block" }} className="menu">
                  <div>
                    {" "}
                    <Text >Live Chat</Text>
                  </div>
                  <div>
                    {" "}
                    <Text >Ticket</Text>
                  </div>
                  <div>
                    {" "}
                    <Text >Help Center</Text>
                  </div>
                </ul>
              </div>
            </Box>
          </Box>
        </Box>
        <hr />
        {/* middle navbar */}
        <Box ml="100px" mt="10px">
          <HStack spacing="24px" color="white">
         
            <Box w="230px" p="10px" >
               <Link href="/">
              <Image
                src="https://content1.geekbuying.com/V1.4/en/images/indexV7/Geekbuying.png"
                alt="logo"
               
              ></Image> </Link>
            </Box>
            <Box>
              <Stack spacing={8}>
                <InputGroup>
                  <Menu>
                    <MenuButton as={Button} color="black" bg="white">
                      All Categories
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Download</MenuItem>
                      <MenuItem>Create a Copy</MenuItem>
                      <MenuItem>Mark as Draft</MenuItem>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                  </Menu>

                  <Input
                    w="550px"
                    type="tel"
                    placeholder="Search By Keywords"
                    bg="gray"
                  />
                   {/* <Box w="34%" pos={'relative'}>
            <InputGroup>
              <Input
                placeholder="Search for products,brands and more"
                bg="gray"
                w="550px"
                borderRadius="2px"
                h="36px"
                fontSize="14px"
                ref={ref}
                onInput={handleinput}
                id='inputBox'
              />
              
            </InputGroup>
            <Box
              display={hiddenDiv?"":"none"}
              pos={'absolute'} zIndex={'10'}
              maxH='320px' overflowY={'auto'}
              borderRadius='0 0 2px 2px'
              borderTop={'1px solid #e0e0e0'}
              w='100%'
              bg='#fff'
              boxShadow={'2px 3px 5px -1px rgb(0 0 0 / 50%)'}
            >
              {
                data.map((item, index)=>(
                  <Box key={index} color='gray'>
                    <NavLink to={`/newarrivals/:ID`}>
                      <Flex gap={2} p='10px 25px' m='10px 0'
                      align={'center'}
                      cursor='pointer'
                      _hover={{bg:"#F5F8FF"}}
                      // onClick={()=>handleSetQuaryUrl(item.query_url)}
                      >
                        <Box maxH='52px' w='52px'>
                          <Image maxH='30px' maxW='32px' src=
                          {item.PicturePath}
                          // {item.thumbnail}item.LinkUrl+
                          />
                        </Box>
                        <Box color={'#212121'}
                        >
                          {item.Name}
                          
                        </Box>
                      </Flex>
                    </NavLink>
                  </Box>
                ))
              }
            </Box>
          </Box> */}
                </InputGroup>
              </Stack>
            </Box>

            <Box w="180px" h="10">
              <Text>Ship to /EUR</Text>
            </Box>
            <Box w="180px" style={{ display: "flex", gap: "3px" }}>
              <HiOutlineUser fontSize="30px" /> Sign in{" "}
            </Box>
            <Box w="100px">
              <BsCart fontSize="25px" />
            </Box>
          </HStack>
        </Box>
        {/* Bottom navbar */}
        <Box style={{ color: "white" }} ml="-240px" mt="15px">
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box className="active4">
              <Box bg="blue.200" borderRadius="6px 6px 0px 0px" mt='5px' p="7px">
                <Box >
                  <HamburgerIcon /> Categories
                </Box>
              </Box>
              <Box className="deepmenu4" pos='relative'>
                <ul style={{ display: "inline-block" }} className="menu">
                  <Box className="first">
                    <Text >
                      Local Warehouses
                    </Text>
                    <Box
                     
                      h="442px"
                      w="770px"
                      pos='absolute'
                      top='0'
                      left='256px'
                      className="localWarehouse"
                    >
                      <Flex>
                        <VStack style={{ display: "inline-block" }}>
                          <Text as="b"> EU Warehouse</Text>
                          <Text>EU Deals</Text>
                          <Text as="b">DE Warehouse</Text>
                          <Text>DE Deals</Text>
                          <Text as="b">PL Warehouse</Text>
                          <Text>PL Deals</Text>
                          <Text as="b">ES Warehouse</Text>
                          <Text>ES Deals</Text>
                          <Text as="b">IT Warehouse</Text>
                          <Text>IT Deals</Text>
                          <Text as="b">CZ Warehouse</Text>
                          <Text as="b">EU-3 Warehouse</Text>
                          <Text as="b">HU Warehouse</Text>
                         

                        </VStack>
                        <Image
                          src="https://img.gkbcdn.com/cim/category-1301-6ETJOmbg._p1_.png"
                          alt="image"
                        ></Image>
                      </Flex>
                    </Box>
                  </Box>

                  <Box className="second">
                    {" "}
                    <Text  >
                      Sports & Outdoors
                    </Text>
                    <Box
                     
                      h="442px"
                      w="770px"
                      pos='absolute'
                      top='0'
                      left='256px'
                      className="sportsAndoutdoors"
                    >
                      <Flex>
                        <VStack style={{ display: "inline-block" }}>
                          <Text as="b"> E-Bikes, Scooters & Wheels</Text>
                          <Text>Bikes</Text>
                          <Text>Electric Scooters</Text>
                          <Text>Electric Skateboards</Text>
                          <Text>Accessories</Text>

                          <Text as="b">Outdoor Generators</Text>
                          <Text>Portable Power Stations</Text>
                          <Text>Solar Panels</Text>

                          <Text as="b">Cycling</Text>
                          <Text>Bike Bags</Text>
                          <Text>Bike Tools</Text>
                          <Text>Bike Lights</Text>
                        </VStack>
                        <VStack style={{ display: "inline-block" }}>
                          <Text>Cycling Apparels</Text>
                          <Text as="b">Outdoor Sports Cameras</Text>
                          <Text as="b">Outdoor Recreation</Text>
                        </VStack>
                        <Image
                          w="300px"
                          src="https://img.gkbcdn.com/cim/category-1241-76VXkCjn._p1_.png"
                          alt="image"
                        ></Image>
                      </Flex>
                    </Box>
                  </Box>

                  {/* */}
                  <div className="third">
                    {" "}
                    <Text>Smart Home & Garden</Text>
                    <Box
                     
                      h="442px"
                      w="770px"
                      pos='absolute'
                      top='0' 
                      left='256px'
                      className="smartHome"
                    >
                      <Flex>
                        <VStack style={{ display: "inline-block" }}>
                          <Text as="b"> Smart Home</Text>
                          <Text> Robot Vacuum Cleaners</Text>
                          <Text>Cordless Vacuum Cleaners</Text>
                          <Text>Fitness</Text>
                          <Text>Smart Sockets & Switches</Text>
                          <Text>Smart Lights</Text>
                          <Text>Xiaomi Smart Gadgets</Text>
                          <Text>Air Purifier</Text>
                          <Text>Others</Text>
                        </VStack>
                        <VStack style={{ display: "inline-block" }}>
                          <Text as="b">Kitchen & Dining</Text>
                          <Text>Kitchen Appliances</Text>
                          <Text>Cookware</Text>
                          <Text>Bakeware</Text>
                          <Text>Tableware</Text>
                          <Text>Barware</Text>
                          <Text>Kitchen Tools & Gadgets</Text>
                          <Text>Others</Text>
                        </VStack>
                        <Image
                          w="400px"
                          h="400px"
                          src="https://img.gkbcdn.com/cim/category-174-6mn8zGTF._p1_.png"
                          alt="image"
                        ></Image>
                      </Flex>
                    </Box>
                  </div>
                  {/**/}
                  <div className="forth">
                    {" "}
                    <Text >Consumer Electronics</Text>
                    <Box
                     
                      h="442px"
                      w="770px"
                      pos='absolute'
                      top='0'left='256px'
                      className="consumerElectronics"
                    >
                      <Flex>
                        <VStack style={{ display: "inline-block" }}>
                          <Text as="b">3D Printers & Accessories</Text>
                          <Text>FDM 3D Printers</Text>
                          <Text>SLA 3D Printers</Text>
                          <Text>3D Printer Accessories</Text>

                          <Text as="b">Laser Engravers & Cutters</Text>
                          <Text>Desktop Laser Engravers</Text>
                          <Text>Accessories</Text>

                          <Text as="b">Bluetooth Speakers</Text>
                          <Text>Wireless & Bluetooth Speakers</Text>
                          <Text>Outdoor Speakers</Text>
                          <Text>Accessories</Text>
                        </VStack>
                        <VStack style={{ display: "inline-block" }}>
                          <Text as="b">Kitchen & Dining</Text>
                          <Text>Kitchen Appliances</Text>
                          <Text>Cookware</Text>
                          <Text>Bakeware</Text>
                          <Text>Tableware</Text>
                          <Text>Barware</Text>
                          <Text>Kitchen Tools & Gadgets</Text>
                          <Text>Others</Text>
                        </VStack>
                        <Image
                          w="400px"
                          h="400px"
                          src="https://img.gkbcdn.com/cim/category-177-6PuYwF6n._p1_.png"
                          alt="image"
                        ></Image>
                      </Flex>
                    </Box>
                  </div>
                  <div className="fifth">
                    {" "}
                    <Text >Generators & Portable Power</Text>
                    <Box
                     
                      h="442px"
                      w="550px"
                      pos='absolute'
                      top='0'left='256px'
                      className="generators"
                    >
                      <Flex>
                        <VStack style={{ display: "inline-block" }}>
                          <Text as="b">Portable Power Stations</Text>
                          <br />
                          <Text as="b"> Solar Panels</Text>
                          <br />
                          <Text as="b"> Power Kits</Text>
                        </VStack>
                        <Image
                          w="400px"
                          h="400px"
                          src="https://img.gkbcdn.com/cim/category-2231-73W5Ybg8._p1_.png"
                          alt="image"
                        ></Image>
                      </Flex>
                    </Box>
                  </div>

                  <div className="sixth">
                    {" "}
                    <Text>Computers, Tablets & Accessories</Text>
                    <Box
                     
                      h="442px"
                      w="800px"
                      pos='absolute'
                      top='0' left='256px'
                      className="computers"
                    >
                      <Flex>
                        <VStack style={{ display: "inline-block" }}>
                          <Text as="b">Laptops</Text>
                          <Text as="b"> Ultrabooks</Text>
                          <Text as="b">Gaming Laptops</Text>
                          <Text>Tablets</Text>
                          <Text>Android Tablets</Text>
                          <Text>Windows Tablets</Text>
                          <Text>Laptop Accessories</Text>
                          <Text>Computer Components</Text>
                          <Text>DIY PC</Text>
                          <Text>SSD & HDD & Enclosures</Text>
                          <Text>PC Power Supplies</Text>
                          <Text>Fan & Cooling</Text>
                        </VStack>
                        <VStack style={{ display: "inline-block" }}>
                          <Text as="b">Keyboard & Mouse </Text>
                          <Text>Wireless Keyboards </Text>
                          <Text>Wired Keyboards </Text>
                          <Text>Wireless Mouse </Text>
                          <Text>Wired Mouse </Text>
                          <Text>Keyboard and Mice Kit </Text>
                        </VStack>
                        <Image
                          w="400px"
                          h="400px"
                          src="https://img.gkbcdn.com/cim/category-971-74OV6zpx._p1_.png"
                          alt="image"
                        ></Image>
                      </Flex>
                    </Box>
                  </div>
                  <Box className="seventh">
                    {" "}
                    <Text>TV Boxes & Mini PCs</Text>
                    <Box
                     
                      h="442px"
                      w="550px"
                      pos='absolute'
                      top='0' left='256px'
                      className="TvBoxes"
                    >
                      <Flex>
                        <VStack style={{ display: "inline-block" }}>
                          <Text as="b"> Windows Mini PCs</Text>
                          <br />
                          <Text as="b"> Android TV Boxes</Text>
                          <br />
                          <Text as="b">MINI PC Accessories</Text>
                          <br />
                          <Text>Media Player</Text>
                          <br />
                          <Text>Set Top Box</Text>
                        </VStack>
                        <Image
                          w="400px"
                          h="400px"
                          src="https://img.gkbcdn.com/cim/category-505-72zNJKTL._p1_.png"
                          alt="image"
                        ></Image>
                      </Flex>
                    </Box>
                  </Box>

                  <div className="eighth">
                    {" "}
                    <Text>Toys & Hobbies</Text>
                    <Box
                    
                      h="442px"
                      w="800px"
                      pos='absolute'
                      top='0' left='256px'
                      className="Toys"
                    >
                      <Flex>
                        <VStack style={{ display: "inline-block" }}>
                          <Text as="b">RC Quadcopters</Text>
                          <Text>FPV Racing Drone</Text>
                          <Text>RC Airplanes</Text>
                          <Text>RC Helicopters</Text>

                          <Text as="b">RC Vehicles</Text>
                          <Text>RC Cars</Text>
                          <Text>RC Boats</Text>

                          <Text as="b">FPV System</Text>
                          <Text as="b">RC Parts</Text>
                          <Text>RC Boat Parts</Text>
                          <Text>RC Car Parts</Text>
                          <Text>RC Quadcopter Parts</Text>
                          <Text>Multi Rotor Parts</Text>
                        </VStack>
                        <VStack style={{ display: "inline-block" }}>
                          <Text as="b">RC Robot</Text>
                          <Text as="b">Building Sets & Blocks</Text>
                          <Text>Musical Instruments & Hobbies</Text>
                          <Text>Strings</Text>
                          <Text>Drums & Percussion</Text>
                          <Text>Other Musical Instruments</Text>
                          <Text>Other Hobbies</Text>

                          <Text as="b">Outdoor Play Equipment</Text>
                          <Text>Swing Sets & Playsets</Text>
                          <Text>Trampolines</Text>
                          <Text>Kids' Playhouses</Text>
                        </VStack>

                        <Image
                          w="400px"
                          h="400px"
                          src="https://img.gkbcdn.com/cim/category-742-6ETJw428._p1_.png"
                          alt="image"
                        ></Image>
                      </Flex>
                    </Box>
                  </div>
                  <div className="ninth">
                    {" "}
                    <Text>Phones & Accessories</Text>
                    <Box
                    
                      h="442px"
                      w="600px"
                      pos='absolute'
                      top='0' left='256px'
                      className="phones"
                    >
                      <Flex>
                        <VStack style={{ display: "inline-block" }}>
                          <Text as="b"> Cell Phones</Text>
                          <br />
                          <Text>5G Smartphones</Text>
                          <br />
                          <Text as="b">Phone Accessories</Text>
                          <br />
                          <Text>Screen Protectors</Text>
                          <br />
                          <Text>Cases & Covers</Text>
                          <Text as="b">Apple Accessories</Text>
                        </VStack>
                        <Image
                          w="400px"
                          h="400px"
                          src="https://img.gkbcdn.com/cim/category-178-6uXQ3kVf._p1_.png"
                          alt="image"
                        ></Image>
                      </Flex>
                    </Box>
                  </div>
                  <div className="tenth">
                    {" "}
                    <Text>Automobiles & Motorcycles</Text>
                    <Box
                    
                      h="442px"
                      w="600px"
                      pos='absolute'
                      top='0' left='256px'
                      className="Automobiles"
                    >
                      <Flex>
                        <VStack style={{ display: "inline-block" }}>
                          <Text as="b"> Electric Vehicle Chargers</Text>
                          <Text as="b">Car Alarm & Security</Text>
                          <Text as="b">Car Lights</Text>

                          <Text as="b">Car Chargers</Text>
                          <Text as="b">Car Decorations</Text>
                          <Text as="b">Car Repair & Maintenance</Text>
                          <Text as="b">Car Parts & Gadgets</Text>
                          <Text>Garage Equipment & Tools</Text>
                          <Text>Storage & Cargo</Text>
                        </VStack>
                        <Image
                          w="400px"
                          h="400px"
                          src="https://img.gkbcdn.com/cim/category-439-6mGr8xFV._p1_.png"
                          alt="image"
                        ></Image>
                      </Flex>
                    </Box>
                  </div>
                  <div className="eleventh">
                    {" "}
                    <Text>Security Systems</Text>
                    <Box
                   
                      h="442px"
                      w="600px"
                      pos='absolute'
                      top='0'  left='256px'
                      className="security"
                    >
                      <Flex>
                        <VStack style={{ display: "inline-block" }}>
                          <Text as="b"> Security Cameras</Text>
                          <Text>IP Cameras</Text>
                          <Text as="b">Surveillance DVR Systems</Text>

                          <Text>NVR Kits</Text>
                          <Text>Car Decorations</Text>
                          <Text>Access Controller & Key</Text>
                          <Text>Video Door Phones</Text>
                          <Text as="b">Security System Accessories</Text>
                        </VStack>
                        <Image
                          w="400px"
                          h="400px"
                          src="https://img.gkbcdn.com/cim/category-215-6HdYHAm8._p1_.png"
                          alt="image"
                        ></Image>
                      </Flex>
                    </Box>
                  </div>
                  <div className="twelth">
                    {" "}
                    <Text>Wearable Devices</Text>
                    <Box
                   
                      h="442px"
                      w="500px"
                      pos='absolute'
                      top='0' left='256px'
                      className="wearableDevices"
                    >
                      <Flex>
                        <VStack style={{ display: "inline-block" }}>
                          <Text as="b"> Smart Watches</Text>
                          <Text> Smart Bracelets</Text>
                          <Text as="b"> Wearables Accessories</Text>
                        </VStack>
                        <Image
                          w="400px"
                          h="400px"
                          src="https://img.gkbcdn.com/cim/category-1549-6PNrOAEo._p1_.png"
                          alt="image"
                        ></Image>
                      </Flex>
                    </Box>
                  </div>
                </ul>
              </Box>
            </Box>
          
            <Box>
            {links.map((link) => (
        <NavLink
          style={{padding:'24px'}}
          className={({ isActive }) => {
            return isActive ? activeStyle : defaultStyle;
          }}
          key={link.path}
          to={link.path}
          end
        >
          {link.title}
        </NavLink>
      ))}
            </Box>
            <Link href='/categories'>
            <Image
              src="https://img.gkbcdn.com/s3/bn/2209/174x35b-631b1e9b2b40c9215c578605.gif"
              alt="offer"
            ></Image></Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Navbar;

