import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import selectUsers from '../../selectors/users';

const ManageUser = (props) => (
    <div className="dana-visitor-list-container">
        <h2 className="dana-table-title">List of Users</h2>
        <Link role="button" className="pt-button pt-minimal pt-intent-danger pt-large pt-fill pt-icon-add" to="/add-user">Add User</Link>
        <div className="pt-card pt-elevation-2">
            {props.users.length > 0 ?
                (
                    <table className="pt-html-table pt-html-table-striped pt-html-table-bordered pt-interactive dana-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Full Name</th>
                                <th>Online Status</th>
                            </tr>
                        </thead>
                        {props.users.map((user) => {
                            return <UserItem key={user.id} {...user} />
                        })}
                    </table>
                ) : (
                    <div className="dana-nochart"><h1>No created user</h1></div>
                )
            }
        </div>
    </div>
    // <div>
    //     <div className="dana-sample">
    //         <h2 className="dana-table-title">List of Users</h2>
            // <Link role="button"
            // className="pt-button pt-minimal pt-intent-danger pt-large pt-fill pt-icon-add" to="/add-user">Add User</Link>
    //     </div>
        
    // </div>
);

const mapStateToProps = (state) => {
    return {
        users: selectUsers(state.users, state.filters)
    };
};

export default connect(mapStateToProps)(ManageUser);