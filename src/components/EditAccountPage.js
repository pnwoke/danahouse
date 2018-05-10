import React from 'react';
import { connect } from 'react-redux';
import AccountForm from './AccountForm';
import { startEditAccount, startRemoveAccount } from '../actions/accounts';

class EditAccountPage extends React.Component {
    onSubmit = (account) => {
        this.props.startEditAccount(this.props.account.id, account);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.dispatch(startRemoveAccount({ id: this.props.account.id }));
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Account</h1>
                    </div>
                </div>
                <div className="content-container">
                    <AccountForm
                        account={this.props.account}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Account</button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    account: state.accounts.find((account) => account.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditAccount: (id, account) => dispatch(startEditAccount(id, account)),
    startRemoveAccount: (data) => dispatch(startRemoveAccount(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditAccountPage);