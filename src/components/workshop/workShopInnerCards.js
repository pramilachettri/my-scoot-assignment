import React from 'react'
const WorkShopInnerCards = ({title, Descriptions}) => {
    return (
        <div className="row">
            <div className="ineer-cards-content">
            <div className="content-details">
               <h4>{title}</h4>
               <p>{Descriptions}</p>
            </div>
        </div>
        </div>
    );
};

export default WorkShopInnerCards;
