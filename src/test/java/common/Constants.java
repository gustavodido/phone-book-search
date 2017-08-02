package common;

import phonebook.domain.entity.Contact;

public final class Constants {
    private Constants() {
        // restrict instantiation
    }

    public static final Contact gustavo = new Contact("Gustavo", "Domenico");
    public static final Contact tuany = new Contact("Tuany", "Muller");
}
