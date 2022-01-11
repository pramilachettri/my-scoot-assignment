import React from 'react'
import Fade from 'react-reveal/Fade';
import CommonBtn from '../common/commonBtn';
import { offerdataForLft ,offerDataForRht, bonusTooData} from '../data';
const Offers = () => {
    return (
        <div className="offers-container">
            <div className="offers-main-content">
                <Fade bottom>
                    <h2>Get the offer while it lasts!</h2>
                </Fade>
                <div className="offers-inner-content">
                   <div className="offers-left-content">
                       <h4>LinkedIn 5 Day Workshop Offer (Save ₹1,500)</h4>
                       <p className="offer-price">
                       ₹499 
                       <sub>₹1,999</sub>
                       </p>
                       <ul>
                           {offerdataForLft.map(data => (
                           <li>{data.title}</li>
                           ))}
                       </ul>
                       <p>&nbsp;</p>
                       <p>Note: No exceptions would be made beyond the offer expiry date. The prices would go up and no free bonuses</p>
                       <div className="offers-pay-btn">
                         <CommonBtn btnText="Reserve Seat for ₹499" width="100%" padding="20px"/>
                       </div>
                   </div>
                   <div className="offers-right-content">
                       <h4>What you’ll get...</h4>
                       <ul>
                           {offerDataForRht.map(data => (
                               <li>{data.title}</li>
                           ))}
                       </ul>
                       <h4>And bonuses too...</h4>
                       <ul>
                           {bonusTooData.map(data => (
                               <li>{data.title}</li>
                           ))}
                       </ul>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;
