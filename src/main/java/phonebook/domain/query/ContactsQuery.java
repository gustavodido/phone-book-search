package phonebook.domain.query;

import org.springframework.stereotype.Component;
import phonebook.domain.entity.Contact;

import java.util.List;

import static java.util.Arrays.asList;

@Component
public class ContactsQuery {
    public List<Contact> run () {
        return asList(
                new Contact("Gustavo", "Domenico"),
                new Contact("Guilherme", "Dias"),
                new Contact("Daniela", "Krizmsy"),
                new Contact("Tuany", "Domenico"));
    }
}
