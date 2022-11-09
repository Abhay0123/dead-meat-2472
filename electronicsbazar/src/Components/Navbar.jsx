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
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BsCart } from "react-icons/bs";

import { HiOutlineUser } from "react-icons/hi";

const Navbar = () => {
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
              <a href="#">Save BIG with our app! </a>
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
              <a href="#">Language </a>
              <div className="deepmenu2">
                <ul style={{ display: "inline-block" }} className="menu">
                  <div>
                    <a href="#">English</a>
                  </div>
                  <div>
                    <a href="#">Italiano</a>
                  </div>
                  <div>
                    <a href="#">Deutsch</a>
                  </div>
                  <div>
                    <a href="#">Español</a>
                  </div>
                  <div>
                    <a href="#">Français</a>
                  </div>
                  <div>
                    <a href="#">Português</a>
                  </div>
                  <div>
                    <a href="#">Slovenčina</a>
                  </div>
                  <div>
                    <a href="#">Magyar</a>
                  </div>
                  <div>
                    <a href="#">Slovenščina</a>
                  </div>
                  <div>
                    <a href="#">Lietuvių kalba</a>
                  </div>
                  <div>
                    <a href="#">Svenska</a>
                  </div>
                  <div>
                    <a href="#">Ελληνικά</a>
                  </div>
                  <div>
                    <a href="#">Dansk</a>
                  </div>
                  <div>
                    <a href="#">עברית</a>
                  </div>
                  <div>
                    <a href="#">Hrvatski jezik</a>
                  </div>
                  <div>
                    <a href="#">Polskie</a>
                  </div>
                  <div>
                    <a href="#">Limba română</a>
                  </div>
                  <div>
                    <a href="#">Čeština</a>
                  </div>
                  <div>
                    <a href="#">Japanese </a>
                  </div>
                </ul>
              </div>
            </Box>
          </Box>

          <Box>
            <Box className="active3">
              <a href="#">Support Center</a>
              <div className="deepmenu3">
                <ul style={{ display: "inline-block" }} className="menu">
                  <div>
                    {" "}
                    <a href="#">Live Chat</a>
                  </div>
                  <div>
                    {" "}
                    <a href="#">Ticket</a>
                  </div>
                  <div>
                    {" "}
                    <a href="#">Help Center</a>
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
            <Box w="230px" p="10px">
              <Image
                src="https://content1.geekbuying.com/V1.4/en/images/indexV7/Geekbuying.png"
                alt="logo"
              ></Image>
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
                    bg="white"
                  />
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
        <Box style={{ color: "white" }} ml="-240px" mt="12px">
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box className="active4">
              <Box bg="blue.300" borderRadius="10px 10px 0px 0px" p="10px">
                <a href="#">
                  <HamburgerIcon /> Categories
                </a>
              </Box>
              <Box className="deepmenu4">
                <ul style={{ display: "inline-block" }} className="menu">
                  <Box className="first">
                    <a href="#" className="first">
                      Local Warehouses
                    </a>
                    <Box
                      ml="250px"
                      h="442px"
                      w="770px"
                      mt="-35px"
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
                    <a className="second" href="#">
                      Sports & Outdoors
                    </a>
                    <Box
                      ml="250px"
                      h="442px"
                      w="770px"
                      mt="-68px"
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
                    <a href="#">Smart Home & Garden</a>
                    <Box
                      ml="250px"
                      h="442px"
                      w="770px"
                      mt="-108px"
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
                    <a href="#">Consumer Electronics</a>
                    <Box
                      ml="250px"
                      h="442px"
                      w="770px"
                      mt="-142px"
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
                    <a href="#">Generators & Portable Power</a>
                    <Box
                      ml="250px"
                      h="442px"
                      w="550px"
                      mt="-178px"
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
                    <a href="#">Computers, Tablets & Accessories</a>
                    <Box
                      ml="250px"
                      h="442px"
                      w="800px"
                      mt="-215px"
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
                    <a href="#">TV Boxes & Mini PCs</a>
                    <Box
                      ml="250px"
                      h="442px"
                      w="550px"
                      mt="-250px"
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
                    <a href="#">Toys & Hobbies</a>
                    <Box
                      ml="250px"
                      h="442px"
                      w="800px"
                      mt="-285px"
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
                    <a href="#">Phones & Accessories</a>
                    <Box
                      ml="250px"
                      h="442px"
                      w="600px"
                      mt="-322px"
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
                    <a href="#">Automobiles & Motorcycles</a>
                    <Box
                      ml="250px"
                      h="442px"
                      w="600px"
                      mt="-358px"
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
                    <a href="#">Security Systems</a>
                    <Box
                      ml="250px"
                      h="442px"
                      w="600px"
                      mt="-394px"
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
                    <a href="#">Wearable Devices</a>
                    <Box
                      ml="250px"
                      h="442px"
                      w="500px"
                      mt="-430px"
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
            {/* right */}

            <Button variant="ghost"> New</Button>
            <Button variant="ghost">Bestselling</Button>
            <Button variant="ghost">Brand</Button>
            <Button variant="ghost">Clearance</Button>
            <Button variant="ghost">Deals</Button>
            <Button variant="ghost">Coupon</Button>
            <Button variant="ghost">App Only</Button>
            <Image
              src="https://img.gkbcdn.com/s3/bn/2209/174x35b-631b1e9b2b40c9215c578605.gif"
              alt="offer"
            ></Image>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Navbar;


