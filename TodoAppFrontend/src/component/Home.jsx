import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();
    return (
         <div style={{display:'flex', justifyContent:'center',alignItems:'center', height:'75vh'}}>
            <button style={{fontSize:'16px',borderRadius:'10%',outline:'none',cursor:'pointer',width:"10%",padding:"5px",margin:"5px",color:'white',background:'blue'}} onClick={()=> navigate("/all")}>See All Todos ?</button>
            <button style={{fontSize:'16px', borderRadius:'10%',outline:'none',cursor:'pointer',width:"10%",padding:"5px",margin:"5px",color:'white',background:'blue'}} onClick={()=> navigate("/create")}> Create New Tod ? </button>
        </div>
    )
}

export default Home;