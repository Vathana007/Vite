import React, {useState} from "react";

function ColorPick() {

    const [color, setColor] = useState();

    function changeColor(event) {
        setColor(event.target.value);
    }

    return(
            <div className="color-container">
                <h1>Pick Color</h1>
                <div className="color-display" style={{backgroundColor: color}}>
                    <p>Selected Color: {color}</p>
                </div>
                <label >Select Color:</label>
                <input type="color" value={color} onChange={changeColor}/>
            </div> 
    );
}
export default ColorPick