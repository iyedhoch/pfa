package pfa.pfa.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pfa.pfa.entity.Option;
import pfa.pfa.entity.Room;
import pfa.pfa.service.Room.RoomService;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/Room")
@RestController
@RequiredArgsConstructor
public class RoomController {
    private final RoomService roomService;

    @GetMapping
    public List<Room> getallrroms() {
        return roomService.getallroom();
    }

    @GetMapping("{id}")
    public Room getroom(@PathVariable long id){
        return roomService.getroom(id);
    }

    @PostMapping
    public Room addroom(@RequestBody Room room){
        return roomService.addroom(room);

    }

    @PutMapping("{id}")
    public void updateroom(@PathVariable long id ,@RequestBody  Room r){
        roomService.updateroom(id,r);
    }

    @DeleteMapping("{id}")
    public void deleteroom(@PathVariable long id){
        roomService.deleteroom(id);
    }


}
