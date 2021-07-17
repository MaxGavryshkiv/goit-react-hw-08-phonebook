import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { contactAction, contactSelectors } from '../../store/constact';

const Finder = ({ value, onChange }) => (
  <label>
    Фильтр по имени
    <input type="text" value={value} onChange={onChange} />
  </label>
);

Finder.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactAction.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Finder);
