package com.crudoption.web;

import com.crudoption.model.User;
import com.crudoption.service.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;


    @GetMapping("/users")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5000"})
    public ResponseEntity<List<User>> userList (){

        List<User> users = this.userRepository.findAll();
        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }

    @PostMapping("/save")
    @CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5000"})
    public ResponseEntity<User> userCreate(@RequestBody User user) {
        User result = new User();
        if (user.getFirstName() != null && user.getSurname()!= null) {
            result = userRepository.save(user);
        } else {
            System.out.println("User Listsis bostur.");
        }
        return new ResponseEntity<User>(result, HttpStatus.CREATED);
    }


}
