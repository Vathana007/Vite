
function UserGreeting(props) {
    // if(props.isloggedIn) {
    //     return <h2 className="welcome-message">Welcome {props.userName}</h2>
    // }else{
    //     return <h2 className="message-input">Please Log In Again</h2>
    // }

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.userName}</h2>
    const messageInput = <h2 className="message-input">Please Log In Again</h2>

    return(props.isloggedIn ? welcomeMessage : messageInput);
}

export default UserGreeting