import AllTodos from "./component/AllTodos";
import Banner from "./component/Banner";
import CreateTodo from "./component/CreateTodo";
import Footer from "./component/Footer";
import Home from "./component/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (
    <Router>
            <Banner></Banner>
        <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/create" element={<CreateTodo></CreateTodo>}/>
            <Route path="/all" element={<AllTodos></AllTodos>}/>
        </Routes>
            <Footer></Footer>
    </Router>
  )
}

export const baseURL="http://localhost:8080/api/todos";
export default App
