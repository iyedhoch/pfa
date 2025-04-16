package pfa.pfa.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pfa.pfa.entity.Room;
import pfa.pfa.service.Room.RoomService;

import java.util.List;

@RequestMapping("/Room")
@RestController
@RequiredArgsConstructor
public class RoomController {
    private final RoomService roomService;

    @GetMapping
    public List<Room> getallrroms() {
        return roomService.getallroom();
    }

    @PostMapping
    public Room addroom(Room room){
        return roomService.addroom(room);

    }

    @PutMapping("{id}")
    public void updateroom(@PathVariable long id ,  Room r){
        roomService.updateroom(id,r);
    }

    @DeleteMapping("{id}")
    public void deleteroom(@PathVariable long id){
        roomService.deleteroom(id);
    }


}
