import React, { useState } from 'react';
import pic from './assets/P1.png';

function ClickBtn() {
    const [imgUrl, setImgUrl] = useState(null); //Added useState to manage the state of the image URL.

    const handleClick = () => {
        setImgUrl(pic);                         //Updated handleClick to set the image URL state.
    };

    return (
        <>
            <button onClick={handleClick}>Click Here!</button>
            {<img src={imgUrl}/>}
        </>
    );
}

export default ClickBtn;
