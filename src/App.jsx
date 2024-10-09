import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import ClickBtn from './ClickBtn.jsx'
import UseState from './UseState.jsx'
import ColorPick from './ColorPick.jsx'
import UpdateObject from './UpdateObject.jsx'
import UpdateArray from './UpdateArray.jsx'
import ToDoList from './ToDoList.jsx'
import UseEffect from './UseEffect.jsx'
import DigitalClock from './DigitalClock.jsx'
import ComponentA from './ComponentA.jsx'

function App() {

    const info = [{name: "Vathana", age: 19, sex: "Male"},
                  {name: "Socheat", age: 20, sex: "Male"},
                  {name: "Sunly", age: 20, sex: "Male"},
    ];

    return(
        <>
          <Header></Header> 

          <Card></Card>  
          <Student name="Vathana" age={19}  isStudent={true}/>  
          <UserGreeting isloggedIn={true} userName="Vathana"/>  
          <List info={info} category="Information"/>    
          <ClickBtn></ClickBtn>    
          <UseState></UseState>
          <ColorPick></ColorPick>
          <UpdateObject></UpdateObject>
          <UpdateArray></UpdateArray>
          <ToDoList></ToDoList>
          <UseEffect></UseEffect>
          <DigitalClock></DigitalClock>
          <ComponentA></ComponentA>

          <Footer></Footer>
        </>

    );    
}

export default App
