package phonebook.domain.command;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.jdbc.core.JdbcTemplate;
import phonebook.domain.entity.Contact;

import java.util.UUID;

import static common.Constants.gustavo;
import static common.Constants.newContact;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Matchers.any;
import static org.mockito.Matchers.anyString;
import static org.mockito.Matchers.eq;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class SaveContactCommandTest {
    @Mock
    private JdbcTemplate jdbcTemplate;

    @InjectMocks
    private SaveContactCommand saveContactCommand;

    @Test
    public void shouldCallJdbcTemplateToInsertTheContact() {
        configureMockFor(newContact);

        UUID uuid = saveContactCommand.run(newContact);

        verifyMockFor(newContact);

        assertThat(newContact.getUuid()).isNull();
        assertThat(uuid).isNotNull();
    }

    @Test
    public void shouldCallJdbcTemplateToUpdateTheContact() {
        configureMockFor(gustavo);

        UUID uuid = saveContactCommand.run(gustavo);

        verifyMockFor(gustavo);

        assertThat(uuid).isEqualByComparingTo(gustavo.getUuid());
    }

    @Test(expected = IllegalArgumentException.class)
    public void shouldValidateAllArguments() {
        saveContactCommand.run(null);
    }

    private void configureMockFor(Contact contact) {
        when(jdbcTemplate.update(anyString(),
                eq(contact.getFirstName()),
                eq(contact.getLastName()),
                eq(contact.getHomePhone()),
                eq(contact.getWorkPhone()),
                eq(contact.getMobilePhone()),
                any(UUID.class))).thenReturn(0);
    }

    private void verifyMockFor(Contact contact) {
        verify(jdbcTemplate).update(anyString(),
                eq(contact.getFirstName()),
                eq(contact.getLastName()),
                eq(contact.getHomePhone()),
                eq(contact.getWorkPhone()),
                eq(contact.getMobilePhone()),
                any(UUID.class));
    }

}