package phonebook.domain.command;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.UUID;

import static org.springframework.util.Assert.notNull;

@Component
public class DeleteContactCommand {

    private static final String SQL_COMMAND = "DELETE FROM contacts WHERE uuid = ?";

    private JdbcTemplate jdbcTemplate;

    @Autowired
    public DeleteContactCommand(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void run(UUID uuid) {
        notNull(uuid, "You must pass a contact UUID to the delete command.");

        jdbcTemplate.update(SQL_COMMAND, uuid);
    }
}
