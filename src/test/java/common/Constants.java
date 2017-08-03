package common;

import phonebook.domain.entity.Contact;

import java.util.UUID;

public final class Constants {
    private Constants() {
        // restrict instantiation
    }

    public static final Contact gustavo = new Contact(UUID.randomUUID(), "Gustavo", "Domenico", "123", "456", "789");
    public static final Contact tuany = new Contact(UUID.randomUUID(), "Tuany", "Muller", "987", "654", "321");
}
