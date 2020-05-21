import withInputValidation from '../../HOC/withInputValidation';
import InputPrice from '../InputPrice';
import DiscountForm from '../DiscountForm';

const InputFrom = withInputValidation(InputPrice);
const InputBefore = withInputValidation(InputPrice);
const InputDiscount = withInputValidation(DiscountForm);

export { InputFrom, InputBefore, InputDiscount };
