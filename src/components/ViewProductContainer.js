import React from 'react';
import {connect} from 'react-redux'

import ViewProduct from "./ViewProduct";
import {
    getProducts,
    setIndexHoverStarToProps,
    setIndexSelectedStarToProps,
    postComment,
    writingText
} from "../actions/api";


let mapStateToProps = state => ({
    products: state.products,
    selectedProduct: state.selectedProduct,
    productComments: state.productComments,
    indexHoverStar: state.indexHoverStar,
    indexSelectedStar: state.indexSelectedStar,
    textComment: state.textComment,
    token: state.token
})

let mapDispatchToProps = dispatch => ({

    getProducts: () => dispatch(getProducts()),
    setIndexHoverStarToProps: (i) => dispatch(setIndexHoverStarToProps(i)),
    setIndexSelectedStarToProps: (i) => dispatch(setIndexSelectedStarToProps(i)),
    postComment: (PostData) => dispatch(postComment(PostData)),
    writingText: (text, field) => dispatch(writingText(text, field))
})

const ViewProductContainer = connect(mapStateToProps, mapDispatchToProps)(ViewProduct)

export default ViewProductContainer














































