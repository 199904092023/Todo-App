package com.kushal199.TodoAppBackend.repository;

import com.kushal199.TodoAppBackend.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo,Long> {}
