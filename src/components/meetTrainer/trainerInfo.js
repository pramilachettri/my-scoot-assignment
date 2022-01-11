import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';

const TrainerInfo = () => {
    const urls = [
        { imgUrl: "https://growthschool.io/wp-content/uploads/2021/07/LI-4.png" },
        { imgUrl: "https://growthschool.io/wp-content/uploads/2021/07/LI-3.png" },
        { imgUrl: "https://growthschool.io/wp-content/uploads/2021/07/LI-2.png" },
        { imgUrl: "https://growthschool.io/wp-content/uploads/2021/07/LI-1.png" },
        { imgUrl: "https://growthschool.io/wp-content/uploads/2021/07/CM-1.png" },
        { imgUrl: "https://growthschool.io/wp-content/uploads/2021/07/CW-5.png" },
    ]
    return (
        <div className="trainer-container">
            <div className="trainer-content">
                <Fade bottom>
                    <h2>Meet Your Trainer</h2>
                </Fade>
                <div className="trainer-inner-main-content">
                    <div className="trainer-inner-content">
                        <div className="trainer-img-container">
                            <div className="trainer-img">
                                <img src="https://growthschool.io/wp-content/uploads/2021/09/Vaibhav.png" />
                                <span className="play-icon"> <BsFillPlayFill /></span>
                            </div>
                            <h5><b>Vaibhav Sisinty</b> <br /> LinkedIn Growth Expert, Growth Hacker, Ex- Uber & Klook </h5>
                        </div>
                        <div className="trainer-info">
                            <p>Hi, I am Vaibhav Sisinty, I turn startups into profitable businesses, growth consult for brands and help them use the internet to increase profitability and their overall bottom lines.</p>
                            <p>In 2012 (at age 19) I moved from running Discovery Android to founding an award winning digital media company, CrazyHeads. Within 3 years, CrazyHead helped 100+ clients over the world grow their businesses using internet.</p>
                            <p>After working at Uber ( India and Latin America ) for 4.5 years, I joined Klook to lead marketing for India and the Middle East where I scaled the business to over $27M in a year.</p>
                            <h6>Featured In</h6>
                            <ul>
                                {urls.map(url => (
                                    <li><img src={url.imgUrl} style={{ width: "100%" }} /></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerInfo;
