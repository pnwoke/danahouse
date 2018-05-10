import React from 'react';
import moment from 'moment';

const AccountView = ({ surName, firstName, otherName, sex, localGovt, state, country, imageUrl, dateOfBirth }) => (
    <div>
        <img src={imageUrl} />
        <table className="table table-bordered table-striped table-hover">
            <tbody>
                <tr>
                    <th scope="row">SURNAME</th>
                    <td>{surName}</td>
                </tr>
                <tr>
                    <th scope="row">FIRSTNAME</th>
                    <td>{firstName}</td>
                </tr>
                <tr>
                    <th scope="row">OTHERNAME</th>
                    <td>{otherName}</td>
                </tr>
                <tr>
                    <th scope="row">SEX</th>
                    <td>{sex}</td>
                </tr>
                <tr>
                    <th scope="row">LOCAL GOVT. AREA</th>
                    <td>{localGovt}</td>
                </tr>
                <tr>
                    <th scope="row">STATE</th>
                    <td>{state}</td>
                </tr>
                <tr>
                    <th scope="row">COUNTRY</th>
                    <td>{country}</td>
                </tr>
                <tr>
                    <th scope="row">DATE OF BIRTH</th>
                    <td>{moment(dateOfBirth).format('DD/MM/YYYY')}</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default AccountView;