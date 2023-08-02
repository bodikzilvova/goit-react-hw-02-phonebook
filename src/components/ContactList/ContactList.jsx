import { nanoid } from 'nanoid';
import { ContactListUl, ContactListItem } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <ContactListUl>
      {contacts.map(contact => (
        <ContactListItem key={nanoid()}>{contact}</ContactListItem>
      ))}
    </ContactListUl>
  );
};
