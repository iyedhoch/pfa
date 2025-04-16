package pfa.pfa.service.Room;

import org.springframework.stereotype.Service;
import pfa.pfa.entity.Room;

import java.util.List;

@Service
public interface RoomService {
    List<Room> getallroom();

    Room addroom(Room room);

    void deleteroom(long id);

    void updateroom(long id,Room room);
}
