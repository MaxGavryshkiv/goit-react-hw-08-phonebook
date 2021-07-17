import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactEditor from './components/ContactEditor';
import ContactList from './components/ContactList';
import Finder from './components/Finder';
import { contactOperations, contactSelectors } from './store/constact';

class App extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    return (
      <>
        <h1>Phonebook </h1>
        <ContactEditor />
        <h2>Contacts</h2>
        <Finder />
        {this.props.isLoadingContacts && <h1>...Loading</h1>}
        <ContactList />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(contactOperations.fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
