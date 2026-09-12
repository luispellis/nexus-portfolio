package com.luispellis.portfolio.contact;

public class ContactDeliveryException extends RuntimeException {

    public ContactDeliveryException(String message) {
        super(message);
    }

    public ContactDeliveryException(String message, Throwable cause) {
        super(message, cause);
    }
}
