import React, { useState } from 'react'
import { baseURL } from '../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate=useNavigate();

  async function handleSubmit(e){
      e.preventDefault();
      
      if (!title || !description) {
        alert("Please fill all fields!");
        return;
      }

      try {
        if(confirm("do you want to save this todo  ?")){
          const res = await axios.post(`${baseURL}/create`, {
            title,
            description,
            isCompleted: false,
          });

          alert("Todo Created Successfully!");

          setTitle("");
          setDescription("");

          console.log(res.data);
        }
    } catch (err) {
      console.error(err);
      alert("Error creating todo!");
    }
  }
  return (
    <>
      <div style={{display:'flex', justifyContent:'center',alignItems:'center', height:'65vh'}}>
          <form style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:"55%",border:'2px solid black',padding:'10px',width:'50%',boxShadow:"2px 3px 6px 2px rgba(0, 0, 0, 0.3)"}} onSubmit={(e)=> handleSubmit(e)}>
              <input onChange={(e)=> setTitle(e.target.value)} placeholder='Enter TODO Title' style={{padding:"5px",margin:"5px",width:"90%"}} value={title}></input>
              <input onChange={(e)=> setDescription(e.target.value)} placeholder='Enter TODO Description' style={{padding:"5px",margin:"5px",width:"90%"}} value={description}></input>
              <input type="submit" value="create" style={{fontSize: "14px",borderRadius:'10%',outline:'none',cursor:'pointer',width:"25%",padding:"5px",margin:"5px",color:'white',background:'blue'}}/>
              <p style={{textAlign: "center",fontSize: "16px", color: "black", margin: "5px 0",fontStyle: "italic"}}>
                  Want to remember something? Add it here as a reminder.✅
              </p>
          </form>
      </div>
          
         <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <button style={{fontSize:'16px',borderRadius:'10%',outline:'none',cursor:'pointer',width:"10%",padding:"5px",margin:"5px",color:'white',background:'blue'}} onClick={()=> navigate("/")}>Home</button>
            <button style={{fontSize:'16px', borderRadius:'10%',outline:'none',cursor:'pointer',width:"10%",padding:"5px",margin:"5px",color:'white',background:'blue'}} onClick={()=> navigate("/all")}> See All Todos? </button>
        </div>
    </>
  )
}

export default CreateTodo;