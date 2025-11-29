package com.kushal199.TodoAppBackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Todo {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private  Long Id;

    @Column ( nullable = false,length = 10)
    private String title;

    @Column ( nullable = false,length = 100)
    private  String description;

    @Column(nullable = false)
    private boolean isCompleted = false;

    @Column ( nullable = false)
    private LocalDateTime createdDate;

    private LocalDateTime updatedDate;

}
