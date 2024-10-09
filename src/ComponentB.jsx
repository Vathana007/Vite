import ComponentC from "./ComponentC";

function ComponentB(props) {

    return(
        <>
            <div className="Box">
                <h1>Component B</h1>
                <ComponentC user={props.user}/>
            </div>
        </>
    )

}

export default ComponentB