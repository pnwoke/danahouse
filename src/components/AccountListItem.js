import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
// import numeral from 'numeral';

const AccountListItem = ({ id, fullName, contact, signIn, signOut }) => (
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>{fullName}</td>
            <td>{contact}</td>
            <td>{signIn}</td>
            <td>{signOut}</td>
        </tr>
    </tbody>
);

// {numeral(state).format('$0,0.00')}
export default AccountListItem;