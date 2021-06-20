import { createStore, combineReducers } from 'redux';
import reviewReducer from './review';
import commentReducer from './reviewComment';
import userReducer from './login';

const rootReducer = combineReducers ({
    review: reviewReducer,
    comment: commentReducer,
    login: userReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;