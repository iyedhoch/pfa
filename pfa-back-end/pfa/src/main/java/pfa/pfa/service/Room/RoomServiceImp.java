package pfa.pfa.service.Room;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;
import pfa.pfa.entity.Room;
import repositories.RoomRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public abstract class RoomServiceImp implements RoomService{
    private final RoomRepository roomRepository;

    @Override
    public List<Room> getallroom() {
        return roomRepository.findAll();
    }

    @Override
    public Room addroom(Room room) {
        return roomRepository.save(room);
    }

    @Override
    public void deleteroom(long id) {
        roomRepository.deleteById(id);
    }

    @Override
    public void updateroom(long id, Room room) {
        Room existingRoom = roomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Room not found"));

        existingRoom.setPrice(room.getPrice()); // Update other fields if any

        roomRepository.save(existingRoom); // Save the updated room
    }
}
