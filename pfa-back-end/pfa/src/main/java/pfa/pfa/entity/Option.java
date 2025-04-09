package pfa.pfa.entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

public class Option {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private long id;

    @Column(name = "name",
            nullable = false )
    private String name ;

    @Column(name = "price")
    private long price;
}
