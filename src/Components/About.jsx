import React from "react";

import Laptop from '../assets/laptop.json';
import Lottie from "react-lottie";

const About = () =>{
  
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Laptop,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        
        <>

        <div className="max-w-[900px] h-auto m-auto px-10 text-center relative ">
              
           
        <Lottie 
	    options={defaultOptions}
      />
      <div> 
              <h1 className="absolute  top-[30%]  left-[40%] right-[50%]  md:text-5xl sm:4xl text-2xl font-extrabold text-[#CCCCCC]">
                  Welcome  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to TechTrek
              </h1> 
       </div>
        </div>
        <div className=' mx-10 mb-10  rounded-lg text-center justify-center'>
  <h1 className='text-center text-3xl font-bold text-[#00df9A]'>What Do We Provide</h1>
  <p className='text-xl text-center text-yellow-50 p-5'>At TechTrek, we are passionate about enhancing your digital journey and 
    revolutionizing the way you interact with technology. We are your one-stop e-commerce destination for the latest and most innovative computer accessories on the market. From the trendsetters to the tech enthusiasts,
     our handpicked collection caters to everyone who seeks to elevate their computing experience</p>
    
</div>
<div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 lg:gap-10 grid-flow-row mx-10 pb-20 ">
<div className=' mx-10 mb-10  rounded-lg text-center justify-center col-span-2'>
  <h1 className='text-center text-3xl font-bold text-[#00df9A]'>Our Vision</h1>
  <p className='text-xl text-center sm:text-left text-yellow-50 p-5'>We envision a world where technology empowers  and enriches lives.
   Our mission is to provide our customers with a carefully curated selection of top-of-the-line computer accessories that not only enhance productivity
   and efficiency but also add a touch of personal flair to your computing setup</p>
    
</div>
<div className=' mx-10 mb-10  rounded-lg text-center justify-center col-span-2'>
  <h1 className='text-center text-3xl font-bold text-[#00df9A]'>What Sets Us Apart</h1>
  <p className='text-xl text-center text-yellow-50 p-5 sm:text-left'>We envision a world where technology empowers and enriches lives. Our mission is to
   provide our customers with a carefully curated selection of top-of-the-line computer accessories that not only enhance productivity
    and efficiency but also add a touch of personal flair to your computing setup.
</p>
    
</div>
</div>

        </>
    );

 
}
export default About;