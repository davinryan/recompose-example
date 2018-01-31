import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { render } from 'react-dom';
import WithDefaultProps from './containers/enhancers/WithDefaultProps';
import WithLoadingSpinner from './containers/enhancers/WithLoadingSpinner';
import WithResponsive from './containers/enhancers/WithResponsive';
import WithSmoothScroll from './containers/enhancers/WithSmoothScroll';
import styles from './index.styles.js';

const App = () => (
  <div style={styles.main}>
    <h1>Recompose Examples</h1>
    <h2>by Davin Ryan</h2>

    <Router>
      <div>
        <ul style={styles.list}>
          <li><Link to="/WithDefaultProps">WithDefaultProps</Link></li>
          <li><Link to="/WithLoadingSpinner">WithLoadingSpinner</Link></li>
          <li><Link to="/WithResponsive">WithResponsive</Link></li>
          <li><Link to="/WithSmoothScroll">WithSmoothScroll</Link></li>
        </ul>

        <hr style={styles.hr} />

        <Route path="/WithDefaultProps" component={WithDefaultProps} />
        <Route path="/WithLoadingSpinner" component={WithLoadingSpinner} />
        <Route path="/WithResponsive" component={WithResponsive} />
        <Route path="/WithSmoothScroll" component={WithSmoothScroll} />
      </div>
    </Router>
  </div>
);

render(<App />, document.getElementById('root'));
