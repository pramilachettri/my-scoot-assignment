import React from 'react';
import Fade from 'react-reveal/Fade'
import '../trainer.css'
import '../faqs.css'
import Accordions from './accordions';

const Index = () => {
    return (
        <div className="meet-trainer-section">
            <div className="faqs-container">
                <Fade buttom>

                    <div className="faq-section">
                        <h2>
                            FAQs
                            <img src="https://growthschool.io/wp-content/themes/growth-school/img/patten.svg" className="faq-patten1" />
                        </h2>
                    </div>
                </Fade>

                <Accordions />
            </div>
        </div>
    );
};

export default Index;
