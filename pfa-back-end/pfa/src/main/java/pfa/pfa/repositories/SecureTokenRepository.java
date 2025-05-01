package pfa.pfa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pfa.pfa.entity.SecureToken;

import java.util.Optional;

@Repository
public interface SecureTokenRepository extends JpaRepository <SecureToken, Long>{

    Optional<SecureToken> findByToken(final String token);
    Long removeByToken(final String token);
}
