package com.kushal199.TodoAppBackend.service;

import com.kushal199.TodoAppBackend.dto.TodoRequestDTO;
import com.kushal199.TodoAppBackend.dto.TodoResponseDTO;

public interface TodoService {
    public TodoResponseDTO createTodo(TodoRequestDTO todoRequestDTO);
}
