import React, {useState} from "react";
import ComponentB from "./ComponentB";


function ComponentA() {

    const [user, setUser] = useState("Vathana");

    return(
        <>
            <div className="Box">
                <h1>Component A</h1>
                <h3>{`Hello ${user}`}</h3>
                <ComponentB user={user}/>
            </div>
        </>
    )

}

export default ComponentA