import {
    COMMENTS_TO_PROPS, PRODUCTS_TO_PROPS, SELECTED_PRODUCTS_TO_PROPS, SET_INDEX_HOVER_STAR_TO_PROPS,
    SET_INDEX_SELECTED_STAR_TO_PROPS, WRITING_TEXT, SET_TOKEN, SET_REGISTERED_USER, CLEAR_PROPS
} from '../actions/api';

const initState = {
    products: [],
    selectedProduct: null,
    productComments: [],
    indexHoverStar: null,
    indexSelectedStar: null,
    textComment: '',
    username: '',
    password: '',
    token: null,
    registeredUser: null

};
export const reducer = (state = initState, {type, payload, field}) => {
    switch (type) {

        case PRODUCTS_TO_PROPS:
            return {
                ...state,
                products: payload
            };
        case CLEAR_PROPS:
            return {
                ...state,
                textComment: "",
                indexHoverStar: null,
                indexSelectedStar: null

            };
        case SET_TOKEN:
            return {
                ...state,
                token: payload
            };
        case SET_REGISTERED_USER:
            return {
                ...state,
                registeredUser: payload
            };
        case SELECTED_PRODUCTS_TO_PROPS:
            return {
                ...state,
                selectedProduct: payload,
                textComment: "",
                indexHoverStar: null,
                indexSelectedStar: null
            };
        case COMMENTS_TO_PROPS:
            return {
                ...state,
                productComments: payload
            };
        case SET_INDEX_HOVER_STAR_TO_PROPS:
            return {
                ...state,
                indexHoverStar: payload
            };
        case SET_INDEX_SELECTED_STAR_TO_PROPS:
            return {
                ...state,
                indexSelectedStar: payload
            };
        case WRITING_TEXT:
            return {
                ...state,
                [field]: payload
            };

        default:
            return state
    }
};














































