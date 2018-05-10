import React from 'react';
import { connect } from 'react-redux';
import AccountView from './AccountView';
import { startEditAccount, startRemoveAccount } from '../actions/accounts';

class ViewAccountPage extends React.Component {
    generate(n) {
        var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   

        if (n > max) {
            return generate(max) + generate(n - max);
        }

        max = Math.pow(10, n + add);
        var min = max / 10; // Math.pow(10, n) basically
        var number = Math.floor(Math.random() * (max - min + 1)) + min;
        
        return ("" + number).substring(add);
    }
    onSubmit = () => {
        this.props.startEditAccount(this.props.account.id, { ...this.props.account, bvn: this.generate(10) });
        this.props.history.push('/admin');
    };
    onRemove = () => {
        this.props.startRemoveAccount({ id: this.props.account.id });
        this.props.history.push('/admin');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Verify Account</h1>
                    </div>
                </div>
                <div className="content-container">
                    <AccountView {...this.props.account} />
                    <button className="button button--secondary" onClick={this.onSubmit}>Verify Account</button>
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
    startEditAccount: (data, acc) => dispatch(startEditAccount(data, acc)),
    startRemoveAccount: (data) => dispatch(startRemoveAccount(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewAccountPage);