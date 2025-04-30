package repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pfa.pfa.entity.SecureToken;

import java.util.Optional;

public interface SecureTokenRepository extends JpaRepository <SecureToken, Long>{

    Optional<SecureToken> findByToken(final String token);
    Long removeByToken(final String token);
}
