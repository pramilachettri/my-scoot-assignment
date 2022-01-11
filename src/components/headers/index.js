import React, { useState } from 'react';
import Logo from './logo';
import '../header.css';
import NavLinks from './navLinks';
import CommonBtn from '../common/commonBtn';
import MobileMenuBar from './mobileMenuBar';

const Index = () => {
    const [showMenu, setShowMenu] = useState(false);

    const menuOpenHandler = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div class="header-container" >
            <div className="header">
                <div class="inner-header">
                    <Logo />
                    <NavLinks />
                    <div className="apply-as-mentor-btn">
                        <CommonBtn btnText="Apply as mentor" />
                    </div>
                    <div className="mob-btn">
                        <CommonBtn btnText={`${showMenu ? "Close" : "Menu"}`} clickHandler={menuOpenHandler} />
                    </div>
                </div>
                <div className={`${showMenu ? "show" : "hide"}`}>
                    <MobileMenuBar />
                </div>
            </div>
        </div>
    );
};

export default Index;
