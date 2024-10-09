import React, {useState} from 'react';

function UseState() {

    const [count, setCount] = useState(0);

    // update function = A function passed as an argument to setState() usually
    //                   ex. setYear()
    //                   Allow for safe update based on  the previous state
    //                   Used with multiple state updates and asynchronous functions
    //                   Good pratice to use updater functions
    
    /* function incrementBtn() {
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
    }
    function decrementBtn() {
        setCount(count => count - 1);
        setCount(count => count - 1);
    }
    function incrementBtn() {
        setCount(count => count = 0);
    }
    */
    
    const incrementBtn = () => {
        setCount(count + 1);
    }

    const decrementBtn = () => {
        setCount(count - 1);
    }

    const resetBtn = () => {
        setCount(0);
    }

  

    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [message, setMessage] = useState("");
    const [choseOption, setChoseOption] = useState("");
    const [shipping, setShipping] = useState("");

    function changeName(event) {
        setName(event.target.value);
    }
    
    function changeAge(event) {
        setAge(event.target.value);
    }

    function changeMessage(event) {
        setMessage(event.target.value);
    }

    function changeOption(event) {
        setChoseOption(event.target.value);
    }

    function changeShipping(event) {
        setShipping(event.target.value);
    }

    return(
        <>
            <div>
                <p className='count-display'>{count}</p>
                <button className='decrement' onClick={decrementBtn}>Decrement</button>
                <button className='reset' onClick={resetBtn}>Reset</button>
                <button className='increment' onClick={incrementBtn}>Increment</button>
            </div>

            <br />
            
            <div>
                <input type="text" value={name} onChange={changeName}/>
                <p>Name: {name}</p>

                <input type="number" value={age} onChange={changeAge}/>
                <p>Age: {age}</p>

                <textarea value={message} onChange={changeMessage} placeholder='Sent Message Here'></textarea>
                <p>Message: {message}</p>

                <select value={choseOption} onChange={changeOption}>
                    <option value="">Select an option</option>
                    <option value="ABA">ABA</option>
                    <option value="ACLEDA">ACLEDA</option>
                    <option value="Wing">Wing</option>
                    <option value="Canadia">Canadia</option>
                </select>
                <p>Payment: {choseOption}</p>

                <label>
                    <input type="radio" value="Pick Up"
                        checked={shipping === "Pick Up"}
                        onChange={changeShipping}/>
                    Pick Up
                </label>

                <br />

                <label>
                    <input type="radio" value="Delivery"
                        checked={shipping === "Delivery"}
                        onChange={changeShipping}/>
                    Delivery
                </label>

                <p>Shipping: {shipping}</p>
            </div>
        </>
    );
}

export default UseState