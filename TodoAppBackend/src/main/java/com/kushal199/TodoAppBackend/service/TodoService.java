package com.kushal199.TodoAppBackend.service;

import com.kushal199.TodoAppBackend.dto.TodoRequestDTO;
import com.kushal199.TodoAppBackend.dto.TodoResponseDTO;

import java.util.List;

public interface TodoService {
    public TodoResponseDTO createTodo(TodoRequestDTO todoRequestDTO);
    public List<TodoResponseDTO> getAllTodos();
}
