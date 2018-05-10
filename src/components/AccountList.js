import React from 'react';
import { connect } from 'react-redux';
import AccountListItem from './AccountListItem';
import selectAccounts from '../selectors/accounts';

const AccountList = (props) => (
    <div className="dana-visitor-list-container">
        <h2 className="dana-table-title">List of Visitors</h2>
        <div className="pt-card pt-elevation-2">
            {props.accounts.length > 0 ?
                (
                    <table className="pt-html-table pt-html-table-striped pt-html-table-bordered pt-interactive dana-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Contact Person</th>
                                <th>SignIn</th>
                                <th>SignOut</th>
                            </tr>
                        </thead>
                        {props.accounts.map((account) => {
                            return <AccountListItem key={account.id} {...account} />
                        })}
                    </table>
                ) : (
                    <div className="dana-nochart"><h1>No visit today</h1></div>
                )
            }       
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return{
        accounts: selectAccounts(state.accounts, state.filters)
    };
};

export default connect(mapStateToProps)(AccountList);