import React from "react";
import Fade from "react-reveal/Fade";
import WorkshopTemplete from "./workshopTemplete";

const WorkshopType = () => {
  const workshopsType = [
    {
      img: "https://growthschool.io/wp-content/uploads/2021/06/check.svg",
      profession: "Entrepreneurs",
    },
    {
      img: "https://growthschool.io/wp-content/uploads/2021/06/check.svg",
      profession: "Professionals",
    },
    {
      img: "https://growthschool.io/wp-content/uploads/2021/06/check.svg",
      profession: "Freelancers",
    },
    {
      img: "https://growthschool.io/wp-content/uploads/2021/06/check.svg",
      profession: "Coaches and Trainers",
    },
    {
      img: "https://growthschool.io/wp-content/uploads/2021/06/check.svg",
      profession: "Coaches and Trainers",
    },
  ];
  return (
    <div className="who-workshop-container">
      <Fade bottom>
        <h2>Who is this workshop for?</h2>
      </Fade>
      <ul>
        {workshopsType.map((data) => (
          <li className="workshop-types">
            <span>
              <img src={data.img} />
            </span>
            <b>{data.profession}</b>
          </li>
        ))}
      </ul>
      <p style={{ textAlign: "center", color: "#fff" }}>
        OR Anyone who is interested to learn about LinkedIn.
      </p>
      <div className="workshop-link-container" style={{ marginTop: "60px" }}>
        <a href="#" className="reserved-btn">
          Reserve Seat for ₹499
        </a>
      </div>
      <img
        src="https://growthschool.io/wp-content/themes/growth-school/img/patten.svg"
        className="who-workshop-patten1"
      />
      <img
        src="https://growthschool.io/wp-content/themes/growth-school/img/patten.svg"
        className="who-workshop-patten2"
      />
    </div>
  );
};

export default WorkshopType;