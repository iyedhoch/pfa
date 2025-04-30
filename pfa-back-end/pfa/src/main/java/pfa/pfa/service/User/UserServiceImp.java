package pfa.pfa.service.User;

import Mailing.AccountVerificationEmailContext;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;
import pfa.pfa.entity.Room;
import pfa.pfa.entity.SecureToken;
import pfa.pfa.entity.User;
import pfa.pfa.service.SecureToken.SecureTokenService;
import repositories.UserRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public abstract class UserServiceImp implements UserService {
    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder encoder;

    @Autowired
    private SecureTokenService secureTokenService;

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

    public Boolean checkifUSerExist(String email){
        return userRepository.findByEmail(email) != null;
    }

    public void register(User user){
        user.setPassword(encoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    /*public void sendRegistrationConfirmationEmail(User user) {
        SecureToken secureToken = secureTokenService.createToken();
        secureToken.setUser(user);
        secureTokenService.saveSecureToken(secureToken);

        AccountVerificationEmailContext context = new AccountVerificationEmailContext();
        context.setToken(secureToken.getToken());
        context.buildVerifacationonUrl(baseUrl,secureToken.getToken());
    }*/

}
