import moment from 'moment';
//Get visible accounts

const data = [];

export default (users, { text }) => {
    return users.filter((user) => {
        const textMatch = user.fullName.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    });
};