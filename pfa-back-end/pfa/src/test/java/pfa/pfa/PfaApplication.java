package pfa.pfa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@EntityScan("pfa.pfa.entity")
@SpringBootApplication
public class PfaApplication {
    public static void main(String[] args) {
        SpringApplication.run(PfaApplication.class, args);
    }
}
