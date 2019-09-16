import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Counter from './components/counter';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
