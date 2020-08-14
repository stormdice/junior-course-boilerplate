import withInputValidation from '../../HOC/withInputValidation';
import InputPrice from '../InputPrice';
import Discount from '../Discount';

const InputMin = withInputValidation(InputPrice);
const InputMax = withInputValidation(InputPrice);
const InputDiscount = withInputValidation(Discount);

export { InputMin, InputMax, InputDiscount };
