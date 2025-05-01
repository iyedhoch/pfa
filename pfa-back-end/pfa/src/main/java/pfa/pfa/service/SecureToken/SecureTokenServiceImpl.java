package pfa.pfa.service.SecureToken;

import org.springframework.beans.factory.annotation.Value;
import pfa.pfa.entity.SecureToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pfa.pfa.repositories.SecureTokenRepository;

import org.springframework.security.crypto.keygen.BytesKeyGenerator;
import org.springframework.security.crypto.keygen.KeyGenerators;

import java.time.LocalDateTime;
import java.util.Optional;
import org.apache.commons.codec.binary.Base64;

@Service
public class SecureTokenServiceImpl implements SecureTokenService {

    private static  BytesKeyGenerator DEFAULT_TOKEN_GENERATOR = KeyGenerators.secureRandom(12);

    @Value("290")
    private int TokenValidityInSeconds;

    @Autowired
    private SecureTokenRepository secureTokenRepository;


    @Override
    public SecureToken createToken() {
        String tokenValue = new String(Base64.encodeBase64(DEFAULT_TOKEN_GENERATOR.generateKey()));
        SecureToken secureToken = new SecureToken();
        secureToken.setToken(tokenValue);
        secureToken.setExpiredat(LocalDateTime.now().plusSeconds(TokenValidityInSeconds));
        this.saveSecureToken(secureToken);
        return secureToken;

    }

    @Override
    public void saveSecureToken(SecureToken secureToken) {
        secureTokenRepository.save(secureToken);
    }

    @Override
    public SecureToken findByToken(String token) {
        Optional<SecureToken> optionalToken = secureTokenRepository.findByToken(token);
        return optionalToken.orElse(null);
    }

    @Override
    public void removeToken(SecureToken secureToken) {
        secureTokenRepository.delete(secureToken);
    }
}
