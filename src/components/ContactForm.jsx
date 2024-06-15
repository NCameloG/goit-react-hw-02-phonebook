import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addContact(name, number);
    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <input
          className="Input"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Enter Name"
          required
        />
        <input
          className="Input"
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          placeholder="Enter Phone number"
          required
        />
        <button className="Button" type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
