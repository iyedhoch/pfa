package Mailing;

import jakarta.mail.MessagingException;
import org.springframework.stereotype.Service;

@Service
public interface EmailService {
    void sendMail(final AbstractEmailContext email)throws MessagingException;
}
