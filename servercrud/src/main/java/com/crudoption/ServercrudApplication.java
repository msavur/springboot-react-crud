package com.crudoption;

import com.crudoption.model.User;
import com.crudoption.service.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.stream.Stream;

@SpringBootApplication
public class ServercrudApplication implements CommandLineRunner{

    @Autowired
    UserRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(ServercrudApplication.class, args);
    }

    @Override
    public void run(String... strings) throws Exception {

        this.repository.save(new User("Mahmut","Savur"));
        this.repository.save(new User("Bekir","Bedir"));
        this.repository.save(new User("Ahmet","Yavuz"));
    }
}
