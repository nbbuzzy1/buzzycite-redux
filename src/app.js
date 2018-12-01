import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startAddCitation, startSetCitations } from './actions/citations';
import { login, logout } from './actions/auth';
import getVisibleCitations from './selectors/citations';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './containers/LoadingPage';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetCitations()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});









// renderApp();

// const state = store.getState();
// const visibleCitations = getVisibleCitations(state.citations, state.filters);
// console.log(visibleCitations)

// store.dispatch(startAddCitation({ 
//   fullCitation: 'State v. Smith, 23 Ohio St.3d 43, 2012-Ohio-23423, 234 N.E.3d 53', 
//   createdAt: 'Nov 22, 2018', 
//   type: 'Criminal Law', 
//   note: 'All criminals are guilty and should go to prison' 
// }));
// store.dispatch(startAddCitation({ 
//   fullCitation: 'John Smith v. Ins. Comp. America, 23 Ohio St.3d 43, 2012-Ohio-23423, 234 N.E.3d 53', 
//   createdAt: 'Nov 23, 2018', 
//   type: 'Insurance', 
//   note: 'None' 
// }));
// store.dispatch(startAddCitation({ 
//   fullCitation: 'Very Long Party Name v. Very Long Party Name Two', 
//   createdAt: 'Nov 24, 2018', 
//   type: 'Test', 
//   note: 'All criminals are guilty and should go to prisonAll criminals are guilty and should go to prisonAll criminals are guilty and should go to prison' 
// }));
