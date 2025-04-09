package pfa.pfa.entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

public class Room {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private long id;

    @Column(name = "price")
    private long price;
}
