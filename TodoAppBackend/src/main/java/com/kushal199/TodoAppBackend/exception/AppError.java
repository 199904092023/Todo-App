package com.kushal199.TodoAppBackend.exception;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AppError {
    public  String message;
    public Integer status;
    private String timestamp;
}
