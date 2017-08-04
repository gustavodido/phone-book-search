package phonebook.domain.command;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.UUID;

import static common.Constants.gustavo;
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
        when(jdbcTemplate.update(anyString(),
                any(UUID.class),
                eq(gustavo.getFirstName()),
                eq(gustavo.getLastName()),
                eq(gustavo.getHomePhone()),
                eq(gustavo.getWorkPhone()),
                eq(gustavo.getMobilePhone()))).thenReturn(0);

        saveContactCommand.run(gustavo);

        verify(jdbcTemplate).update(anyString(),
                any(UUID.class),
                eq(gustavo.getFirstName()),
                eq(gustavo.getLastName()),
                eq(gustavo.getHomePhone()),
                eq(gustavo.getWorkPhone()),
                eq(gustavo.getMobilePhone()));
    }

    @Test(expected = IllegalArgumentException.class)
    public void shouldValidateAllArguments() {
        saveContactCommand.run(null);
    }

}