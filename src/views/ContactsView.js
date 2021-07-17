import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactEditor from '../components/ContactEditor';
import ContactList from '../components/ContactList';
import Finder from '../components/Finder';
import { contactOperations, contactSelectors } from '../store/constact';

class ContactsView extends Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
