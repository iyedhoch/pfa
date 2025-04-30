package pfa.pfa.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name="securetoken")
public class SecureToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(unique = true)
    private String token;

    @Column(updatable = false)
    @Basic(optional = false)
    private LocalDateTime expiredat;

    @ManyToOne
    @JoinColumn(name="user_id",referencedColumnName = "user")
    private User user;
}
