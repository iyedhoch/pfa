package pfa.pfa.entity;

import jakarta.persistence.*;
import lombok.Data;


import java.util.Date;
@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @Column(name= "isAdmin")
    private Boolean isadmin=false;

    @OneToMany
    private Reservation reservation;


}
