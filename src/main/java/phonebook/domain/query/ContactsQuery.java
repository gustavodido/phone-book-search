package phonebook.domain.query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;
import phonebook.domain.entity.Contact;

import java.util.List;
import java.util.UUID;

@Component
public class ContactsQuery {

    @Value("${database.contact.list}")
    private String sqlQuery;

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

        return jdbcTemplate.query(sqlQuery, new Object[]{}, contactRowMapper);
    }
}
