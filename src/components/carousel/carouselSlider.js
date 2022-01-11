import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const CarouselSlider = ({ social, date, profile, title, description, img }) => {
  return (
    <div className="owl-carousel-container">
      <div className="owl-stage-outer">
        <div className="owl-stage">
          <div className="owl-item">
            <a className="carousel-item" href="#">
              <div className="carousel-img">
                <img src={img} />
              </div>
              <div className="carousel-content">
                <b>
                  {social}
                  <span>{date}</span>
                </b>
                <h5>{title}</h5>
                <p>{description} </p>
                <div className="profile-info">
                  <div className="profile-img">
                    <img src={img} />
                  </div>
                  <div className="profile-name">{profile}</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlider;