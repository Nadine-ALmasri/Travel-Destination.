import Footer from "../footer/Footer";
import Header from "../header/Header";
import Tours from "../tours/Tours";//countainer
import './Home.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,

 } from "react-router-dom";
 import Tour from "../tours/tour/Tour";//details
import TourDetails from "../TourDetails/TourDetails";
export default Home;









function Home(props) {
  return (
    <>
   
 <Tours data={props.data} />

     
  
    






<Footer/>

    </>
  );
}