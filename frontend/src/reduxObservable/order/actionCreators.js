
import { 
    ORDER_AGREEMENT, 
    ORDER_INPUT_ADDRESS, 
    ORDER_INPUT_PHONE,
    ORDER_SUBMIT_FAILURE,
    ORDER_SUBMIT_SUCCESS,
    ORDER_SUBMIT_REQUEST,
    ORDER_DEFAULT
} from "./actionTypes";


export const orderAgrement = (agreement) => ({
    type: ORDER_AGREEMENT, payload: agreement,
});

export const orderInputAddress = (address) => ({
    type: ORDER_INPUT_ADDRESS, payload: address,
});

export const orderInputPhone = (phone) => ({
    type: ORDER_INPUT_PHONE, payload: phone,
});

export const orderSubmitRequest = (data) => ({
    type: ORDER_SUBMIT_REQUEST, payload: data,
});

export const orderSubmitSuccess = () => ({
    type: ORDER_SUBMIT_SUCCESS,
});

export const orderSubmitFailure = (error) => ({
    type: ORDER_SUBMIT_FAILURE, payload: error,
})

export const orderDefault = () => ({
    type: ORDER_DEFAULT, 
})