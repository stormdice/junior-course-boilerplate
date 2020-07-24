import withInputValidation from '../../HOC/withInputValidation';
import InputPrice from '../InputPrice';
import DiscountForm from '../DiscountForm';

const InputMin = withInputValidation(InputPrice);
const InputMax = withInputValidation(InputPrice);
const InputDiscount = withInputValidation(DiscountForm);

export { InputMin, InputMax, InputDiscount };
