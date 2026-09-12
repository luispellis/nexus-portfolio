package com.luispellis.portfolio;

import com.luispellis.portfolio.contact.ContactController;
import com.luispellis.portfolio.contact.ContactDeliveryException;
import com.luispellis.portfolio.contact.ContactService;
import com.luispellis.portfolio.health.HealthController;
import com.luispellis.portfolio.shared.api.ApiExceptionHandler;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
class ApiControllerTest {

    private MockMvc mockMvc;

    @Mock
    private ContactService contactService;

    @BeforeEach
    void setUp() {
        LocalValidatorFactoryBean validator = new LocalValidatorFactoryBean();
        validator.afterPropertiesSet();
        mockMvc = MockMvcBuilders.standaloneSetup(new HealthController(), new ContactController(contactService))
                .setControllerAdvice(new ApiExceptionHandler())
                .setValidator(validator)
                .build();
    }

    @Test
    void healthReturnsUp() throws Exception {
        mockMvc.perform(get("/api/v1/health"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("UP"));
    }

    @Test
    void validContactRequestReturnsNoContentAndInvokesService() throws Exception {
        mockMvc.perform(post("/api/v1/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"Luis\",\"email\":\"luis@example.com\",\"message\":\"Hello from the portfolio.\"}"))
                .andExpect(status().isNoContent());

        verify(contactService).send(any());
    }

    @Test
    void blankNameReturnsControlledValidationError() throws Exception {
        mockMvc.perform(post("/api/v1/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\" \",\"email\":\"luis@example.com\",\"message\":\"Hello from the portfolio.\"}"))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.code").value("VALIDATION_ERROR"))
                .andExpect(jsonPath("$.fieldErrors.name").exists())
                .andExpect(jsonPath("$.trace").doesNotExist());
    }

    @Test
    void invalidEmailReturnsControlledValidationError() throws Exception {
        mockMvc.perform(post("/api/v1/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"Luis\",\"email\":\"not-an-email\",\"message\":\"Hello from the portfolio.\"}"))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.fieldErrors.email").exists());
    }

    @Test
    void tooShortMessageReturnsControlledValidationError() throws Exception {
        mockMvc.perform(post("/api/v1/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"Luis\",\"email\":\"luis@example.com\",\"message\":\"Too short\"}"))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.fieldErrors.message").exists());
    }

    @Test
    void oversizedValuesReturnControlledValidationError() throws Exception {
        String oversizedName = "x".repeat(101);
        mockMvc.perform(post("/api/v1/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"%s\",\"email\":\"luis@example.com\",\"message\":\"Hello from the portfolio.\"}".formatted(oversizedName)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.fieldErrors.name").exists());
    }

    @Test
    void oversizedMessageReturnsControlledValidationError() throws Exception {
        String oversizedMessage = "x".repeat(4001);
        mockMvc.perform(post("/api/v1/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"Luis\",\"email\":\"luis@example.com\",\"message\":\"%s\"}".formatted(oversizedMessage)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.fieldErrors.message").exists());
    }

    @Test
    void deliveryFailureReturnsControlledServiceUnavailableResponse() throws Exception {
        doThrow(new ContactDeliveryException("Mail delivery failed")).when(contactService).send(any());

        mockMvc.perform(post("/api/v1/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"Luis\",\"email\":\"luis@example.com\",\"message\":\"Hello from the portfolio.\"}"))
                .andExpect(status().isServiceUnavailable())
                .andExpect(jsonPath("$.code").value("CONTACT_DELIVERY_FAILED"))
                .andExpect(jsonPath("$.message").value("Unable to send contact message at this time"));
    }
}
