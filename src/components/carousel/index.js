import React from "react";
import carousel from "../carousel.css";
import CarouselSlider from "./carouselSlider";
import Fade from "react-reveal/Fade";
import { carouselData } from "../data";
import { Carousel } from "react-responsive-carousel";

const Index = () => {
  return (
    <div className="carousel-section">
      <Fade bottom>
        <h2>Stellar work by our students</h2>
      </Fade>
      <Carousel>
        {carouselData.map((data) => (
          <CarouselSlider
            img={data.img}
            social={data.social}
            date={data.date}
            profile={data.profile}
            title={data.title}
            description={data.description}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Index;