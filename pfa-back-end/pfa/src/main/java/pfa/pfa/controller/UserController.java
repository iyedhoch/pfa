package pfa.pfa.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pfa.pfa.entity.User;
import pfa.pfa.service.User.UserService;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/User")
@RestController
@RequiredArgsConstructor
public class UserController {
    final private UserService userService;
    @GetMapping
    public List<User> getallusers() {
        return userService.getalluser();
    }

    @PostMapping
    public User adduser(@RequestBody User user){
        return userService.adduser(user);

    }

    @PutMapping("{id}")
    public void updateuser(@PathVariable long id ,@RequestBody User user){
        userService.updateuser(id,user);
    }

    @DeleteMapping("{id}")
    public void deleteuser(@PathVariable long id){
        userService.deleteuser(id);
    }
}
