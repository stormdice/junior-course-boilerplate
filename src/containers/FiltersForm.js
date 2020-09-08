import React from 'react';
import { connect } from 'react-redux';
import { setInputValue } from '../store/actions';
import FiltersFormView from '../components/FiltersForm';

const FiltersForm = ({ maxProductPrice, setInputValue }) => {
  const getChangeHandlerFor = maxPrice => fieldName => {
    return fieldValue => {
      if (fieldName === 'min' && fieldValue > maxPrice) {
        return;
      }

      if (fieldName === 'discount' && fieldValue > 100) {
        return fieldValue;
      }

      setInputValue(fieldName, fieldValue);
    };
  };

  return (
    <FiltersFormView handleInputChange={getChangeHandlerFor(maxProductPrice)} />
  );
};

const mapStateToProps = ({ maxProductPrice }) => {
  return {
    maxProductPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setInputValue: (fieldName, fieldValue) =>
      dispatch(setInputValue(fieldName, fieldValue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersForm);
