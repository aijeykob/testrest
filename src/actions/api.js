import axios from "axios";


export const PRODUCTS_TO_PROPS = "PRODUCTS_TO_PROPS";
export const SELECTED_PRODUCTS_TO_PROPS = "SELECTED_PRODUCTS_TO_PROPS";
export const COMMENTS_TO_PROPS = "COMMENTS_TO_PROPS";
export const SET_INDEX_HOVER_STAR_TO_PROPS = "SET_INDEX_HOVER_STAR_TO_PROPS";
export const SET_INDEX_SELECTED_STAR_TO_PROPS = "SET_INDEX_SELECTED_STAR_TO_PROPS";
export const WRITING_TEXT = "WRITING_TEXT";
export const SET_TOKEN = "SET_TOKEN";
export const SET_REGISTERED_USER = "SET_REGISTERED_USER";
export const CLEAR_PROPS = "CLEAR_PROPS";

const apiUrl = "http://smktesting.herokuapp.com/";


export const getProducts = () => dispatch => {
    axios.get(`${apiUrl}api/products/`,)
        .then(res => {

            dispatch(productsToProps(res.data))


        })
};
export const getComments = (id) => dispatch => {
    axios.get(`${apiUrl}api/reviews/${id}`,)
        .then(res => {

            dispatch(commentsToProps(res.data.reverse()))


        })
};
export const registrationUser = ({username, password}) => dispatch => {
    axios.post(`${apiUrl}api/register/`, {username, password})
        .then(res => {

            if (res.data.success === true) {
                dispatch(setToken(res.data.token));
                localStorage.setItem('token', res.data.token);
                dispatch(setRegisteredUser(username));
                localStorage.setItem('user', username)
            }
        })
};

export const postComment = ({textComment, indexSelectedStar, id, token}) => dispatch => {
    axios
        .post(
            `${apiUrl}api/reviews/${id}`,
            {
                rate: indexSelectedStar + 1,
                text: textComment,
            },
            {
                headers: {
                    'Authorization': `Token ${token}`
                }
            }
        )
        .then(res => {
            dispatch(clearProps());
            dispatch(getComments(id));
        })
};


export const productsToProps = (products) => ({

    type: PRODUCTS_TO_PROPS, payload: products
});
export const setToken = (token) => ({

    type: SET_TOKEN, payload: token
});
export const setRegisteredUser = (registeredUser) => ({

    type: SET_REGISTERED_USER, payload: registeredUser
});

export const selectedProductsToProps = (product) => ({

    type: SELECTED_PRODUCTS_TO_PROPS, payload: product
});
export const commentsToProps = (comments) => ({

    type: COMMENTS_TO_PROPS, payload: comments
});

export const setIndexHoverStarToProps = (i) => ({

    type: SET_INDEX_HOVER_STAR_TO_PROPS, payload: i
});

export const setIndexSelectedStarToProps = (i) => ({

    type: SET_INDEX_SELECTED_STAR_TO_PROPS, payload: i
});

export const writingText = (text, field) => ({

    type: WRITING_TEXT, payload: text, field
});
export const clearProps = (clear) => ({

    type: CLEAR_PROPS, payload: clear
});










































