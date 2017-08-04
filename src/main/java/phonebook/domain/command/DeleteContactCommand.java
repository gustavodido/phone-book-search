package phonebook.domain.command;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.UUID;

import static org.springframework.util.Assert.notNull;

@Component
public class DeleteContactCommand {

    @Value("${database.contact.delete}")
    private String sqlCommand;

    private JdbcTemplate jdbcTemplate;

    @Autowired
    public DeleteContactCommand(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void run(UUID uuid) {
        notNull(uuid, "You must pass a contact UUID to the delete command.");

        jdbcTemplate.update(sqlCommand, uuid);
    }
}
