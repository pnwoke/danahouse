import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import accountsReducer from '../reducers/accounts';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import usersReducer from '../reducers/users';
import reportReducer from '../reducers/report';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            accounts: accountsReducer,
            filters: filtersReducer,
            auth: authReducer,
            users: usersReducer,
            reports: reportReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};