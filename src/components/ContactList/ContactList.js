import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './ContactList.module.css';

import { contactOperations, contactSelectors } from '../../store/constact';

const ContactList = ({ contacts, onDeleteContact }) => (
  <>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.listItem}>
          <p>
            {name}:{number}
          </p>
          <button
            className={styles.bttn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: contactSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
