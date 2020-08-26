import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartAdd from '../../components/contents/cart_emplement/cartAdd';
import CartItems from '../../components/contents/cart_emplement/cartItems';
import CartResult from '../../components/contents/cart_emplement/cart_result';
import { updateProductInCart, deleteProductInCart } from '../actions/index';

import * as MESSAGE from '../constans/messages';
class CartContainer extends Component {



    render() {

        var { Cart } = this.props;

        return (
            <CartAdd>
                {this.showCartItems(Cart)}
                {this.showTotalMount(Cart)}
            </CartAdd>
        );
    }
    showCartItems = (Cart) => {
        var result = MESSAGE.MSG_CART_EMPTY;
        var { updateProductInCart, deleteProductInCart } = this.props;
        if (Cart.length > 0) {
            result = Cart.map((item, index) => {
                return (
                    <CartItems
                        key={index}
                        item={item}
                        index={index}
                        updateProductInCart={updateProductInCart}
                        deleteProductInCart={deleteProductInCart}
                    >
                    </CartItems>
                );
            });
        }
        return result;
    }
    showTotalMount = (Cart) => {
        var result = null;
        if (Cart.length > 0) {
            result = <CartResult Cart={Cart} />
        }
        return result;
    }
}
const mapStateToProps = (state) => {
    return {
        Cart: state.Cart
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteProductInCart: (ListProduct) => {
            dispatch(deleteProductInCart(ListProduct))
        },
        updateProductInCart: (ListProduct, quantity) => {
            dispatch(updateProductInCart(ListProduct, quantity))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);