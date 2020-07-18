import React, {Fragment, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Header from "../UI/Header/Header";

const Layout = (props) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.usr.user);

    return (
        <Fragment>
            <Header/>
            <main>
                {props.children}
            </main>
        </Fragment>
    );
};

export default Layout;
