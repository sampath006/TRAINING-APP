import * as actionTypes from "./actionTypes";

export const addToCart = (itemId)=>{
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemId
        }
    }
}
export const removeFromCart = (itemId)=>{
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemId
        }
    }
}
export const changeQuantity = (itemId, value)=>{
    return {
        type: actionTypes.CHANGE_QUANTITY,
        payload: {
            id: itemId,
            qty: value
        }
    }
}
