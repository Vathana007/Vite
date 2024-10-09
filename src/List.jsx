
function List(props) {

   // info.sort((a,b) => a.age - b.age);  Numeric
   // info.sort((a,b) => b.age - a.age); Reverse Numeric

   const info = props.info;
   const category = props.category;

   const infoDetail = info.map(info => <li key = {info.id}>{info.name}:&nbsp;{info.age} &nbsp;{info.sex}</li>)

    return(
        <>
            <h3 className="list-title">{category}</h3>
            <ol className="list-info">{infoDetail}</ol>
        </>
    );  
}

export default List