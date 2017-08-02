package phonebook.controller;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import phonebook.domain.query.ContactsQuery;

import static common.Constants.gustavo;
import static common.Constants.tuany;
import static java.util.Arrays.asList;
import static org.hamcrest.Matchers.hasItems;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(ContactController.class)
public class ContactControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ContactsQuery query;

    @Test
    public void contactsShouldListAllContacts() throws Exception {
        when(query.run()).thenReturn(asList(gustavo, tuany));

        mockMvc.perform(get("/api/contacts"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*].firstName", hasItems(gustavo.getFirstName(), tuany.getFirstName())))
                .andExpect(jsonPath("$[*].lastName", hasItems(gustavo.getLastName(), tuany.getLastName())));
    }

}