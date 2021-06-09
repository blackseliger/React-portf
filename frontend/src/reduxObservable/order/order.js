import { 
    ORDER_AGREEMENT, 
    ORDER_DEFAULT, 
    ORDER_INPUT_ADDRESS, 
    ORDER_INPUT_PHONE, 
    ORDER_SUBMIT_FAILURE, 
    ORDER_SUBMIT_REQUEST,
    ORDER_SUBMIT_SUCCESS
} from "./actionTypes";


const initialState = {
    loading: false,
    error: null,
    success: false,
    phone: null,
    address: null,
    argeement: false,
};

export function orderReducer(state = initialState, action) {
    switch(action.type) {
        case ORDER_INPUT_PHONE: 
            return {
                ...state,
                phone: action.payload, 
            }
        case ORDER_INPUT_ADDRESS:
            const address = action.payload;
            return {
                ...state,
                address: address,
            }
        case ORDER_AGREEMENT:
            const  agreement= action.payload;
            return {
                ...state, 
                agreement,
            }
        case ORDER_SUBMIT_REQUEST:
            // const data  = action.payload;
            return {
                ...state,
                data: action.payload,
                loading: true,
                error: null,
            }
        case ORDER_SUBMIT_SUCCESS: 
            return {
                ...state,
                loading: false,
                error: null,
                success: true,
            }
        case ORDER_SUBMIT_FAILURE:
                const error = action.payload;
            return {
                ...state, 
                loading: false,
                error
            }
        case ORDER_DEFAULT:
            return {
                ...state,
                loading: false,
                error: null,
                success: false,
            }
        default: 
            return state;
        
    }
}