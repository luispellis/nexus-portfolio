package com.luispellis.portfolio.contact;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class SmtpContactService implements ContactService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SmtpContactService.class);
    private static final String SUBJECT = "[Nexus Portfolio] Contact";

    private final JavaMailSender mailSender;
    private final ContactMailProperties mailProperties;

    public SmtpContactService(JavaMailSender mailSender, ContactMailProperties mailProperties) {
        this.mailSender = mailSender;
        this.mailProperties = mailProperties;
    }

    @Override
    public void send(ContactRequest request) {
        if (isBlank(mailProperties.recipientEmail()) || isBlank(mailProperties.senderEmail())) {
            throw new ContactDeliveryException("Mail delivery is not configured");
        }

        SimpleMailMessage email = new SimpleMailMessage();
        email.setTo(mailProperties.recipientEmail());
        email.setFrom(mailProperties.senderEmail());
        email.setReplyTo(request.email().trim());
        email.setSubject(SUBJECT);
        email.setText(buildBody(request));

        try {
            mailSender.send(email);
        } catch (MailException exception) {
            LOGGER.error("Contact email delivery failed", exception);
            throw new ContactDeliveryException("Mail delivery failed", exception);
        }
    }

    private String buildBody(ContactRequest request) {
        return """
                New portfolio contact

                Name: %s
                Email: %s

                Message:
                %s
                """.formatted(request.name().trim(), request.email().trim(), request.message().trim());
    }

    private boolean isBlank(String value) {
        return value == null || value.isBlank();
    }
}
