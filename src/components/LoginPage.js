import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: props.account ? props.account.username : '',
            password: props.account ? props.account.password : '',
            error: ''
        };
    }

    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({ username }));
    };

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.username || !this.state.password) {
            this.setState(() => ({ error: 'Please provide all useful information!' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.startLogin({
                username: this.state.username,
                password: this.state.password
            });
        }
    };
    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box" id="vlogin">
                    <img src="images/logo.png" />
                    <h2 className="box-layout__title">VISITOR MANAGEMENT SYSTEM</h2>
                    <p>Keep track of visitors in your organisation</p>

                    <form className="form" onSubmit={this.onSubmit}>
                        {this.state.error && <p className="form__error">{this.state.error}</p>}
                        <div className="form-row">
                            <input
                                type="text"
                                placeholder="Username"
                                className="text-input"
                                value={this.state.username}
                                onChange={this.onUsernameChange}
                            />
                        </div>
                        <div className="form-row">
                            <input
                                type="text"
                                className="text-input"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.onPasswordChange}
                            />
                        </div>
                        <button className="button pt-button pt-minimal pt-large pt-intent-success pt-icon-new-person pt-fill">Login</button>
                    </form>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: (user) => dispatch(startLogin(user))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);