package com.kushal199.TodoAppBackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TodoAppBackendApplication {

	public static void main(String[] args) {
        System.out.println("Application is Up and Running");
		SpringApplication.run(TodoAppBackendApplication.class, args);
	}

}
