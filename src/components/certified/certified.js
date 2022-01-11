import React from 'react';
import Fade from 'react-reveal/Fade';
const Certified = () => {
    const certifiedData = [
        {heading:"Official and Verified", url:"https://growthschool.io/wp-content/uploads/2021/06/verify.svg", title:"Receive an instructor signed certificate with institution’s logo to verify your achievements and increase your job prospects."},
        {heading:"Easily Shareable", url:"https://growthschool.io/wp-content/uploads/2021/06/share2.svg", title:"Add the certificate to your CV or your Resume or post it directly on LInkedin. You can even post it on instagram and twitter."},
        {heading:"Enhances Credibility", url:"https://growthschool.io/wp-content/uploads/2021/06/lock.svg", title:"Use your certificate to enhance your professional credibility and stand out among your peers!"},
    ]
    return (
        <div className="certified-container">
            <img src="https://growthschool.io/wp-content/themes/growth-school/img/patten.svg" className="certified-patten1"/>
            <img src="https://growthschool.io/wp-content/themes/growth-school/img/patten.svg" className="certified-patten2"/>
            <Fade bottom>
            <h2>Get Certified</h2>
            <div>
                <p>Yes! You will be certified for this workshop once you submit your assignment.</p>
            </div>
            </Fade>
            <div className="certified-inner-main-content">
                <div className="certified-content">
                    <ul>
                        {certifiedData.map(data => (

                        <li>
                            <i>
                                <img src={data.url} />
                            </i>
                            <span className="certified-heading"><b>{data.heading}</b>

                            <p>{data.title}</p>
                            </span>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="certified-img">
                    <img src="https://growthschool.io/wp-content/uploads/2021/08/LI-W.png"/>
                </div>
            </div>
        </div>
    );
};

export default Certified;
