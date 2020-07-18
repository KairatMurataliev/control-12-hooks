import thunkMiddleware from "redux-thunk";
import {applyMiddleware, createStore, combineReducers, compose} from "redux";

import usersReducer from "./reducers/usersReducer";
import galleryReducer from './reducers/photoReducer';

import {saveState, loadState} from "./localStorage";


const rootReducer = combineReducers({
    usr: usersReducer,
    gallery: galleryReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(thunkMiddleware));
const persistedState = loadState();
const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
    saveState({
        users: store.getState().users
    });
});

export default store;
