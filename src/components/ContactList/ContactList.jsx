
import { ContactListUl, ContactListItem } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <ContactListUl>
      {contacts.map(contact => (
        <ContactListItem key={contact.id}>{contact.name}: {contact.number}</ContactListItem>
      ))}
    </ContactListUl>
  );
  
};
