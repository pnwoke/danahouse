export default (state = {}, {type, ...user}) => {
    switch (type) {
        case 'LOGIN':
            return {
                ...user
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};