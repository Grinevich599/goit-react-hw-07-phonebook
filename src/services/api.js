import axios from 'axios';

axios.defaults.baseURL = `https://65cf52b4bdb50d5e5f5b05a4.mockapi.io`;

export const requestsContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async contactData => {
  const { data } = await axios.post('/contacts', contactData);
  return data;
};

export const removeContact = async profileId => {
  const { data } = await axios.delete(`/contacts/${profileId}`);
  return data;
};
