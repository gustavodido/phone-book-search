package phonebook.domain.query;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import phonebook.domain.entity.Contact;

import java.util.List;

import static common.Constants.gustavo;
import static java.util.Collections.singletonList;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Matchers.any;
import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class ContactsQueryTest {

    @Mock
    private JdbcTemplate jdbcTemplate;

    @InjectMocks
    private ContactsQuery contactsQuery;

    @Test
    public void shouldCallJdbcTemplateToGetTheContacts() {
        when(jdbcTemplate.query(anyString(), any(Object[].class), any(RowMapper.class)))
                .thenReturn(singletonList(gustavo));

        List<Contact> contacts = contactsQuery.run();

        verify(jdbcTemplate).query(anyString(), any(Object[].class), any(RowMapper.class));

        assertThat(contacts).containsExactly(gustavo);
    }

}