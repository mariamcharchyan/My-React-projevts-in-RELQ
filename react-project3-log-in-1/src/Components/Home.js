
import { useNavigate } from "react-router-dom"

function Home({setIsLogged}) {
    const navigate = useNavigate();

    function handleLogout(){
        setIsLogged(false);
        navigate('/')
    }
  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column', gap:'20px',margin:'auto'}}>
        <h1 style={{textAlign:'center',marginTop:'20px'}}>You logged successfully</h1>
        <button style={{width:'70px',textAlign:'center',margin:'auto'}} onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Home