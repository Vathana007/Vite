import ComponentD from "./ComponentD";

function ComponentC(props) {

    return(
        <>
            <div className="Box">
                <h1>Component C</h1>
                <ComponentD user={props.user}/>
            </div>
        </>
    )

}

export default ComponentC