import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faStar)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
