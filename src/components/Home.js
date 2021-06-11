import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    getProducts,
    selectedProductsToProps,
    getComments,
    writingText,
    registrationUser,
    setToken,
    setRegisteredUser
} from '../actions/api';
import { Route, NavLink} from "react-router-dom";
import s from "../css/Home.module.css"
import ViewProductContainer from "./ViewProductContainer";
import _ from 'lodash'
import Registration from "./Registration";
import {Container, Row} from "react-bootstrap";

class Home extends Component {


    componentDidMount() {
        this.props.getProducts()
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if (token) {
            this.props.setToken(token)
            this.props.setRegisteredUser(user)
        }
    }

    selectProduct = (e) => {
        const selectedProduct = _.findLast(this.props.products, el => el.id === e.target.id);
        this.props.getComments(e.target.id);
        this.props.selectedProductsToProps(selectedProduct);

    };

    render() {
        const {products, token, registeredUser} = this.props;
        return (
            <Container>{
                (token) ? <div> Welcome <strong>{registeredUser}</strong></div>
                    :
                    <Registration props={this.props}/>
            }
                <Row>
                    {
                        products.map(el => {
                            return (
                                <div className={s.item} key={el.id} >
                                    <NavLink id={el.id} onClick={(e) => this.selectProduct(e)} to={"/products/" + el.id}
                                             className='nav-link' key={el.id}
                                             activeClassName={s.activeLink}>{el.title}</NavLink>

                                </div>
                            )
                        })
                    }
                </Row>
                <Route path={"/products/:id"} render={() => <ViewProductContainer/>}/>

            </Container>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products,
    username: state.username,
    password: state.password,
    token: state.token,
    registeredUser: state.registeredUser
});


const mapDispatchToProps = dispatch => ({
    getProducts: (id) => dispatch(getProducts(id)),
    selectedProductsToProps: (product) => dispatch(selectedProductsToProps(product)),
    getComments: (product) => dispatch(getComments(product)),
    writingText: (text, field) => dispatch(writingText(text, field)),
    registrationUser: (RegData) => dispatch(registrationUser(RegData)),
    setToken: (token) => dispatch(setToken(token)),
    setRegisteredUser: (user) => dispatch(setRegisteredUser(user)),

});

const AppWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export {AppWithRedux as Home}

