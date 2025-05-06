package pfa.pfa.controller;

import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder; 
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import pfa.pfa.entity.User;
import pfa.pfa.service.User.UserService;

@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/users")  
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

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Map<String, String> request) {
        try {
            String name = request.get("name");
            String email = request.get("email");
            String password = request.get("password");
    
            User user = new User();
            user.setName(name);
            user.setEmail(email);
            user.setPassword(new BCryptPasswordEncoder().encode(password));
            user.setCreated_at(new Date());
            user.setAcountverified(false);
            user.setLogindisabled(false);
            user.setIsadmin(false);
    
            User createdUser = userService.adduser(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Registration failed: " + e.getMessage());
        }
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
