import { useEffect, useState } from "react"
import { Todo } from "./component/Todo";
import axios from 'axios';


function App() {
   const [todos, settodos] = useState([]);

    useEffect(()=>{
      //mocking api calls for todo
       axios.get(`${baseURL}/all`).then(async (response)=>{
            const data= await response.data;
            settodos(data);
       })

    },[])

  return (
    <>
     {todos.map((todo)=> <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </>
  )
}

export const baseURL="http://localhost:8080/api/todos";
export default App
