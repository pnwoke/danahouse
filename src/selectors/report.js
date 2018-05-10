import moment from 'moment';
//Get visible accounts

const data = [];

export default (reports, { startDate, endDate }) => {
    return reports.filter((rep) => {
        const createdAtMoment = moment(rep.name);
        const startDateMatch = startDate ? moment(startDate).isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? moment(endDate).isSameOrAfter(createdAtMoment, 'day') : true;
        
        return startDateMatch && endDateMatch;
    });
};