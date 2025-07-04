package pfa.pfa.service.Reservation;

import org.springframework.stereotype.Service;
import pfa.pfa.entity.Reservation;

import java.util.List;


public interface ReservationService {
    Reservation getreservation(long id);

    Reservation addreservation(Reservation reservation);

    List<Reservation> getallreservation();

    void deletereservation(long id);

    void updatereservation(long id,Reservation reservation);
}
