import React from "react";
import { Carousel } from "react-bootstrap";
import bannerOne from "../../assets/Arafat/okay3.jpg"
import bannerTwo from "../../assets/Arafat/okay2.jpg"
import bannerThree from "../../assets/Arafat/okay.jpg"
import ExtraPart from "../ExtraPart/ExtraPart";

import Services from "./Services";
const Home = () => {
  return (
    <div >
      <Carousel  className="">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={bannerOne}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Wedding Event</h3>
            <p>A holy event</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={bannerTwo}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Formal Photoshoot</h3>
            <p>Formal Photoshoot for better confidence</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerThree}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Seminar Event</h3>
            <p>
              Good response for seminars
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className=" container mt-5">
      <ExtraPart></ExtraPart>
      </div>
      <div>
        <Services></Services>
      </div>
      
     
    </div>
  );
};

export default Home;
