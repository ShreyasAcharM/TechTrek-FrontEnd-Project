import React from "react";
import Typed from 'react-typed';
import Homeslider from "./Homeslider";
import "../App.css";



const Hero = () =>{
  
    
    return (<>
    
        <section className=" text-center justify-center grid gap-8   mt-0 w-full   lg:grid-cols-3 md:items-center md:text-left ">
            <div className="p-8 border-gradient lg:col-span-2 pb-4 border-x-inherit">
                <Homeslider/>
            </div>
            <div className="text-white mt-100 sm:mx-5" >
                <h1 className="mb-2 text-4xl font-medium text-[#00df9a]">Brands Available</h1>
                <Typed 
        className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
        strings={['NVIDIA','RYZEN','INTEL','ALIENWARE','RED-GEAR','HP','DELL','ZEBRONICS']} 
        typeSpeed={120}
        backSpeed={130} 
         loop
        />
        <p className="md:text-2xl text:xl font-bold text-gray-500 pb-5">Welcome to TechTrek: Your Ultimate Destination for Cutting-Edge Computer Accessories!

</p>
            </div>

        </section>

    </>);

 
}
export default Hero;