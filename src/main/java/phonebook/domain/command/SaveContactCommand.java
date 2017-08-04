package phonebook.domain.command;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import phonebook.domain.entity.Contact;

import java.util.UUID;

import static org.springframework.util.Assert.notNull;

public class SaveContactCommand {

    private static final String INSERT_COMMAND =
            "INSERT INTO contacts (uuid, firstName, lastName, homePhone, workPhone, mobilePhone)" +
                    " VALUES (?, ?, ?, ?, ?, ?)";

    private JdbcTemplate jdbcTemplate;

    @Autowired
    public SaveContactCommand(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public UUID run(Contact contact) {
        notNull(contact, "You must pass a contact to the save command.");

        UUID uuid = UUID.randomUUID();

        jdbcTemplate.update(INSERT_COMMAND,
                uuid,
                contact.getFirstName(),
                contact.getLastName(),
                contact.getHomePhone(),
                contact.getWorkPhone(),
                contact.getMobilePhone());

        return uuid;
    }
}
