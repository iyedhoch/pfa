package Mailing;

import jakarta.mail.Message;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.SpringTemplateLoader;
import org.thymeleaf.spring6.SpringTemplateEngine;
import org.thymeleaf.context.Context;

import java.nio.charset.StandardCharsets;

@Service
public class DefaultEmailService implements EmailService {
    @Autowired
    private JavaMailSender emailsender;

    @Autowired
    private SpringTemplateEngine templateEngine;

    @Override
    public void sendMail(AbstractEmailContext email) throws MessagingException {
        MimeMessage message = emailsender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(message,
                MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                        StandardCharsets.UTF_8.name());
        Context context = new Context();
        context.setVariables(email.getContext());
        String emailContent = templateEngine.process(email.getTemplatelocation(), context);

        messageHelper.setTo(email.getTo());
        messageHelper.setFrom(email.getFrom());
        messageHelper.setSubject(email.getSubject());
        messageHelper.setText(emailContent, true);

        emailsender.send(message);


    }
}
