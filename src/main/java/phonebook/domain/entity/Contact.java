package phonebook.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Value;

import java.util.UUID;

import static java.lang.String.format;

@Value
@AllArgsConstructor
public class Contact {
    private UUID uuid;
    private String firstName;
    private String lastName;
    private String homePhone;
    private String workPhone;
    private String mobilePhone;

    public String getFullName() {
        return format("%s %s", firstName, lastName);
    }
}
