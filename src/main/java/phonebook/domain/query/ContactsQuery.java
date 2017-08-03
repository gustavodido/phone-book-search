package phonebook.domain.query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;
import phonebook.domain.entity.Contact;

import java.util.List;
import java.util.UUID;

@Component
public class ContactsQuery {

    private static final String SQL_QUERY =
            "SELECT uuid, first_name, last_name, home_phone, work_phone, mobile_phone " +
                    "FROM contacts " +
                    "ORDER BY first_name, last_name";

    private JdbcTemplate jdbcTemplate;

    @Autowired
    public ContactsQuery(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Contact> run() {
        RowMapper<Contact> contactRowMapper = (rs, rowNum) ->
                new Contact((UUID) rs.getObject("uuid"),
                        rs.getString("first_name"),
                        rs.getString("last_name"),
                        rs.getString("home_phone"),
                        rs.getString("work_phone"),
                        rs.getString("mobile_phone")
                );

        return jdbcTemplate.query(SQL_QUERY, new Object[]{}, contactRowMapper);
    }
}
