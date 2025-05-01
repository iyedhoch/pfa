package pfa.pfa.service.Room;

import org.springframework.stereotype.Service;
import pfa.pfa.entity.Option;
import pfa.pfa.entity.Room;

import java.util.List;


public interface RoomService {
    Room getroom(long id);

    List<Room> getallroom();

    Room addroom(Room room);

    void deleteroom(long id);

    void updateroom(long id,Room room);
}
