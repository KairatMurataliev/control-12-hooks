import React, {Fragment, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Header from "../UI/Header/Header";

import {logoutUser} from '../../store/actions/userActions';

const Layout = (props) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.usr.user);

    return (
        <Fragment>
            <Header user={user} logout={dispatch(logoutUser)}/>
            <main style={{marginTop: '30px'}}>
                {props.children}
            </main>
        </Fragment>
    );
};

export default Layout;
