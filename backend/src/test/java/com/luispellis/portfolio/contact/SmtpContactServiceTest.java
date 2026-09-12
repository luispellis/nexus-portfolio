package com.luispellis.portfolio.contact;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mail.MailSendException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoInteractions;

@ExtendWith(MockitoExtension.class)
class SmtpContactServiceTest {

    @Mock
    private JavaMailSender mailSender;

    @Test
    void sendsPlainTextMessageWithConfiguredSenderRecipientAndReplyTo() {
        SmtpContactService service = new SmtpContactService(
                mailSender,
                new ContactMailProperties("recipient@example.com", "sender@example.com")
        );
        ContactRequest request = new ContactRequest(" Luis ", " luis@example.com ", " Hello from the portfolio. ");

        service.send(request);

        ArgumentCaptor<SimpleMailMessage> messageCaptor = ArgumentCaptor.forClass(SimpleMailMessage.class);
        verify(mailSender).send(messageCaptor.capture());
        SimpleMailMessage message = messageCaptor.getValue();

        assertThat(message.getTo()).containsExactly("recipient@example.com");
        assertThat(message.getFrom()).isEqualTo("sender@example.com");
        assertThat(message.getReplyTo()).isEqualTo("luis@example.com");
        assertThat(message.getSubject()).isEqualTo("[Nexus Portfolio] Contact");
        assertThat(message.getText()).contains("Name: Luis", "Email: luis@example.com", "Hello from the portfolio.");
    }

    @Test
    void translatesMailExceptionsToContactDeliveryException() {
        SmtpContactService service = new SmtpContactService(
                mailSender,
                new ContactMailProperties("recipient@example.com", "sender@example.com")
        );
        doThrow(new MailSendException("SMTP unavailable")).when(mailSender).send(org.mockito.ArgumentMatchers.any(SimpleMailMessage.class));

        assertThatThrownBy(() -> service.send(new ContactRequest("Luis", "luis@example.com", "Hello from the portfolio.")))
                .isInstanceOf(ContactDeliveryException.class)
                .hasMessage("Mail delivery failed");
    }

    @Test
    void doesNotPretendToDeliverWhenMailConfigurationIsMissing() {
        SmtpContactService service = new SmtpContactService(mailSender, new ContactMailProperties("", ""));

        assertThatThrownBy(() -> service.send(new ContactRequest("Luis", "luis@example.com", "Hello from the portfolio.")))
                .isInstanceOf(ContactDeliveryException.class)
                .hasMessage("Mail delivery is not configured");

        verifyNoInteractions(mailSender);
    }
}
