package com.kushal199.TodoAppBackend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class TodoRequestDTO {
    @NotBlank(message = "Title cannot be empty")
    @Size(max = 10, message = "Title cannot exceed 10 characters")
    private String title;

    @NotBlank(message = "Description cannot be empty")
    @Size(max = 100, message = "Description cannot exceed 100 characters")
    private String description;

    private boolean isCompleted = false;
}
