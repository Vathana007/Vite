// useEffect(function, [dependencies])

/*
1. useEffect(() => {})               // Run after every re-render = update when value still change
2. useEffect(() => {}, [])           // Run only on mount = update one
3. useEffect(() => {}, [value])      // Run on mount + when value changes = updat4e when we change value same as the first one
*/

import React, {useState, useEffect} from 'react';

function UseEffect() {

    const [count, setCount] = useState(0);

    /*useEffect(() => {
        document.title = `Count: ${count}`
    });  1. useEffect(() => {})  */ 

    /*useEffect(() => {
        document.title = `Count: ${count}`
    }, []);  2. useEffect(() => {}, []) */

    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count]);

    function addCount() {
        setCount(c => c + 1);
    }

    function substractCount() {
        setCount(c => c - 1);
    }

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={addCount}>ADD</button>
            <button onClick={substractCount}>Substraction</button><br />
        </>
    )
}

export default UseEffect