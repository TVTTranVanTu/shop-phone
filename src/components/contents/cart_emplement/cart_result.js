import React, { Component } from 'react';

class CartResult extends Component {

    render() {
        var { Cart } = this.props;
        return (
            <div className="result_moneyCart">
                <h2 className="result_name">Result :</h2>
                <p className="show_money">{this.showTotalAmount(Cart)}đ</p>
            </div>
        );
    }
    showTotalAmount = (Cart) => {
        var total = 0;
        if (Cart.length > 0) {
            for (var i = 0; i < Cart.length; i++) {
                total += Cart[i].ListProduct.price * Cart[i].quantity;
            }
        }
        return total;
    }
}

export default CartResult;