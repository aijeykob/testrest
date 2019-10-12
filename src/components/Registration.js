import React from 'react';
import {Form, Button, Container, Row, Col} from "react-bootstrap";


const Registration = ({props}) => {

    const submitRegistration = () => {
        props.registrationUser({username: props.username, password: props.password})
    };
    const onChangeInput = (e) => {
        props.writingText(e.target.value, e.target.name)

    };

    return (
        <Container>
            <Row className="justify-content-md-end my-4">
                <Col xs={6}>
                    <Form>

                        <Form.Control type="text" placeholder="Enter your name" value={props.username} name="username"
                                      onChange={(e) => onChangeInput(e)}/>

                        <Form.Control type="password" name="password" placeholder="Enter your password"
                                      value={props.password} onChange={(e) => onChangeInput(e)}/>

                        <Button variant="primary" onClick={() => submitRegistration()}>
                            Register
                        </Button>
                    </Form>

                </Col>
            </Row>
        </Container>
    )
}

export default Registration;