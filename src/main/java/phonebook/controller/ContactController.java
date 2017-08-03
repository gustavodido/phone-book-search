package phonebook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import phonebook.domain.command.DeleteContactCommand;
import phonebook.domain.entity.Contact;
import phonebook.domain.query.ContactsQuery;

import java.util.List;
import java.util.UUID;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/api/contacts")
public class ContactController {

    private ContactsQuery contactsQuery;
    private DeleteContactCommand deleteContactCommand;

    @Autowired
    public ContactController(ContactsQuery contactsQuery, DeleteContactCommand deleteContactCommand) {
        this.contactsQuery = contactsQuery;
        this.deleteContactCommand = deleteContactCommand;
    }

    @GetMapping
    @ResponseStatus(OK)
    public List<Contact> list() {
        return contactsQuery.run();
    }

    @DeleteMapping(path = "/{uuid}")
    @ResponseStatus(OK)
    public void delete(@PathVariable(value = "uuid") UUID uuid) {
        deleteContactCommand.run(uuid);
    }
}