//ACCOUNTS REDUCER

const accountsReducerDefaultState = [];

export default (state = accountsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ACCOUNT':
            return [
                ...state,
                action.account
            ];
        case 'REMOVE_ACCOUNT':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_ACCOUNT':
            return state.map((account) => {
                if (account.id === action.id) {
                    return {
                        ...account,
                        ...action.updates
                    };
                } else {
                    return account;
                };
            });
        case 'SET_ACCOUNTS':
            return action.accounts;
        
        default:
            return state;
    }
};