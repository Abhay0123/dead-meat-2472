import {Box,Text, Image,Link,Stack} from '@chakra-ui/react';
import { FaFacebookSquare ,FaTelegramPlane,FaTiktok} from 'react-icons/fa';
import { ImInstagram, ImTwitter} from 'react-icons/im';
import { GrYoutube,GrMail } from 'react-icons/gr';
import { HiTicket } from 'react-icons/hi';

import {TfiHeadphoneAlt} from 'react-icons/tfi';


import'./Style.Footer.css';
const Footer=()=>{
    return (
        <Box bg=' #f1f6fd'>
 <Box id="footer">
      <div className="footerFirstPart">
        <Text>Why buy from geekbuying? <span className="footerPlus">+</span></Text>
      </div>
      <div className="footerSecondPart">
        <input placeholder="Enter eamil to get a 5% off coupon" type="text" />
        <div><Text>Subscribe</Text></div>
      </div>
      <Box className="footerThirdPart">
        <Box className="footerHelp"  style={{ display: "inline-block",textAlign:'left'}}>
          <Text as='b'>Help</Text>
          <Text>Order status</Text>
          <Text>About us</Text>
          <Text>Contact us</Text>
          <Text>Warranty</Text>
          <Text>FAQs</Text>
          <Text>Sitemap</Text>
          
        </Box>
        <Box className="footerSupport"  style={{ display: "inline-block",textAlign:'left'}}>
          <Text as='b'>Support</Text>
          <Text>Payment information</Text>
          <Text>Shipping guide</Text>
          <Text>Wholesale</Text>
          <Text>Drop shipping</Text>
          <Text>Blog</Text>
          <Text>Affilates</Text>
        </Box>
        <Box className="footerPolicise"  style={{ display: "inline-block",textAlign:'left'}}>
          <Text as='b'>Policies</Text>
          <Text>Terms & condition</Text>
          <Text>Return policy</Text>
          <Text>Privacy</Text>
          <Text>Declartion</Text>
          <Text>Custom</Text>
        </Box>
        <Box className="footerDownloadTheApp">
          <Text ml='-180px' fontSize='large' fontWeight='400'>Download The App</Text>
          <Box className="footerDownloadTheAppImg">
            <Box className="footerDownloadTheAppImgSubOne">
              <img
                src="https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png"
                alt=""
              />
            </Box>
            <Box className="footerDownloadTheAppImgSubTwo">
              <img
                src="https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg"
                alt=""
              />
              <img
                src="https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg"
                alt=""
              />
              <img
                src="https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg"
                alt=""
              />
            </Box>
          </Box>
          <Box >
            <Text textAlign='left' fontSize='large' fontWeight='500'>Connect with us</Text>
            <Box className='connectWithUs' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
             <Link href='#'><FaFacebookSquare color='blue'/></Link>
            
             <Link href='#'><GrYoutube color='blue'/></Link>
            
             <Link href='#'>< FaTelegramPlane  color='blue'/></Link>
            
             <Link href='#'><  ImInstagram  color='blue'/></Link>
            
             <Link href='#'><  ImTwitter color='blue'/></Link>
            
             <Link href='#'><  FaTiktok color='blue'/></Link>

             
            </Box>
          </Box>
        </Box>
        <Box className="footerService_payment">
          <Box className="footerService_paymentSubDivFirst">
             <GrMail color='blue'/>
            <Text>Service_payment@geekbuying.com</Text>
          </Box>
          <Box className="footerService_paymentSubDivSecond">
             <HiTicket color='blue'/>
            <Text>Ticket</Text>
          </Box>
          <Box className="footerService_paymentSubDivThird">
          <TfiHeadphoneAlt color='blue'/>
            <Text>Live Chat</Text>
          </Box>
        </Box>
      </Box>
      <Text textAlign='left' fontSize='large' fontWeight='500'  ml='50px'>Popular Searches </Text>
          <Box className="footerFourthPart">
          
               <Box className="footerPopularSearchesAllDivs">
            
          <div><Text>ENGWE</Text></div>
          <div><Text> MINISFORUM</Text></div>
          <div><Text> Geekbuying Coupon</Text></div>
          <div><Text> Roborock</Text></div>
          <div><Text>powkiddy</Text></div>
          <div><Text>Miyoo</Text></div>
          <div><Text>Mini sculpfun</Text></div>
          <div><Text> laserpecker </Text></div>
          <div><Text>Wltoys </Text></div>
          <div><Text>mini laptop</Text></div>
        </Box>
      </Box>
      
      <Box className="footerFithPart" mb='20px'>
         <Image src='https://content1.geekbuying.com/V1.4/en/images/indexV7/foot_icon.png' alt=''></Image>
            </Box>
     
      <Box className="footerSeventhPart" > 
         <Box></Box>
        <Text >We use cookies to ensure that we give you the best experience on our website. 
            By continuing to browse the site, you agree to our use of <Link href='#' color='blue' ml='-55px'>Cookies.</Link>
            <Stack bg=' #0066ff' width='150px' padding='2px' borderRadius='10px' color='white'><Link>I agree</Link></Stack> </Text> 
      </Box>
    </Box>
          
            
        </Box>
    )    
}
 export default Footer;






























