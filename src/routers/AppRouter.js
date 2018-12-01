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
import NotFoundPage from '../containers/NotFoundPage';
import Header from '../containers/Header';
import CitationList from '../containers/CitationList';
import LoginPage from '../containers/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/supremepost" component={SupremePost} />
        <PrivateRoute path="/supremepre" component={SupremePre} />
        <PrivateRoute path="/appealpostprint" component={AppealPostPrint} />
        <PrivateRoute path="/appealpostponprint" component={AppealPostNonPrint} />
        <PrivateRoute path="/appealpreprint" component={AppealPrePrint} />
        <PrivateRoute path="/appealprenonprint" component={AppealPreNonPrint} />
        <PrivateRoute path="/citationlist" component={CitationList} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
