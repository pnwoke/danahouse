import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import WelcomePage from '../components/WelcomePage';
import AccountDashboardPage from '../components/AccountDashboardPage';
import AddAccountPage from '../components/AddAccountPage';
import AddUserPage from '../components/admin/AddUserPage';
import EditAccountPage from '../components/EditAccountPage';
import ViewAccountPage from '../components/ViewAccountPage';
import ManageUser from '../components/admin/ManageUser';
import Report from '../components/admin/Report';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/welcome" component={WelcomePage} />
                <PrivateRoute path="/visitors" component={AccountDashboardPage} />
                <PrivateRoute path="/create" component={AddAccountPage} />
                <PrivateRoute path="/add-user" component={AddUserPage} />
                <PrivateRoute path="/users" component={ManageUser} />
                <PrivateRoute path="/report" component={Report} />
                <PrivateRoute path="/edit/:id" component={EditAccountPage} />
                <PrivateRoute path="/view/:id" component={ViewAccountPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;