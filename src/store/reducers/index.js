import { combineReducers } from 'redux';
import ListProduct from './listProduct';
import Cart from './cart';

const Reducers = combineReducers({
    ListProduct,
    Cart
});

export default Reducers;