import React from 'react'
import "../App.css";
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import { product1, product2, responsive } from './data';
import { NavLink } from 'react-router-dom';


function Grids() {
  const product11 =  product1.map((item) => <Product name={item.name} url={item.imageurl} price={item.price}/>);
  const product12 =  product2.map((item) => <Product name={item.name} url={item.imageurl} price={item.price}/>);
  return (<>
    <div className='max-w-[1200px]  mx-auto justify-center text-center'>
      <h1 className='md:text-5xl text-4xl  font-bold md:pl-4 pl-2 text-white pb-10 justify-center'>Products</h1>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 lg:gap-10 grid-flow-row mx-10 pb-20">
    <div className="rounded-lg min-h-[70px] gradient-border lg:col-span-2 ">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
   <div className="h-96 w-full">
     <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/images/gridmonitor.avif" alt="" />
   </div>
   <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
     <h1 className="font-dmserif text-3xl font-bold text-white">Monitor</h1>
     <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">High-quality computer monitor for your setup, offering crisp visuals and immersive viewing experience. Multiple sizes and resolutions available to suit various needs.</p>
     <NavLink go to="/services"> <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button></NavLink>
   </div>

</div>
      </div>
      <div className="rounded-lg min-h-[70px] gradient-border lg:col-span-2 ">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
   <div className="h-96 w-full">
     <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/public/images/gridkeyboard.avif
     " alt="" />
   </div>
   <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
     <h1 className="font-dmserif text-3xl font-bold text-white">Keyboard</h1>
     <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">High-performance keyboard featuring a comfortable design and responsive keys, enhancing typing experience and productivity. Various styles and customizable features cater to different user preferences.</p>
    <NavLink go to="/services"> <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button></NavLink>
   </div>

</div>
      </div>
      
      <div className="rounded-lg min-h-[70px] md:h-auto gradient-border">
 <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
   <div className="h-96 w-full">
     <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="public/images/gridmouse.avif" alt="" />
   </div>
   <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
     <h1 className="font-dmserif text-3xl font-bold text-white">Mouse</h1>
     <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> Precise, ergonomic, and wireless for enhanced navigation.</p>
     <NavLink go to="/services"> <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button></NavLink>
   </div>

</div></div>
      <div className="rounded-lg min-h-[70px] md:h-auto gradient-border">
 
  
 <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
   <div className="h-96 w-full">
     <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="public/images/gridheadphones.avif" alt="" />
   </div>
   <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
     <h1 className="font-dmserif text-3xl font-bold text-white">Speaker</h1>
     <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> Rich, immersive sound with versatile connectivity options.</p>
     <NavLink go to="/services"> <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button></NavLink>
   </div>

</div></div>
      
      <div className="rounded-lg min-h-[70px] gradient-border lg:col-span-2 ">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
   <div className="h-96 w-full">
     <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="public/images/gridgpu.avif" alt="" />
   </div>
   <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
     <h1 className="font-dmserif text-3xl font-bold text-white">GPU</h1>
     <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Cutting-edge GPU/Graphics card delivering exceptional graphics performance for gaming, rendering, and AI applications. Equipped with high VRAM capacity and advanced cooling systems for optimal performance and longevity.</p>
     <NavLink go to="/services"> <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button></NavLink>
   </div>

</div>
      </div>
      
    </div>
    </div>
    <div className='mx-10'>
    <h1 className=' text-4xl  font-bold md:pl-4 pl-2 text-white pb-10 justify-center'>Latest Products</h1>
    <div className="bg-black rounded-xl shadow-xl p-10 mb-5 md:mb-10 gradient-border"><Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1500} >{product11}</Carousel></div>
    <h1 className=' text-4xl  font-bold md:pl-4 pl-2 text-white pb-10 justify-center'>Popular Products</h1>
    <div className="bg-black rounded-xl shadow-xl p-10 mb-5 md:mb-10 gradient-border"><Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1500} >{product12}</Carousel></div>
</div>
<div className=' mx-10 mb-10 gradient-border rounded-lg text-center justify-center'>
  <h1 className='text-center text-3xl font-bold text-white'>What Do We Provide</h1>
  <p className='text-xl text-center text-yellow-50 p-5'>At TechTrek, we are passionate about enhancing your digital journey and 
    revolutionizing the way you interact with technology. We are your one-stop e-commerce destination for the latest and most innovative computer accessories on the market. From the trendsetters to the tech enthusiasts,
     our handpicked collection caters to everyone who seeks to elevate their computing experience</p>
    <NavLink to="/about"> <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-2xl capitalize text-white shadow shadow-white/60 p-10 mb-10">See More</button></NavLink>

</div>
</>
    
  );
}

export default Grids;