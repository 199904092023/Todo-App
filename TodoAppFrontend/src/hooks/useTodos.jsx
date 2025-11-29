import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../App";

export default function useTodos() {
         const [todos, setTodos] = useState([]);

        const fetchTodos = async () => {
            const response = await axios.get(`${baseURL}/all`);
            setTodos(response.data);
        };

        useEffect(() => {
            fetchTodos();
        }, []);
        return {todos,setTodos,fetchTodos};
}