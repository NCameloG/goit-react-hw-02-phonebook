import React, { Component } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import 'components/Contacts.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: '',
    };
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    this.setState({
      contacts: [...contacts, { id: Math.random().toString(), name, number }],
    });
  };

  deleteContact = id => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: updatedContacts });
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} setFilter={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
