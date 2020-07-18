import {REGISTER_USER_SUCCESS, LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS} from '../actions/actionTypes';

const initialState = {
    user: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            return {...state, user: action.data};
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.data};
        case LOGOUT_USER_SUCCESS:
            return {...state, user: null};
        default:
            return state;
    }
};

export default reducer;
