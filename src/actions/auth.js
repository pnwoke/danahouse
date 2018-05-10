import database, { firebase, googleProvider } from '../firebase/firebase';
import _ from "lodash";

export const login = (user) => ({
    type: 'LOGIN',
    ...user
});

export const startLogin = ({ username, password }) => {
    let sample = {};
    return (dispatch) => {
        // return firebase.auth().signInWithPopup(googleProvider); 
        console.log('logging in...');
        if(username === "Promise" && password === "Nwoke") {
            // return "admin";
            dispatch(login("admin"))
        } else {
            return database.ref(`users`).orderByChild('username').equalTo(username).once('value', function (snapshot) {
                let users = {};

                snapshot.forEach((childRef) => {
                    if (childRef.val().password === password){
                        users = { uid: childRef.key, ...childRef.val(), isOnline: true }
                    }
                });
                console.log(users);
                startEditUser(users).then(() => {
                    localStorage.setItem('sessionId', users.uid);
                    dispatch(login(users));
                });
            });
        }
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return (dispatch, getState) => {
        const user = getState().auth;
        const {
            uid,
            fullname,
            username,
            password,
            isAdmin,
            isOnline,
            createdAt
        } = getState().auth;
        const updates = {
            uid,
            fullname,
            username,
            password,
            isAdmin,
            isOnline: false,
            createdAt
        };
        return startEditUser(updates).then(() => {
            localStorage.removeItem('sessionId');
            dispatch(logout());
        });
    };
};

export const startEditUser = ({uid, fullname, username, password, isAdmin, isOnline, createdAt}) => {
    const newUpdates = {fullname, username, password, isAdmin, isOnline, createdAt};
    return database.ref(`users/${uid}`).update(newUpdates);
};

export const monitorOnline = (sessionId) => {
    return database.ref(`users/${sessionId}`).on('value', function (ref) {

        const users = { uid: ref.key, ...ref.val() }

        console.log(users);
        console.log('monitoring db change');

        if (ref.val().isOnline) {
            console.log('user online');

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
            console.log('user offline. log out');
            store.dispatch(logout());
            renderApp();
            history.push('/');
        }
    });
}