import { Component } from "react"
import { Container } from "./Container/Container"
import { NameForm } from "./NameForm/NameForm";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {

  state = {
    contacts: [],
    name: ''
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    })
    console.log(target.value)
   }

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedContacts = [...this.state.contacts];
    updatedContacts.push(this.state.name);

    this.setState({
      contacts: updatedContacts,
      name: ''
    });
  }


  render() {
const { contacts } = this.state;
console.log(contacts)

    return (
    <Container>
      <h1>Phonebook</h1>
      <NameForm onSubmit={this.handleSubmit}>
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
    </NameForm>
    <section>
      <h2>Contacts</h2>
      <ContactList contacts={contacts} />

    </section>
    </Container>
    )
    
  }
};
