import moment from 'moment';
//Get visible accounts

export default (accounts, { text, sortBy, startDate, endDate }) => {
    return accounts.filter((account) => {
        const createdAtMoment = moment(account.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = account.fullName.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } 
    });
};