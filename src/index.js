import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Print from './components/PrintComponent';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import {BrowserHistory} from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    // console.log(store.getState());
});

ReactDOM.render(
    <MuiThemeProvider>
      <Provider store={ store }>
        <Router history={BrowserHistory}>
          <div className="App" id="App">
            <Route exact path='/' component={ App } />
            <Route exact path='/print' component={ Print } />
          </div>
        </Router>
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('root'));
registerServiceWorker();
