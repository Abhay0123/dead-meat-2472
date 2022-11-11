import axios from 'axios';
import {Box,Text} from '@chakra-ui/react';
import {useState,useEffect} from 'react';
const Categories=()=>{
    const [data,setData]=useState([]);
    const getData=()=>{
        axios.get('http://localhost:8000/Categories')
        .then((res)=>{
            setData(res.data)
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
           {data.map((el)=>{
        <Text>{el.price}</Text>
           })}
    </Box>
    )
}
//export default Categories;



