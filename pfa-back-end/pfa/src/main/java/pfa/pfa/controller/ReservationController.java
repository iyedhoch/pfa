package pfa.pfa.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pfa.pfa.entity.Reservation;
import pfa.pfa.entity.User;
import pfa.pfa.service.Reservation.ReservarsationService;


import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/Reservation")
@RestController
@RequiredArgsConstructor
public class ReservationController {
    final private ReservarsationService reservationservice;

    @GetMapping
    public List<Reservation> getallreservation() {
        return reservationservice.getallreservation();
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
