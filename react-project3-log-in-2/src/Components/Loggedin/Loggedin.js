import './Loggedin.css';

const LoggedIn = ({setIsLoggedIn}) => {
    return(
        <div className='card'>
            <h1 className='title'>You are now logged in!</h1>
            <button className='back-button' onClick={() => setIsLoggedIn(false)}>
                Go Back
            </button>
        </div>
    );
};

export default LoggedIn;