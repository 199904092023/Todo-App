package com.kushal199.TodoAppBackend.service;

import com.kushal199.TodoAppBackend.common.ModelMapperService;
import com.kushal199.TodoAppBackend.dto.TodoRequestDTO;
import com.kushal199.TodoAppBackend.dto.TodoResponseDTO;
import com.kushal199.TodoAppBackend.model.Todo;
import com.kushal199.TodoAppBackend.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoServiceImpl implements  TodoService{
    private TodoRepository todoRepository;
    private ModelMapperService mapperService;

    public TodoServiceImpl(TodoRepository todoRepository,ModelMapperService mapperService){
        this.todoRepository=todoRepository;
        this.mapperService=mapperService;
    }
    @Override
    public TodoResponseDTO createTodo(TodoRequestDTO todoRequestDTO) {
        Todo todo= mapperService.mapTo(todoRequestDTO,Todo.class);
        todo.setCompleted(false);
        todo.setCreatedDate(LocalDateTime.now(ZoneId.of("Asia/Kolkata")));
        Todo savedTodo=todoRepository.save(todo);
        return mapperService.mapTo(savedTodo, TodoResponseDTO.class);
    }

    @Override
    public List<TodoResponseDTO> getAllTodos() {
        return todoRepository.findAll().stream().map(todo ->  mapperService.mapTo(todo, TodoResponseDTO.class)).collect(Collectors.toList());
    }

    @Override
    public TodoResponseDTO markAsComplete(Long id) {
        Todo todoFrmDB=todoRepository.findById(id).orElseThrow(() -> new RuntimeException("Todo not found"));
        todoFrmDB.setUpdatedDate(LocalDateTime.now());
        todoFrmDB.setCompleted(true);

        Todo savedTodo=todoRepository.save(todoFrmDB);
        return mapperService.mapTo(savedTodo,TodoResponseDTO.class);
    }
}
