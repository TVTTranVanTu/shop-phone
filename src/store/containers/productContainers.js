import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhoneCariers from '../../components/contents/phoneCariers';
import { addProduct } from '../actions/index';
class ListProducContainers extends Component {



    render() {

        var { ListProduct } = this.props;
        var { addToCart } = this.props;

        return (
            <PhoneCariers
                ListProduct={ListProduct}
                addToCart={addToCart}
            />
        );
    }


}
const mapStateToProps = (state) => {
    return {
        ListProduct: state.ListProduct
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        addToCart: (ListProduct) => {
            dispatch(addProduct(ListProduct, 1));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListProducContainers);