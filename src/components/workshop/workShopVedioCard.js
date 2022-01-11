import React from 'react'

const WorkShopVedioCard = ({src, title, date, isRght,content,subContent, dateContent, style}) => {
    return (
        <div className="work-shop-vedio-card">
            <i className="work-shop-vedio-icon">
                <img src={src}/>
            </i>
            {isRght ? (
                <>
                <p>
                    {content}
                    <span style={style}>{subContent}</span>
                </p>
                <h6>{dateContent}</h6>
                </>
            ):(
                <>
                <p>{title}</p>
                <h6>{date}</h6>
                </>
            )
            }
        </div>
    );
};

export default WorkShopVedioCard;
