import axios from '../../api-path';
import {LOGIN_USER_SUCCESS, REGISTER_USER_SUCCESS, LOGOUT_USER_SUCCESS} from "./actionTypes";

const registerUserSuccess = data => ({type: REGISTER_USER_SUCCESS, data});
const loginUserSuccess = data => ({type: LOGIN_USER_SUCCESS, data});
const logoutUserSuccess = () => ({type: LOGOUT_USER_SUCCESS});

export const registerUser = (userData) => {
    return async dispatch => {
        try {
            const response = await axios.post('/users/register', userData);
            dispatch(registerUserSuccess(response.data));
        } catch (e) {

        }
    }
};

export const loginUser = data => {
    return async dispatch => {
        try {
            const response = await axios.post('/users/sessions', data);
            dispatch(loginUserSuccess(response.data));
        } catch (e) {

        }
    }
}

export const logoutUser = () => {
    return async dispatch => {
        try {
            const response = await axios.delete('/users/sessions');
            dispatch(logoutUserSuccess());
            alert(response.data.message);
        } catch (e) {

        }
    }
};
