package pfa.pfa.entity;

import jakarta.persistence.*;

import java.util.Date;

public class Reservation {
    @Id
    @GeneratedValue
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
    private Option option;
}
