import withInput from '../withInput';
import InputNumber from '../InputNumber';
import DiscountForm from '../DiscountForm';

const InputFrom = withInput(InputNumber);
const InputBefore = withInput(InputNumber);
const InputDiscount = withInput(DiscountForm);

export { InputFrom, InputBefore, InputDiscount };
