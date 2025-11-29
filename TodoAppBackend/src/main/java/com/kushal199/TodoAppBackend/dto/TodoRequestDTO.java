package com.kushal199.TodoAppBackend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class TodoRequestDTO {
    @NotBlank(message = "Title cannot be empty")
    @Size(max = 20, message = "Title cannot exceed 10 characters")
    private String title;

    @NotBlank(message = "Description cannot be empty")
    @Size(max = 100, message = "Description cannot exceed 100 characters")
    private String description;

    @JsonProperty("isCompleted")
    private boolean completed = false;
}
