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

    @Column(name ="tottale-price",
            nullable = false)
    private long tottale_price;

    @Column(name = "created-at",
            nullable =  false )
    private Date created_at;

    @OneToOne
    private room room;

    @OneToMany
    private option option;
}
