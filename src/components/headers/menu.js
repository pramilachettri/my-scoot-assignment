import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const Menu = ({
    imgOne, 
    imgOneText, 
    contentHeaderOne, 
    contentTitleOne,
    contentHeaderTwo,
    contentTitleTwo,
    imgTwo,
    imgTwoText,
    contentHeaderThree,
    contentTitleThree,
    contentHeaderFour,
    contentTitleFour,
    imgThree,
    imgThreeText,
    contentHeaderFive,
    contentTitleFive,
    contentHeaderSix,
    contentTitleSix,
    imgFour,
    imgFourText,
    contentHeaderSeven,
    contentTitleSeven,
    contentHeaderEight,
    contentTitleEight,
    imgFive,
    imgFiveText,
    contentHeaderNine,
    contentTitleNine,
    imgSix,
    imgSixText,
    contentHeaderTen,
    contentTitleTen,
    contentHeaderElev,
    contentTitleElev,
    contentHeaderTwel,
    contentTitleTwel,
    contentHeaderThir,
    contentTitleThir,
    checkoutOptioText,
    height
}) => {
  return (
    <ul className="menu" style={{height:height}}>
      <li className="menu-item">
        <ul className="sub-menu">
          <li className="menu-content">
            <a className="menu-img">
              <img src={imgOne} />
              {imgOneText}
            </a>
            <ul className="menu-sub-content">
              <li>
                <a>
                  <h5>{contentHeaderOne}</h5>
                  <i>{contentTitleOne}</i>
                </a>
              </li>
            </ul>
            <ul className="menu-sub-content">
              <li>
                <a>
                  <h5>{contentHeaderTwo}</h5>
                  <i>{contentTitleTwo}</i>
                </a>
              </li>
            </ul>
            <a className="menu-img">
              <img src={imgTwo}/>
              {imgTwoText}
            </a>
            <ul className="menu-sub-content">
              <li>
                <a>
                  <h5>{contentHeaderThree}</h5>
                  <i>{contentTitleThree}</i>
                </a>
              </li>
            </ul>
            <ul className="menu-sub-content">
              <li>
                <a>
                  <h5>{contentHeaderFour}</h5>
                  <i>{contentTitleFour}</i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="sub-menu">
          <li className="menu-content">
            <a className="menu-img">
              <img src={imgThree} />
              {imgThreeText}
            </a>
            <ul className="menu-sub-content">
              <li>
                <a>
                  <h5>{contentHeaderFive}</h5>
                  <i>{contentTitleFive}</i>
                </a>
              </li>
            </ul>
            <ul className="menu-sub-content">
              <li>
                <a>
                  <h5>{contentHeaderSix}</h5>
                  <i>{contentTitleSix}</i>
                </a>
              </li>
            </ul>
            <a className="menu-img">
              <img src={imgFour} />
              {imgFourText}
            </a>
            <ul className="menu-sub-content">
              <li>
                <a>
                  <h5>{contentHeaderSeven}</h5>
                  <i>{contentTitleSeven}</i>
                </a>
              </li>
            </ul>
            <ul className="menu-sub-content">
              <li>
                <a>
                  <h5>{contentHeaderEight} </h5>
                  <i>{contentTitleEight}</i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="sub-menu">
          <li className="menu-content">
            <a className="menu-img">
              <img src={imgFive} />
              {imgFiveText}
            </a>
            <ul className="menu-sub-content">
              <li>
                <a>
                  <h5>{contentHeaderNine}</h5>
                  <i>{contentTitleNine}</i>
                </a>
              </li>
            </ul>
            <a className="menu-img">
              <img src={imgSix} />
              {imgSixText}
            </a>
            <ul className="menu-sub-content">
              <li>
                <a>
                  <h5>{contentHeaderTen}</h5>
                  <i>{contentTitleTen}</i>
                </a>
              </li>
            </ul>
            <ul className="menu-sub-content">
              <li>
                <a>
                  <h5>{contentHeaderElev} </h5>
                  <i>{contentTitleElev}</i>
                </a>
              </li>
            </ul>
            <ul className="menu-sub-content">
              <li>
                <a>
                  <h5>{contentHeaderTwel}</h5>
                  <i>{contentTitleTwel}</i>
                </a>
              </li>
            </ul>
            <ul className="menu-sub-content">
              <li>
                <a>
                  <h5>{contentHeaderThir}</h5>
                  <i>{contentTitleThir}</i>
                </a>
              </li>
            </ul>
            <button className="checkout-options-btn">
              {checkoutOptioText}
              <BsArrowRightCircle />
            </button>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Menu;

