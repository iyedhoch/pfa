package pfa.pfa.service.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import pfa.pfa.entity.Option;
import pfa.pfa.entity.User;
import repositories.UserRepository;

import java.util.List;

@Service
public interface UserService {

    User getuser(long id);

    List<User> getalluser();
    User adduser(User user);

    void deleteuser (long id);
    void updateuser (long id , User user);

    User login(String email,String password);

    Boolean checkifUSerExist(String email);
}
