import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
// import numeral from 'numeral';

const UserItem = ({ id, fullName, online }) => (
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>{fullName}</td>
            <td>{online}</td>
        </tr>
    </tbody>
);

// {numeral(state).format('$0,0.00')}
export default UserItem;