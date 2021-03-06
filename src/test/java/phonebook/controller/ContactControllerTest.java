package phonebook.controller;

import com.google.gson.Gson;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import phonebook.domain.command.DeleteContactCommand;
import phonebook.domain.command.SaveContactCommand;
import phonebook.domain.query.ContactsQuery;

import static common.Constants.gustavo;
import static common.Constants.tuany;
import static java.util.Arrays.asList;
import static org.hamcrest.Matchers.hasItems;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(ContactController.class)
public class ContactControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ContactsQuery contactsQuery;

    @MockBean
    private DeleteContactCommand deleteContactCommand;

    @MockBean
    private SaveContactCommand saveContactCommand;

    @Test
    public void contactsShouldListAllContacts() throws Exception {
        when(contactsQuery.run()).thenReturn(asList(gustavo, tuany));

        mockMvc.perform(get("/api/contacts"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*].uuid", hasItems(gustavo.getUuid().toString(), tuany.getUuid().toString())))
                .andExpect(jsonPath("$[*].firstName", hasItems(gustavo.getFirstName(), tuany.getFirstName())))
                .andExpect(jsonPath("$[*].lastName", hasItems(gustavo.getLastName(), tuany.getLastName())))
                .andExpect(jsonPath("$[*].homePhone", hasItems(gustavo.getHomePhone(), tuany.getHomePhone())))
                .andExpect(jsonPath("$[*].workPhone", hasItems(gustavo.getWorkPhone(), tuany.getWorkPhone())))
                .andExpect(jsonPath("$[*].mobilePhone", hasItems(gustavo.getMobilePhone(), tuany.getMobilePhone())));
    }

    @Test
    public void contactShouldBeRemoved() throws Exception {
        doNothing().when(deleteContactCommand).run(gustavo.getUuid());

        mockMvc.perform(delete("/api/contacts/" + gustavo.getUuid()))
                .andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    public void contactShouldBeAdded() throws Exception {
        when(saveContactCommand.run(gustavo)).thenReturn(gustavo.getUuid());

        Gson serializer = new Gson();
        String json = serializer.toJson(gustavo);

        mockMvc.perform(post("/api/contacts")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andDo(print())
                .andExpect(status().isOk());
    }

}