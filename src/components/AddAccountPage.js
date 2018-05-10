import React from 'react';
import { connect } from 'react-redux'; 
import AccountForm from './AccountForm';
import { startAddAccount } from '../actions/accounts';

export class AddAccountPage extends React.Component {
    onSubmit = (account) => {
        this.props.startAddAccount(account);
        this.props.history.push('/');
    };
    render() {
        return (
            // <div>
            //     <div className="page-header">
            //         <div className="content-container pt-align-center">
            //             <h2 className="page-header__title dana-table-title">Register Visitor</h2>
            //         </div>
            //     </div>
            //     <AccountForm
            //         onSubmit={this.onSubmit}
            //     />
            // </div>

            <div className="dana-visitor-list-container">
                <h2 className="dana-table-title">Register Visitor</h2>
                <div className="pt-card pt-elevation-2">
                    <AccountForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    startAddAccount: (account) => dispatch(startAddAccount(account))
});

export default connect(undefined, mapDispatchToProps)(AddAccountPage);