import React, { Component } from 'react';

class CartItems extends Component {

    render() {

        var { item } = this.props;
        return (
            <li className="productItem">

                <div className="productItem_content">
                    <div className="productItem_image">
                        <img src={require(`../../../assets/img/${item.ListProduct.image}`)} alt="" />
                    </div>
                    <article className="productItem_text">
                        <h3 className="productItem_name">{item.ListProduct.name}</h3>
                        <p className="productItem_price">{item.ListProduct.price}</p>
                    </article>
                    <div className="productItem_amount">
                        <p className="amount_product">{item.quantity}</p>
                        <div className="buttChangeQuantity">
                            <label className="subQuantity">
                                <button onClick={() => this.subQuantity(item.ListProduct, item.quantity - 1)}>—</button>
                            </label>
                            <label className="addQuantity">
                                <button onClick={() => this.subQuantity(item.ListProduct, item.quantity + 1)}>+</button>
                            </label>
                        </div>

                    </div>
                    <div className="result_money">
                        <p>{item.ListProduct.price * item.quantity}đ</p>
                    </div>
                    <button type="button" className="removeProduct"
                        onClick={() => this.removeProductInCart(item.ListProduct)}>
                        remove
                    </button>


                </div>

            </li>


        )
    }
    subQuantity = (ListProduct, quantity) => {
        if (quantity > 0) {
            var { updateProductInCart } = this.props;
            updateProductInCart(ListProduct, quantity)
        }
    }
    removeProductInCart = (ListProduct) => {
        var { deleteProductInCart } = this.props;
        deleteProductInCart(ListProduct)
    }
}

export default CartItems;