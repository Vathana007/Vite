import React, {useState} from "react"

function UpdateObject() {

    const [car, setCar] = useState({year: "",
                                    model: ""});
                        
    function changeYear(event) {
        setCar({...car, year: event.target.value});
        //  setCar(car => ({...car, year: event.target.value}));  this type also work
    }

    function changeModel(event) {
        setCar({...car, model: event.target.value});
    }

    return(
        <>
            <div>
                <p>My Favorite car is: {car.year} {car.model}</p>

                <input type="number" value={car.year} onChange={changeYear}/>
                <br />
                <input type="text" value={car.model} onChange={changeModel} />
            </div>
        </>
    );

}

export default UpdateObject