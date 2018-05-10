import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetAccounts } from './actions/accounts';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import database, { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (<Provider store={store}><AppRouter /></Provider>);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

const sessionId = localStorage.getItem('sessionId');
if (sessionId){
    database.ref(`users/${sessionId}`).on('value', function (ref) {
        
        const users = {uid: ref.key, ...ref.val()}

        if (ref.val().isOnline) {

            store.dispatch(login(users));
            store.dispatch(startSetAccounts()).then(() => {
                console.log('fetch data and switch view');
                // console.log(store.getState());
                renderApp();
                if (history.location.pathname === '/') {
                    history.push('/create');
                }
            });
        } else {
            store.dispatch(logout());
            renderApp();
            history.push('/');
        }
    });
} else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
}


// if (false) {
//     store.dispatch(login("admin"));
//     renderApp();
//     if (history.location.pathname === '/') {
//         history.push('/welcome');
//     }
//     store.dispatch(startSetAccounts());
// } else {
//     // store.dispatch(logout());
//     renderApp();
//     history.push('/');
// };

// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
        // store.dispatch(login(user.uid));
        // store.dispatch(startSetAccounts()).then(() => {
        //     renderApp();
        //     if (history.location.pathname === '/') {
        //         history.push('/create');
        //     }
        // });
//     } else {
//         store.dispatch(logout());
//         renderApp();
//         history.push('/');
//     }
// });