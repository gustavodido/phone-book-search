package phonebook.domain.command;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import phonebook.domain.entity.Contact;

import java.util.UUID;

import static org.springframework.util.Assert.notNull;

@Component
public class SaveContactCommand {

    @Value("${database.contact.insert}")
    private String insertCommand;

    @Value("${database.contact.update}")
    private String updateCommand;

    private JdbcTemplate jdbcTemplate;

    @Autowired
    public SaveContactCommand(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public UUID run(Contact contact) {
        notNull(contact, "You must pass a contact to the save command.");

        UUID uuid = contact.getUuid();
        String sqlCommand = updateCommand;

        if (contact.getUuid() == null) {
            uuid = UUID.randomUUID();
            sqlCommand = insertCommand;
        }

        jdbcTemplate.update(sqlCommand,
                contact.getFirstName(),
                contact.getLastName(),
                contact.getHomePhone(),
                contact.getWorkPhone(),
                contact.getMobilePhone(),
                uuid);

        return uuid;
    }


}
