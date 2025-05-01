package pfa.pfa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pfa.pfa.entity.Option;

@Repository
public interface OptionRepository extends JpaRepository<Option, Long> {

}
