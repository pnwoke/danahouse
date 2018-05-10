import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../routers/AppRouter';
import { startLogout } from '../actions/auth';
import Search from './Search';

export const Header = ({ isAdmin, startLogout }) => (
    <nav className="pt-navbar pt-dark">
        <div>
            <div className="pt-navbar-group pt-align-left dana-navbar-heading">
                <img src="images/logo2.png" />
                <div className="pt-navbar-heading"><b>Visitor Management System</b></div>
            </div>
            <div className="pt-navbar-group pt-align-right">
                {(history.location.pathname === '/visitors') || 
                (history.location.pathname === '/users') ? 
                (<div><Search /><span className="pt-navbar-divider"></span></div>) : null }
                <Link className="pt-button pt-minimal pt-icon-home" to="/visitors">Visitor List</Link>
                <Link className="pt-button pt-minimal pt-icon-new-person" to="/create">Add Visitor</Link>
                {isAdmin ? (
                    <div>
                        <Link className="pt-button pt-minimal pt-icon-person" to="/users">Manage Users</Link>
                        <Link className="pt-button pt-minimal pt-icon-document" to="/report">Report</Link>
                    </div>
                ) : null}
                <span className="pt-navbar-divider"></span>
                {isAdmin ? (<button className="pt-button pt-minimal pt-icon-cog" onClick={startLogout}></button>) : null}
                <button className="pt-button pt-minimal pt-icon-power" onClick={startLogout}></button>
            </div>
        </div>
    </nav>
);

const mapStateToProps = (state) => ({
    isAdmin: state.auth.isAdmin === "admin"
});

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);