import axios from '../../api-path';
import {LOGIN_USER_SUCCESS, REGISTER_USER_SUCCESS} from "./actionTypes";

const registerUserSuccess = data => ({type: REGISTER_USER_SUCCESS, data});
const loginUserSuccess = data => ({type: LOGIN_USER_SUCCESS, data});
const logoutUserSuccess = () => ({type: LOGIN_USER_SUCCESS});

export const registerUser = (userData) => {
    return async dispatch => {
        try {
            const response = await axios.post('/register', userData);
            dispatch(registerUserSuccess(response.data));
        } catch (e) {

        }
    }
};
