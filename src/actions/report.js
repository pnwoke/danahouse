import database from '../firebase/firebase';

//REPORT_ACCOUNTS
export const reportAccounts = (reports) => ({
    type: 'REPORT_ACCOUNTS',
    reports
});

export const startReportAccounts = () => {
    return (dispatch) => {
        return database.ref(`accounts`).once('value').then((ref) => {
            const reports = [];

            ref.forEach((childRef) => {
                reports.push({ date: childRef.key, visitors: { ...childRef.val() } });
            });

            dispatch(reportAccounts(reports));
        });
    };
};