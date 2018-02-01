import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { render } from 'react-dom';
import WithDefaultProps from './containers/enhancers/WithDefaultProps';
import LoadingSpinnerExample from './components/LoadingSpinnerExample';
import ResponsiveExample from './components/ResponsiveExample';
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
          <li><Link to="/LoadingSpinnerExample">LoadingSpinnerExample</Link></li>
          <li><Link to="/ResponsiveExample">ResponsiveExample</Link></li>
          <li><Link to="/WithSmoothScroll">WithSmoothScroll</Link></li>
        </ul>

        <hr style={styles.hr} />

        <Route path="/WithDefaultProps" component={WithDefaultProps} />
        <Route path="/LoadingSpinnerExample" component={LoadingSpinnerExample} />
        <Route path="/ResponsiveExample" component={ResponsiveExample} />
        <Route path="/WithSmoothScroll" component={WithSmoothScroll} />
      </div>
    </Router>
  </div>
);

render(<App />, document.getElementById('root'));
