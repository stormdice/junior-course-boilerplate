import { connect } from 'react-redux';
import withInputValidation from '../../HOC/withInputValidation';
import InputPrice from '../InputPrice';
import { setInputValue } from '../../store/actions';

const InputMax = withInputValidation(InputPrice);

const mapStateToProps = ({ max, maxProductPrice }) => {
  return {
    value: max,
    placeholder: maxProductPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: fieldValue => dispatch(setInputValue('max', fieldValue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputMax);
