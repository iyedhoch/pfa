package pfa.pfa.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.domain.Auditable;


import javax.management.relation.Role;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Table(name="user")
public class User{
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

    private Boolean acountverified;

    private Boolean logindisabled;

    Set<Role> roles = new HashSet<>();
    @OneToMany
    Set<SecureToken> token;

    @OneToMany
    private Reservation reservation;


}
