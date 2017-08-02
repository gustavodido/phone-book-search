package phonebook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import phonebook.domain.entity.Contact;
import phonebook.domain.query.ContactsQuery;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/contacts")
public class ContactController {

    private ContactsQuery contactsQuery;

    @Autowired
    public ContactController(ContactsQuery contactsQuery) {
        this.contactsQuery = contactsQuery;
    }

    @GetMapping
    @ResponseStatus(OK)
    public List<Contact> list() {
        return contactsQuery.run();
    }
}