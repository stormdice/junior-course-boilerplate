import { connect } from 'react-redux';
import withInputValidation from '../../HOC/withInputValidation';
import InputPrice from '../InputPrice';
import { setInputValue } from '../../store/actions';

const InputMin = withInputValidation(InputPrice);

const mapStateToProps = ({ min, minProductPrice }) => {
  return {
    value: min,
    placeholder: minProductPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: fieldValue => dispatch(setInputValue('min', fieldValue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputMin);
