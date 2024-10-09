import profilePic from './assets/P1.png'

function Card() {

    return(
        <div className="card">
            <img className="card-img" src={profilePic} />
            <h1 className='card-title'>Vathana</h1>
            <p className='card-text'>I am a Year 2 Student and Major Computer Sceince</p>
        </div>
    );
}

export default Card