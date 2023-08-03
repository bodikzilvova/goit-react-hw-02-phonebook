import {
  ContactListUl,
  ContactListItem,
  ButtonDelete,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListUl>
      {contacts.map(contact => (
        <ContactListItem key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonDelete onClick={() => onDeleteContact(contact.id)}>
            Delete
          </ButtonDelete>
        </ContactListItem>
      ))}
    </ContactListUl>
  );
};
