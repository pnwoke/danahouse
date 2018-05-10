import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { FormGroup } from '@blueprintjs/core';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { startAddUser } from '../../actions/accounts';

class AddUserPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fullname: props.account ? props.account.fullname : '',
            username: props.account ? props.account.username : '',
            password: props.account ? props.account.password : '',
            confirmPassword: props.account ? props.account.password : '',
            isAdmin: props.account ? props.account.isAdmin : '',
            error: ''
        };
    }
    onFullNameChange = (e) => {
        const fullname = e.target.value;
        this.setState(() => ({ fullname }));
    };
    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({ username }));
    };
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };
    onConfirmPasswordChange = (e) => {
        const confirmPassword = e.target.value;
        this.setState(() => ({ confirmPassword }));
    };
    onAdminChange = (e) => {
        const isAdmin = e.target.value;
        this.setState(() => ({ isAdmin }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.fullname ||
            !this.state.username ||
            !this.state.password ||
            !this.state.isAdmin
        ) {
            this.setState(() => ({ error: 'Please provide all useful information!' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                fullname: this.state.fullname,
                username: this.state.username,
                password: this.state.password,
                isAdmin: this.state.isAdmin,
                createdAt: moment().valueOf()
            });
        }
    };
    render() {
        return (
            <div className="dana-img-container">
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input
                        autoFocus
                        type="text"
                        className="text-input"
                        placeholder="Full Name"
                        value={this.state.fullname}
                        onChange={this.onFullNameChange}
                    />
                    <input
                        type="text"
                        placeholder="User Name"
                        className="text-input"
                        value={this.state.username}
                        onChange={this.onUsernameChange}
                    />
                    <div className="form-row">
                        <input
                            type="password"
                            placeholder="Password"
                            className="text-input"
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                        />
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Confirm Password"
                            value={this.state.confirmPassword}
                            onChange={this.onConfirmPasswordChange}
                        />
                    </div>
                    <div className="pt-select pt-fill pt-large">
                        <select
                            value={this.state.isAdmin}
                            onChange={this.onAdminChange}
                        >
                            <option value="">Choose role...</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                    </div>
                    <div>
                        <button className="pt-button pt-minimal pt-large pt-intent-success pt-icon-new-person pt-fill">Add Visitor</button>
                    </div>
                </form>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (user) => dispatch(startAddUser(user))
});

export default connect(undefined, mapDispatchToProps)(AddUserPage);