import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addCitation, removeCitation } from './actions/citations';
import { setTextFilter } from './actions/filters';
import getVisibleCitations from './selectors/citations';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './containers/LoadingPage';
import './firebase/firebase';


const store = configureStore();

store.dispatch(addCitation({ 
  fullCitation: 'State v. Smith, 23 Ohio St.3d 43, 2012-Ohio-23423, 234 N.E.3d 53', 
  createdAt: 'Nov 22, 2018', 
  type: 'Criminal Law', 
  note: 'All criminals are guilty and should go to prison' 
}));
store.dispatch(addCitation({ 
  fullCitation: 'John Smith v. Ins. Comp. America, 23 Ohio St.3d 43, 2012-Ohio-23423, 234 N.E.3d 53', 
  createdAt: 'Nov 23, 2018', 
  type: 'Insurance', 
  note: 'None' 
}));
store.dispatch(addCitation({ 
  fullCitation: 'Very Long Party Name v. Very Long Party Name Two', 
  createdAt: 'Nov 24, 2018', 
  type: 'Test', 
  note: 'All criminals are guilty and should go to prisonAll criminals are guilty and should go to prisonAll criminals are guilty and should go to prison' 
}));
// store.dispatch(setTextFilter('virginia'));

const state = store.getState();
const visibleCitations = getVisibleCitations(state.citations, state.filters);
console.log(visibleCitations)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

// let hasRendered = false;
// const renderApp = () => {
//   if (!hasRendered) {
//     ReactDOM.render(jsx, document.getElementById('app'));
//     hasRendered = true;
//   }
// };

// renderApp();
