import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import { Contact } from '../Contact/Contact';
import { StyledContactList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledContactList>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} key={contact.id} />{' '}
        </li>
      ))}
    </StyledContactList>
  );
};
