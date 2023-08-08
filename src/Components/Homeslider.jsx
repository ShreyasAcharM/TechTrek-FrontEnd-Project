import React, {  useEffect, useState } from "react";
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
import "../App.css";
const Homeslider=()=>{
    const slides=[
        {
          url:"https://basic-tutorials.de/wp-content/uploads/2023/04/BeastX40_CoolingKit_Komposing_final.tif_Pressebild.jpg"
        },
        {
          url:"https://cdn.wallpapersafari.com/98/79/kCUpl3.jpg"
        },
        {
          url:"https://dlcdnwebimgs.asus.com/files/media/32AC71C1-A967-4B4A-A81C-23AB82184698/v3/images/large/1x/pic_laptop_flow_x16.jpg"
        },
        {
          url:"https://staticg.sportskeeda.com/editor/2023/03/252b5-16796301114555-1920.jpg"
        },

    ];
    const [currentIndex,setindex]=useState(0);
   
    const prevSlide=()=>{
           const isFirstSlide=currentIndex===0;
           const newIndex= isFirstSlide ? slides.length-1:currentIndex-1;
           setindex(newIndex);
    };
  
    const nextSlide=()=>{
        const isLastSlide=currentIndex===slides.length-1;
        const newIndex=isLastSlide?0:currentIndex+1;
        setindex(newIndex);
        
    };
    const goToSlide=(slideIndex)=>{
      setindex(slideIndex);
    }
    
    return(
        <div className="max-w-[800px] h-[610px]  w-full m-auto pb-16  md:relative group">
           <div style={{backgroundImage:`url(${slides[currentIndex].url})`}}
           className="w-full h-full rounded-2xl bg-center bg-cover duration-500 gradient-border">
           </div>
           <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide}size={30}/>
           </div>
           <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
           <BsChevronCompactRight onClick={nextSlide}size={30}/>
           </div>
           <div className="flex top-4 justify-center py-2">
             {slides.map((slide,slideIndex)=>
             <div
             key={slideIndex} 
             onClick={()=>goToSlide(slideIndex)}
               className="text-2xl cursor-pointer text-white">
              <RxDotFilled/>
              </div>)}
           </div>
        </div>

    );
}
export default Homeslider;