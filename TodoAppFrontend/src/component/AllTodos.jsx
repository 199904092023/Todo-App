import React from 'react';
import useTodos from '../hooks/useTodos'
import { Todo } from './Todo';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../App';

const AllTodos = () => {
    const {todos,setTodos,fetchTodos}=useTodos();
    const navigate =useNavigate();

    const handleMarkAsDone= async (id)=>{
        try{
            if(confirm("do you want to mark this as complete ?")){
                    const response=await axios.patch(`${baseURL}/complete/${id}`); 
                    const updateTodo=response.data;
                    setTodos(oldTodos => oldTodos.map(currentOldTodo => currentOldTodo.id == updateTodo.id ? updateTodo : currentOldTodo ))
            }
       }catch (e) {
            console.error(e);
        }
    }

    return (
    <div>
            {todos.map((todo)=> <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description} isCompleted={todo.isCompleted} handleMarkAsDone={handleMarkAsDone}> </Todo>)}
             
         <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <button style={{fontSize:'16px',borderRadius:'10%',outline:'none',cursor:'pointer',width:"10%",padding:"5px",margin:"5px",color:'white',background:'blue'}} onClick={()=> navigate("/")}>Home</button>
            <button style={{fontSize:'16px', borderRadius:'10%',outline:'none',cursor:'pointer',width:"10%",padding:"5px",margin:"5px",color:'white',background:'blue'}} onClick={()=> navigate("/create")}> Create New Todo? </button>
        </div>
    </div>
  )
}

export default AllTodos