import axios from 'axios';

class ContactsApi {
    list() {
        var self = this;
        return axios.get('/api/contacts')
            .then((response) => self.transform(response.data));
    }

    remove(uuid) {
        return axios.delete('api/contacts/' + uuid);
    }

    transform(data) {
        return data.reduce((aggregation, current) => {
            var letter = current.firstName.toUpperCase()[0];

            if (!aggregation[letter]) {
                aggregation[letter] = [current];
            } else {
                aggregation[letter].push(current);
            }

            return aggregation;
        }, {});
    }
}

export default ContactsApi;