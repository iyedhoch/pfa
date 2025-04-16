package pfa.pfa.service.User;

import org.springframework.stereotype.Service;
import pfa.pfa.entity.User;

import java.util.List;

@Service
public interface UserService {
    List<User> getalluser();
    User adduser(User user);

    void deleteuser (long id);
    void updateuser (long id , User user);
}
