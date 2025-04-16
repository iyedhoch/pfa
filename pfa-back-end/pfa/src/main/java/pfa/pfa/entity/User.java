package pfa.pfa.entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.Date;

public class User {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private long id;

    @Column(name = "name",
            nullable = false )
    private String name ;

    @Column(name = "email",
           nullable =  false )
    private String email ;

    @Column(name = "password",
            nullable =  false )
    private String password;

    @Column(name = "created-at",
            nullable =  false )
    private Date created_at;

    @OneToMany
    private Reservation reservation;


}
