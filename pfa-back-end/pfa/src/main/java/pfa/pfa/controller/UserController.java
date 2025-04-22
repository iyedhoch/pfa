package pfa.pfa.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pfa.pfa.entity.Room;
import pfa.pfa.entity.User;
import pfa.pfa.service.User.UserService;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @GetMapping("{id}")
    public User getuser(@PathVariable long id){
        return userService.getuser(id);
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

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String password = request.get("password");

        User user = userService.login(email, password);

        if (user != null) {
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Login successful");
            response.put("role", user.getIsadmin() ? "admin" : "user");
            response.put("userId", user.getId());
            response.put("email", user.getEmail());

            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Collections.singletonMap("error", "Invalid email or password"));
        }
    }

}
