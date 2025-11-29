import { useEffect, useState } from "react"
import { Todo } from "./component/Todo";

function App() {
   const [todos, settodos] = useState([]);


    useEffect(()=>{
      //mocking api calls for todo
      setTimeout(() => {
        settodos([...todos,{
      id:1,
      title:"hello from 1",
      description:"desc 1"
    },{
      id:2,
      title:"hello from 2",
      description:"desc 2"
    }])
    }, 2000)

    },[])

  return (
    <>
     {todos.map((todo)=> <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </>
  )
}

export default App
