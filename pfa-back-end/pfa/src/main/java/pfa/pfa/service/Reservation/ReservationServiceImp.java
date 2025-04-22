package pfa.pfa.service.Reservation;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;
import pfa.pfa.entity.Option;
import pfa.pfa.entity.Reservation;
import repositories.ReservationRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public abstract class ReservationServiceImp implements ReservarsationService{
    private final ReservationRepository reservationRepository;

    @Override
    public Reservation addreservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    @Override
    public Reservation getreservation(long id){
        return reservationRepository.findById(id).orElseThrow();
    }

    @Override
    public List<Reservation> getallreservation() {
        return reservationRepository.findAll();
    }

    @Override
    public void deletereservation(long id) {
        reservationRepository.deleteById(id);
    }

    @Override
    public void updatereservation(long id, Reservation reservation) {
        Reservation existingReservation = reservationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reservation not found"));

        // Updating the existing fields with the new reservation data
        existingReservation.setDate(reservation.getDate());
        existingReservation.setStart_time(reservation.getStart_time());
        existingReservation.setEnd_time(reservation.getEnd_time());
        existingReservation.setTotal_price(reservation.getTotal_price());
        existingReservation.setCreated_at(reservation.getCreated_at());
        existingReservation.setRoom(reservation.getRoom());
        existingReservation.setOptions(reservation.getOptions()); // assuming you want to update the options as well

        reservationRepository.save(existingReservation); // Save the updated reservation
    }



}
