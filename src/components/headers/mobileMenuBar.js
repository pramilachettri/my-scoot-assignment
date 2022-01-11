import React from 'react';
import 'animate.css';

const MobileMenuBar = () => {
    return (
        <div className="mob-menu animate__animated animate__fadeInDown animate_faster">
            <ul>
                <li><a>About</a></li>
                <li><a>Workshops </a>
                  <ul className="sub-menu">

                  </ul>
                </li>
                <li><a>Programs </a></li>
                <li><a>Community</a></li>
                <li><a>Login</a></li>
                <li><a>Apply as mentor</a></li>
                
            </ul>
        </div>
    );
};

export default MobileMenuBar;
