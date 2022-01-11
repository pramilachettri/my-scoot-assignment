import React from 'react'
import WorkShop from '../workshop/workshop'
import '../workshop.css'
import WorkshopVedio from './workshopVedio';
import Fade from 'react-reveal/Fade';

import WorkshopType from './workshopType';
const Index = () => {
    return (
        <>
        <div className="workshop-home-container">
           <WorkShop/> 
        </div>
        <div className="workshop-home-container2">
           <WorkshopVedio/>
          <div className="who-workshop-page">
             <WorkshopType/>
          </div>
        </div>
        </>
    );
};

export default Index;
