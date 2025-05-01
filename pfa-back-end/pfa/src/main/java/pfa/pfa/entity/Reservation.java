package pfa.pfa.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name="reservation")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "date",
            nullable =  false )
    private Date date;

    @Column(name = "start-time",
            nullable =  false )
    private Date start_time;

    @Column(name = "end-time",
            nullable =  false )
    private Date end_time;

    @Column(name ="total-price",
            nullable = false)
    private long total_price;

    @Column(name = "created-at",
            nullable =  false )
    private Date created_at;

    @OneToOne
    private Room room;

    @OneToMany
    @JoinColumn(name = "reservation_id")
    private List<Option> options;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
