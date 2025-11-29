package com.kushal199.TodoAppBackend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.sql.Timestamp;
@Data
public class TodoResponseDTO {
    private Long id;

    private String title;

    private String description;

    private boolean isCompleted;

    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss", timezone = "Asia/Kolkata")
    private Timestamp createdDate;

    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss", timezone = "Asia/Kolkata")
    private Timestamp updatedDate;
}
