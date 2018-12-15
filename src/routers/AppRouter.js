import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../containers/DashboardPage';
import SupremePost from '../containers/SupremePost';
import SupremePre from '../containers/SupremePre';
import AppealPostPrint from '../containers/AppealPostPrint';
import AppealPostNonPrint from '../containers/AppealPostNonPrint';
import AppealPrePrint from '../containers/AppealPrePrint';
import AppealPreNonPrint from '../containers/AppealPreNonPrint';
import CustomCitation from '../containers/CustomCitation';
import NotFoundPage from '../containers/NotFoundPage';
import CitationList from '../containers/CitationList';
import LoginPage from '../containers/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/SupremePost" component={SupremePost} />
        <PrivateRoute path="/SupremePre" component={SupremePre} />
        <PrivateRoute path="/AppealPostPrint" component={AppealPostPrint} />
        <PrivateRoute path="/AppealPostNonPrint" component={AppealPostNonPrint} />
        <PrivateRoute path="/AppealPrePrint" component={AppealPrePrint} />
        <PrivateRoute path="/AppealPreNonPrint" component={AppealPreNonPrint} />
        <PrivateRoute path="/CustomCitation" component={CustomCitation} />
        <PrivateRoute path="/CitationList" component={CitationList} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
