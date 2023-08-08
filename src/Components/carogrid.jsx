import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';
import { productData, speaker, responsive, gpu, monitor, keyboard } from './data';
import "../App.css";

function Carogrid() {
    const product1 =  monitor.map((item) => <Product name={item.name} url={item.imageurl} price={item.price}/>); 
    const product =  productData.map((item) => <Product name={item.name} url={item.imageurl} price={item.price}/>);
    const product2 =  speaker.map((item) => <Product name={item.name} url={item.imageurl} price={item.price}/>);
    const product5 =  gpu.map((item) => <Product name={item.name} url={item.imageurl} price={item.price}/>);
    const product4 =  keyboard.map((item) => <Product name={item.name} url={item.imageurl} price={item.price}/>);
  return (
    <div className='mx-10 mt-20 text-center md:text-left'>
    <h1 className=' text-4xl  font-bold md:pl-4 pl-2 text-white pb-10 justify-center'>Monitor</h1>
    <div className="bg-black rounded-xl shadow-xl p-10 mb-5 md:mb-10 gradient-border"><Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1500} >{product1}</Carousel></div>
    <h1 className=' text-4xl  font-bold md:pl-4 pl-2 text-white pb-10 justify-center'>Speaker</h1>
    <div className="bg-black rounded-xl shadow-xl p-10 mb-5 md:mb-10 gradient-border"><Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1500} >{product2}</Carousel></div>
    <h1 className=' text-4xl  font-bold md:pl-4 pl-2 text-white pb-10 justify-center'>Mouse</h1>
    <div className="bg-black rounded-xl shadow-xl p-10 mb-5 md:mb-10 gradient-border"><Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1500} >{product}</Carousel></div>
    <h1 className=' text-4xl  font-bold md:pl-4 pl-2 text-white pb-10 justify-center'>KeyBoard</h1>
    <div className="bg-black rounded-xl shadow-xl p-10 mb-5 md:mb-10 gradient-border"><Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1500} >{product4}</Carousel></div>
    <h1 className=' text-4xl  font-bold md:pl-4 pl-2 text-white pb-10 justify-center'>GPU</h1>
    <div className="bg-black rounded-xl shadow-xl p-10 mb-5 md:mb-10 gradient-border"><Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1500} >{product5}</Carousel></div>
    </div>
  )
}

export default Carogrid;






