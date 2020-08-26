import * as types from '../constans/index';
import Phone from '../../Data/phone';

var initalState = Phone ? Phone : [];



var ListProduct = (state = initalState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;

        default:

            return state;
    }
}

export default ListProduct;  