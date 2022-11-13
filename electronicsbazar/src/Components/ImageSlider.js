
import {useState,useEffect} from "react";
const ImageSlider=({slides})=>{
    const [currentIndex,setCurrentIndex]=useState(0);
    const left={
        left:'80px',
        width:'50px',
        height:'50px',
        display:'flex',
        justifyContent:'center',
        alignItem:'center',
        top:'12%',
        position:'absolute' ,
        transform:'translate(0,-50%)',
        zIndex:'1',
        cursor:'pointer',
        color:'black',
        fontSize:'35px',
        background:'white',
        padding:'6px',
        opacity:'65%',
        borderRadius:'50%'
      }
      const right={
        width:'50px',
        height:'50px',
        display:'flex',
        justifyContent:'center',
        alignItem:'center',
        left:'640px',
        top:'12%',
        position:'absolute' ,
        transform:'translate(0,-50%)',
        zIndex:'1',
        cursor:'pointer',
        color:'black',
        fontSize:'35px',
        background:'white',
        padding:'6px',
        opacity:'65%',
        borderRadius:'50%'
      }
      const goToPrev=()=>{
        const isFirstSlide = currentIndex===0;
        const newIndex= isFirstSlide ? slides.length-1 : currentIndex-1 ;
        setCurrentIndex(newIndex);
      }
      const goToNext=()=>{
        const isLastSlide = currentIndex===slides.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex+1 ;
        setCurrentIndex(newIndex);
      }
     
      const nextSlide=(slideIndex)=>{
      
        (setCurrentIndex(slideIndex));
       
      }
      useEffect(()=>{
        setInterval(()=>{
          
            setCurrentIndex(currentIndex=>currentIndex >= slides.length-1 ? 0 : currentIndex+1 );
            },10000);
      
      },[])
    return(
     <div >
        
         <div style={left} onClick={goToPrev}>{"<"}</div>
         <div style={right} onClick={goToNext}>{">"}</div>

        <div style={{backgroundImage:`url(${slides[currentIndex].url})`,width:'100%',height:'650px',marginTop:'10px'}}></div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'-60px'}}>{slides.map((slide,slideIndex)=>(
            <div key={slideIndex} 
                 onClick={(()=>nextSlide(slideIndex))} 
                 style={{width:'10px',height:'10px',borderRadius:'50%',backgroundColor:'white',border:'1px solid blue',padding:'5px',margin:'5px'}}></div>
        ))}</div>
    </div>
    )
}

export default ImageSlider;