package pfa.pfa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pfa.pfa.entity.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room , Long> {
}
