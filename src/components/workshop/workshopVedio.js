import React from 'react'
import WorkShopVedioCard from './workShopVedioCard';
import { BsFillPlayFill } from 'react-icons/bs';
import { workshopBannerImgUrls } from '../data';
import { workshopdata } from './workshopData';
import Fade from 'react-reveal/Fade';

const WorkshopVedio = () => {
    return (
        <div class="workshop-vedio-section">
            <div className="workshop-vedio-inner-contains">
                <div className="workshop-vedio-inner-lft">
                    <WorkShopVedioCard
                        src="https://growthschool.io/wp-content/uploads/2021/06/timer.svg"
                        title="Date"
                        date="30th Jan 2022"
                    />
                        <WorkShopVedioCard
                            src="https://growthschool.io/wp-content/uploads/2021/06/record.svg"
                            title="time"
                            date="9PM onwards"
                        />
                </div>
                <div className="vedio-center">
                    <img src="https://growthschool.io/wp-content/uploads/2021/07/LinkedIn1.png" />
                    <span><BsFillPlayFill /></span>
                </div>
                <div className="workshop-vedio-inner-lft">
                    <WorkShopVedioCard
                        src="https://growthschool.io/wp-content/uploads/2021/06/setting.svg"
                        title="Total Duration"
                        date="5 Days"
                    />
                        <WorkShopVedioCard
                            src="https://growthschool.io/wp-content/uploads/2021/06/check-file.svg"
                            title="Bonuses Worth"
                            date="₹ 25,000"
                        />
                </div>
            </div>
            <div className="workshop-img-banner">
                <h6>Featured In</h6>
                <ul>
                    {workshopBannerImgUrls.map(url => (
                        <li><img src={url.url}/></li>
                    ))}
                </ul>
            </div>
            <div className="workshop-inner-content">
               <Fade bottom>
                   <h2>What will you learn in the workshop?</h2>
               </Fade>
               <div className="workshop-inner-content-grid">
                   {workshopdata.map(data => (
                    <div className="grid-card">
                        <span></span>
                        <h6>{data.title}</h6>
                        <p>{data.description}</p>
                    </div>
                   ))}
               </div>
            </div>
        </div>
    );
};

export default WorkshopVedio;
