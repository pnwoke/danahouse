import uuid from 'uuid';
import moment from 'moment';
import database from '../firebase/firebase';

//Get Current Date
const vToday = moment(new Date()).endOf('day').valueOf();

//ADD_ACCOUNT
export const addAccount = (account) => ({
    type: 'ADD_ACCOUNT',
    account
});

export const startAddAccount = (accountData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            fullName = '',
            company = '',
            address = '',
            phone = '',
            carryObject = '',
            vehichle = '',
            driver = '',
            cardNo = '',
            imageUrl = '',
            contact = '',
            contactDept = '',
            purpose = '',
            signIn = 0,
            signOut = 0,
            createdAt = 0
        } = accountData;
        const account = {
            fullName,
            company,
            address,
            phone,
            carryObject,
            vehichle,
            driver,
            cardNo,
            imageUrl,
            contact,
            contactDept,
            purpose,
            signIn,
            signOut,
            createdAt
        };

        return database.ref(`accounts/${vToday}`).push(account).then((ref) => {
            dispatch(addAccount({
                id: ref.key,
                ...account
            }));
        });
    };
};


//ADD_USER
export const addUser = (user) => ({
    type: 'ADD_USER',
    user
});

export const startAddUser = (userData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            fullname = '',
            username = '',
            password = '',
            isAdmin = false,
            isOnline = false,
            createdAt = 0
        } = userData;
        const newUser = {
            fullname,
            username,
            password,
            isAdmin,
            isOnline,
            createdAt
        };

        return database.ref(`users`).orderByChild('username').equalTo(username).once('value', function (snapshot) {
            if (!snapshot.val()) {
                database.ref(`users`).push(newUser).then((ref) => {
                    dispatch(addUser({
                        id: ref.key,
                        ...newUser
                    }));
                });
            }
        });
    };
};

//REMOVE_ACCOUNT
export const removeAccount = ({ id } = {}) => ({
    type: 'REMOVE_ACCOUNT',
    id
});

export const startRemoveAccount = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`accounts/${vToday}/${id}`).remove().then((ref) => {
            dispatch(removeAccount({accounts}));
        });
    };
};

//EDIT_ACCOUNT
export const editAccount = (id, updates) => ({
    type: 'EDIT_ACCOUNT',
    id,
    updates
});

export const startEditAccount = (id, updates) => {
    return (dispatch) => {
        return database.ref(`accounts/${vToday}/${id}`).update(updates).then(() => {
            dispatch(editAccount(id, updates));
        });
    };
};

//SET_ACCOUNTS
export const setAccounts = (accounts) => ({
    type: 'SET_ACCOUNTS',
    accounts
});

export const startSetAccounts = () => {
    return (dispatch) => {
        return database.ref(`accounts/${vToday}`).once('value').then((ref) => {
            const accounts = [];

            ref.forEach((childRef) => {
                accounts.push({
                    id: childRef.key,
                    ...childRef.val()
                })
            });

            dispatch(setAccounts(accounts));
        });
    };
};
