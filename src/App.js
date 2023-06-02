import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Experience from "./Components/Experience/Experience";
import Service from "./Components/Service/Service";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import './App.css';
const App = () => {
  return (
    <div className='header'>
      

      <Navbar/>
      <Intro/>
      <Service/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
     
    </div>
  )
}

export default App