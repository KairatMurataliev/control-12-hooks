import {POST_PHOTO_SUCCESS, DELETE_PHOTO_SUCCESS, GET_GALLERY_SUCCESS} from "../actions/actionTypes";

const initialState = {
    gallery: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_GALLERY_SUCCESS:
            return {...state, gallery: action.data};
        default:
            return state;
    }
};

export default reducer;
