import React from 'react';
import moment from 'moment';
// import numeral from 'numeral';

const ReportTable = ({ name, visitor }) => (
    <tbody>
        <tr>
            <td>{name}</td>
            <td>{visitor}</td>
        </tr>
    </tbody>
);

export default ReportTable;