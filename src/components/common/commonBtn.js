import React, { Children } from 'react'
import { Button } from 'semantic-ui-react'
const CommonBtn = ({btnText, width, padding, divWidth, clickHandler, Children}) => {
    return (
        <div className=" btn-container" style={{width:divWidth}} onClick={clickHandler}>
            <Button className="btn-custom-class" style={{width:width, padding:padding}}>{btnText} {Children}</Button>
        </div>
    );
};

export default CommonBtn;
