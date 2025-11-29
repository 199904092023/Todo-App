package com.kushal199.TodoAppBackend.controller;

import com.kushal199.TodoAppBackend.dto.TodoRequestDTO;
import com.kushal199.TodoAppBackend.dto.TodoResponseDTO;
import com.kushal199.TodoAppBackend.service.TodoService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/todos")
public class TodoController {
    private final TodoService todoService;

    public TodoController (TodoService todoService){
        this.todoService=todoService;
    }

    @PostMapping ("/create")
    public ResponseEntity<TodoResponseDTO> createTodo(@Valid @RequestBody TodoRequestDTO todoRequestDTO){
          return ResponseEntity.status(201).body(todoService.createTodo(todoRequestDTO));
    }
}
