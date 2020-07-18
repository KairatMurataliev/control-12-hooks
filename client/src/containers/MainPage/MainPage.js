import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getGallery} from '../../store/actions/photoActions';

const MainPage = () => {

    const dispatch = useDispatch();
    const gallery = useSelector(state => state.gallery.gallery);

    useEffect(() =>  {
        dispatch(getGallery())
    }, []);

    console.log(gallery);
    return (
        <Fragment>
            <p>hello</p>
        </Fragment>
    );
};

export default MainPage;
