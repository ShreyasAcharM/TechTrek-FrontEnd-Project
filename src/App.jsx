import React from "react";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import About from "./Components/About";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () =>{
  return (
    
  <BrowserRouter>
    
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>

  );
}
export default App;