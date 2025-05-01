package pfa.pfa.service.SecureToken;

import org.springframework.stereotype.Service;
import pfa.pfa.entity.SecureToken;


public interface SecureTokenService {

    SecureToken createToken();
    void saveSecureToken(SecureToken secureToken);
    SecureToken findByToken(String token);
    void removeToken(SecureToken token);

}
