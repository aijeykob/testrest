import React, {Fragment} from 'react';
import {Button, Form} from "react-bootstrap";
import moment from "moment";
import StarsList from "./StarsList";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as faRegStar} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const ProductComments = ({props}) => {

    const clearHoveredStars = () => {

        props.setIndexHoverStarToProps((props.indexSelectedStar >= 0) ? props.indexSelectedStar : -1)
    };
    const setIndexSelectedStar = (i) => {
        props.setIndexSelectedStarToProps(i)

    };
    const setIndexHoverStar = (i) => {
        props.setIndexHoverStarToProps(i)

    };
    const onChangeInput = (e) => {
        props.writingText(e.target.value, e.target.name)

    };
    const submitComment = () => {
        props.postComment({
                id: props.selectedProduct.id,
                textComment: props.textComment,
                indexSelectedStar: props.indexSelectedStar,
                token: props.token
            }
        )

    };

    return (
        <Fragment>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1" onMouseLeave={clearHoveredStars}>
                    {
                        [...Array(5)].map((el, i) => {
                            return (
                                <FontAwesomeIcon key={i} color={
                                    (props.indexHoverStar === i) ? "blue" : "dark"
                                }
                                                 icon={
                                                     props.indexHoverStar >= i || (props.indexSelectedStar >= i && props.indexHoverStar >= i)
                                                         ?
                                                         faStar
                                                         : faRegStar
                                                 }
                                                 onClick={() => setIndexSelectedStar(i)}
                                                 onMouseOver={() => setIndexHoverStar(i)}
                                />
                            )
                        })
                    }
                </Form.Group>
                <Form.Control as="textarea" rows="3" value={props.textComment} name="textComment"
                              onChange={(e) => onChangeInput(e)} placeholder="Enter your reviews ..."/>
                {
                    (props.token) ? <Button variant="primary" onClick={() => submitComment()}>Submit</Button>
                        :
                        <strong className={"text-danger"}>
                            Register to leave a comment.</strong>
                }
            </Form>
            {
                props.productComments.map(el => {

                    return (

                            <div className='card p-2 my-2' key={el.id}>
                                <strong>{el.created_by.username}</strong>
                                <div>at {moment(el.created_at).format("DD MMMM, YYYY")}</div>
                                <StarsList item={el}/>
                                <div>
                                    <strong>Comment:</strong>
                                    {el.text}</div>
                            </div>


                    )
                })
            }

        </Fragment>
    )

};


export default ProductComments