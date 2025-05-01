package pfa.pfa.service.User;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import pfa.pfa.entity.User;
import pfa.pfa.service.SecureToken.SecureTokenService;
import pfa.pfa.repositories.UserRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImp implements UserService {
    @Autowired
    private final UserRepository userRepository;

    @Override
    public List<User> getalluser() {
        return userRepository.findAll();
    }



    @Override
    public User getuser(long id){
        return userRepository.findById(id).orElseThrow();
    }

    @Override
    public User adduser(User user) {
        return userRepository.save(user);
    }

    @Override
    public void deleteuser(long id) {
        userRepository.deleteById(id);
    }

    @Override
    public void updateuser(long id, User user) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        existingUser.setName(user.getName());
        existingUser.setEmail(user.getEmail());
        existingUser.setPassword(user.getPassword());
        existingUser.setCreated_at(user.getCreated_at());

        userRepository.save(existingUser); // Save the updated user
    }

    @Override
    public User login(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }




}
