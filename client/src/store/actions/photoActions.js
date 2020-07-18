import axios from '../../api-path';
import {GET_GALLERY_SUCCESS} from "./actionTypes";

const getGallerySuccess = (data) => ({type: GET_GALLERY_SUCCESS, data});
export const getGallery = () => {
    return async dispatch => {
        try {
            const response = await axios.get('/photos');
            dispatch(getGallerySuccess(response.data));
        } catch (e) {

        }
    }
};
