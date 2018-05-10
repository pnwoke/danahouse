import React from 'react';
import { connect } from 'react-redux';

const WelcomePage = ({ fullname }) => (
    <div className="dana-visitor-list-container">
        <h2 className="dana-table-title">WELCOME {fullname}</h2>
        <div className="pt-card pt-elevation-2 dana-welcome">
            <img src="images/welcome.png" />
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    fullname: state.auth.fullname
});

export default connect(mapStateToProps)(WelcomePage);