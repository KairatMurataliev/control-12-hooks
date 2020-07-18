import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import MainPage from "./containers/MainPage/MainPage";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={MainPage}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/login' exact component={Login}/>
        </Switch>
    )
};

export default withRouter(Routes);
