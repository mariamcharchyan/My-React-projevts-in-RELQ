import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './Login.css'

const obj = {name:'Dianna',password:'reactjs2023'}

function Login({setIsLogged,isLogged}) {
    const [name, setName] = useState('');
    const [password,setPassword] = useState('');
    const [nameError,setNameError] = useState('');
    const [passError,setPassError] = useState('');
    const navigate = useNavigate();

    function handleFormSubmit(e){
        e.preventDefault();
        if(name === obj.name && password === obj.password ){
            setIsLogged(!isLogged);
            navigate('/');
        }
         if(name !== obj.name){
            setNameError('Invalid user name')
        }else if(name === ''){
            setNameError('write user name')
        }
         if(password === ''){
            setPassError('write password')
        }else if(password.length < 6){
            setPassError('password should have minimum 6 characters')
        }
        else if(password !== obj.password){
            setPassError('uncorrect password');
        }
    }
  return (
    <div>
        <form action="" onSubmit={handleFormSubmit}>
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='userName' /> 
            <p>{nameError ? nameError : ''}</p>
            <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder='password' />
            <p>{passError ? passError : ''}</p>
            <button className="login">Login</button>
        </form>
    </div>
  )
}

export default Login