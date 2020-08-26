import * as types from '../constans/index';

export const listAll = () =>{
    return{
        type:types.LIST_ALL
    }
}
export const addProduct = (ListProduct,quantity) =>{
    return{
        type:types.ADD_TO_CART,
        ListProduct,
        quantity
    }
}
export const deleteProductInCart = (ListProduct)=>{
    return{
        type:types.DELETE_PRODUCT_TO_CART,
        ListProduct
    }
}
export const updateProductInCart = (ListProduct,quantity)=>{
    return{
        type:types.UPDATE_TO_CART,
        ListProduct,
        quantity
    }
}
