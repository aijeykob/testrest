import React, {Fragment} from 'react';
import {Redirect} from 'react-router';
import {Card} from "react-bootstrap";
import ProductComments from "./ProductComments";


const ViewProduct = (props) => {
    return (
        <div>
            {
                (props.selectedProduct) ? (
                    <Fragment>
                        <div className="container">
                            <div className="row">
                                <div className="col">

                                    <Card style={{width: '18rem'}}>
                                        <Card.Title>{props.selectedProduct.title}</Card.Title>
                                        <Card.Img variant="top"
                                                  src={`http://smktesting.herokuapp.com/static/${props.selectedProduct.img}`}/>
                                        <Card.Body>
                                            <Card.Title>Product Description :</Card.Title>
                                            <Card.Text>{props.selectedProduct.text}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col">
                                    <ProductComments props={props}/>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                ) : <Redirect to='/'/>
            }

        </div>

    )
};


export default ViewProduct;