import React from 'react';
import Fade from 'react-reveal/Fade';
import CommonBtn from '../common/commonBtn'

const WorkShop = () => {
    return (
        <div class="workshop-container" >
            <img src="https://growthschool.io/wp-content/themes/growth-school/img/patten.svg" className="workshop-pattern1"/>
            <img src="https://growthschool.io/wp-content/themes/growth-school/img/patten.svg" className="workshop-pattern2"/>
            <Fade bottom>
            <div>
                <i className="main-title">Starts 30th Jan 2022</i>
            </div>
                <div className="workshop-content ">
                    <img src="https://growthschool.io/wp-content/themes/growth-school/img/patten.svg" className="workshop-pattern3"/>
                    <h2>LinkedIn 5 Day Workshop</h2>
                    <p>Secrets that generated me over 300K+ followers, and 1000’s of leads for FREE bringing in thousands of dollars on a monthly basis from Linkedin</p>
                </div>
                <div className="workshop-btn-container">
                    <CommonBtn btnText="Reserved seat for rs 499" />
                </div>
            </Fade> 
        </div>
    );
};

export default WorkShop;
