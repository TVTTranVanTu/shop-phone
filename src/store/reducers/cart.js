import * as types from '../constans/index';
// import Phone from '../../Data/phone';
// import ListProducts from './listProduct';

var initalState = [
    {
        ListProduct: {
            id: 1,
            image: `phone1.jpg`,
            name: "Vsmart",
            price: 5000000,
            start: 4
        },
        quantity: 6
    },
    {
        ListProduct: {
            id: 2,
            image: `phone2.jpg`,
            name: "Xioumi",
            price: 5000000,
            start: 4
        },
        quantity: 3
    }
];



const Cart = (state = initalState, action) => {
    var { ListProduct, quantity } = action;
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findIdToCart(state, ListProduct);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    ListProduct,
                    quantity
                });
            }
            return [...state];
        case types.DELETE_PRODUCT_TO_CART:
            index = findIdToCart(state, ListProduct);
            if (index !== -1) {
                state.splice(ListProduct, 1);
            }
            return [...state];

        case types.UPDATE_TO_CART:
            index = findIdToCart(state, ListProduct);
            if (index !== -1) {
                state[index].quantity = quantity;
            }
            return [...state];

        default:
            return [...state];
    }
}

var findIdToCart = (Cart, ListProduct) => {
    var index = -1;
    if (Cart.length > 0) {
        for (var i = 0; i < Cart.length; i++) {
            if (Cart[i].ListProduct.id === ListProduct.id) {
                index = i;
                break;
            }


        }
    }
    return index;
}
export default Cart;  