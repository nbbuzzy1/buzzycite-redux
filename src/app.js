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


const store = configureStore();

store.dispatch(addCitation({ fullCitation: 'state v. smith', createdAt: -21000 }));
store.dispatch(addCitation({ fullCitation: 'us v. virginia', createdAt: -1000 }));
store.dispatch(addCitation({ fullCitation: 'state v. purefoy', createdAt: -15000 }));
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
