import React, {Fragment, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Form, FormGroup, Label, Input, FormText, Row, Col} from 'reactstrap';

import {loginUser} from '../../store/actions/userActions';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const user = useSelector(state => state.usr.user);

    return (
        <Fragment>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Form>
                        <FormGroup>
                            <Label for='username'>Username</Label>
                            <Input
                                onChange={event => setUsername(event.target.value)}
                                value={username}
                                id='username'
                                type='text'
                                name='username'
                                required
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for='password'>Password</Label>
                            <Input
                                onChange={event => setPassword(event.target.value)}
                                value={password}
                                id='password'
                                type='password'
                                name='password'
                                required
                            />
                        </FormGroup>

                        <FormGroup>
                            <Button color='primary' onClick={() => dispatch(loginUser({username, password}))}>Login</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Login;
