package pfa.pfa.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pfa.pfa.entity.Option;
import pfa.pfa.entity.Reservation;


import pfa.pfa.service.Reservation.ReservationService;


import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/Reservation")
@RestController
@RequiredArgsConstructor
public class ReservationController {
    final private ReservationService reservationservice;

    @GetMapping
    public List<Reservation> getallreservation() {
        return reservationservice.getallreservation();
    }

    @GetMapping("{id}")
    public Reservation getreservation(@PathVariable long id){
        return reservationservice.getreservation(id);
    }

    @PostMapping
    public Reservation addreservation(@RequestBody Reservation reservation){
        return reservationservice.addreservation(reservation);

    }

    @PutMapping("{id}")
    public void updatereservation(@PathVariable long id ,@RequestBody Reservation reservation){
        reservationservice.updatereservation(id,reservation);
    }

    @DeleteMapping("{id}")
    public void deletereservation(@PathVariable long id){
        reservationservice.deletereservation(id);
    }
}
