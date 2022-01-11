import React, { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai';
import Menu from '../headers/menu';
const NavLinks = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showProgramMenu, setShowProgramMenu] = useState(false);
    const mouseMoveFunc = () => {
        setShowMenu(true)
    }
    return (
        <div className="nav-container">
            <ul>
                <li>About </li>
                <li className="workshop" 
                onMouseOver={mouseMoveFunc} onMouseOut={() => setShowMenu(false)}
                >WorkShops <span><AiFillCaretDown /></span>
                    <React.Fragment style={{ width: '1000px' }}>
                        {showMenu &&
                            <Menu 
                                imgOne="http://growthschool.io/wp-content/uploads/2021/08/Marketing.png"
                                imgOneText="Marketing"
                                contentHeaderOne="Performance Marketing"
                                contentTitleOne="By Deepan Siddhu and Aswini Palo"
                                contentHeaderTwo="LinkedIn"
                                contentTitleTwo="By Vaibhav Sisinty"
                                imgTwo="https://growthschool.io/wp-content/uploads/2021/08/Design.png"
                                imgTwoText="Design"
                                contentHeaderThree="UI"
                                contentTitleThree="By Saptarshi Prakash"
                                contentHeaderFour="UX"
                                contentTitleFour="By Anudeep Ayyagari"
                                imgThree="https://growthschool.io/wp-content/uploads/2021/08/Content.png"
                                imgThreeText="Content"
                                contentHeaderFive="Content Writing Freelancing"
                                contentTitleFive="By Anuj Gosalia"
                                contentHeaderSix="Content Machine"
                                contentTitleSix="By Digital Pratik"
                                imgFour="https://growthschool.io/wp-content/uploads/2021/08/Digital-Currency.png"
                                imgFourText="Digital Currencies"
                                contentHeaderSeven="Cryptocurrency"
                                contentTitleSeven="By Ajeet Khurana"
                                contentHeaderEight="NFT"
                                contentTitleEight="By Raghava KK"
                                imgFive="https://growthschool.io/wp-content/uploads/2021/08/No-Code.png"
                                imgFiveText="NoCode"
                                contentHeaderNine="NoCode"
                                contentTitleNine="By Keshav Sharma and Mayank Nagpal"
                                imgSix="https://growthschool.io/wp-content/uploads/2021/08/Others.png"
                                imgSixText="Other"
                                contentHeaderTen="Entrepreneurship"
                                contentTitleTen="By Sarvesh Shashi"
                                contentHeaderElev="Speak to influence "
                                contentTitleElev="By Raj Shamani"
                                contentHeaderTwel="Youtube"
                                contentTitleTwel="By Vedant Rusty"
                                contentHeaderThir="Poetry"
                                contentTitleThir="By Megha Rao"
                                checkoutOptioText="Check Out Our Upcoming Workshop"
                            />
                        }
                    </React.Fragment>
                </li>
                <li 
                onMouseOver={() => setShowProgramMenu(true)} 
                onMouseOut={() => setShowProgramMenu(false)}
                >Programs <span><AiFillCaretDown /></span>
                {showProgramMenu && 
                  <Menu 
                  height="702px"
                    imgOne="http://growthschool.io/wp-content/uploads/2021/08/Marketing.png"
                    imgOneText=" Growth and Marketing"
                    contentHeaderOne="Growth Hacking"
                    contentTitleOne="By Vaibhav Sisinty"
                    contentHeaderTwo="Performance Marketing"
                    contentTitleTwo="By Deepan Siddhu and Aswini Palo"
                    imgTwo="https://growthschool.io/wp-content/uploads/2021/08/Design.png"
                    imgTwoText="Design"
                    contentHeaderThree="UI"
                    contentTitleThree="By Saptarshi Prakash"
                    contentHeaderFour="UX"
                    contentTitleFour="By Anudeep Ayyagari"
                    imgThree="https://growthschool.io/wp-content/uploads/2021/08/Content.png"
                    imgThreeText="Content"
                    contentHeaderFive="Content Writing Freelancing"
                    contentTitleFive="By Anuj Gosalia"
                    contentHeaderSix="Content Machine"
                    contentTitleSix="By Digital Pratik"
                    imgFour="https://growthschool.io/wp-content/uploads/2021/08/Digital-Currency.png"
                    imgFourText="Digital Currencies"
                    contentHeaderSeven="Cryptocurrency"
                    contentTitleSeven="By Ajeet Khurana"
                    contentHeaderEight="NFT"
                    contentTitleEight="By Raghava KK"
                    imgFive="https://growthschool.io/wp-content/uploads/2021/08/No-Code.png"
                    imgFiveText="NoCode"
                    contentHeaderNine="NoCode"
                    contentTitleNine="By Keshav Sharma and Mayank Nagpal"
                    imgSix="https://growthschool.io/wp-content/uploads/2021/08/Others.png"
                    imgSixText="Other"
                    contentHeaderTen="Speak to influence "
                    contentTitleTen="By Raj Shamani"
                    contentHeaderElev="D2C "
                    contentTitleElev="Arjun Vaidya & Trisha Rajani Vaidya"
                    contentHeaderTwel="Product Management"
                    contentTitleTwel="By Naggapan Ramaswamy"
                    contentHeaderThir="Tech Interview Prep"
                    contentTitleThir="By Pratik Singhal"
                    checkoutOptioText="Check Out Our Upcoming Programmes"
                    isProgramme={true}

                  />
                }
                </li>
                <li>Community</li>
                <li>Login</li>
            </ul>
        </div>
    );
};

export default NavLinks;
