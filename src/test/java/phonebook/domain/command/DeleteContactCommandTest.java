package phonebook.domain.command;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.jdbc.core.JdbcTemplate;

import static common.Constants.gustavo;
import static org.mockito.Matchers.anyString;
import static org.mockito.Matchers.eq;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class DeleteContactCommandTest {

    @Mock
    private JdbcTemplate jdbcTemplate;

    @InjectMocks
    private DeleteContactCommand deleteContactCommand;

    @Test
    public void shouldCallJdbcTemplateToDeleteTheContact() {
        when(jdbcTemplate.update(anyString(), eq(gustavo.getUuid()))).thenReturn(0);

        deleteContactCommand.run(gustavo.getUuid());

        verify(jdbcTemplate).update(anyString(), eq(gustavo.getUuid()));
    }

    @Test(expected = IllegalArgumentException.class)
    public void shouldValidateAllArguments() {
        deleteContactCommand.run(null);
    }
}
