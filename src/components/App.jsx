import { Component } from "react"
import { Container } from "./Container/Container"
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { nanoid } from 'nanoid';

export class App extends Component {

  state = {
    contacts: [],
    name: ''
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    })
   }

   handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name
    };
   
    this.setState(prevstate =>({
      contacts: [...prevstate.contacts, newContact],
      name: ''
    })
    );
  }

  render() {
const { contacts } = this.state;

    return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.handleSubmit}>
        <label>
          Name
      <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={this.handleChange}
      value={this.state.name}
    />
    </label>
    <button type="submit" >Add contact</button>
    </ContactForm>
    <section>
      <h2>Contacts</h2>
      <ContactList contacts={contacts} />

    </section>
    </Container>
    )
    
  }
};
