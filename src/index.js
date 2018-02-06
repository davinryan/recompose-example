import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { render } from 'react-dom';
import WithDefaultProps from './components/examples/DefaultProperties';
import LoadingSpinnerExample from './components/examples/LoadingSpinner';
import ResponsiveExample from './components/examples/responsive/Responsive';
import SmoothScrollExample from './components/examples/smoothScroll/SmoothScroll';
import ResponsiveSmoothScrollExample from './components/examples/responsiveSmoothScroll/ResponsiveSmoothScroll.js';
import './index.css';

const App = () => (
  <div className='main'>
    <h1>Recompose Examples</h1>
    <h2>by Davin Ryan</h2>

    <Router>
      <div>
        <ul className='list'>
          <li><Link to="/WithDefaultProps">WithDefaultProps</Link></li>
          <li><Link to="/LoadingSpinnerExample">LoadingSpinnerExample</Link></li>
          <li><Link to="/ResponsiveExample">ResponsiveExample</Link></li>
          <li><Link to="/SmoothScrollExample">SmoothScrollExample</Link></li>
          <li><Link to="/ResponsiveSmoothScrollExample">ResonsiveSmoothScrollExample</Link></li>
        </ul>

        <hr className='hr' />

        <Route path="/WithDefaultProps" component={WithDefaultProps} />
        <Route path="/LoadingSpinnerExample" component={LoadingSpinnerExample} />
        <Route path="/ResponsiveExample" component={ResponsiveExample} />
        <Route path="/SmoothScrollExample" component={SmoothScrollExample} />
        <Route path="/ResponsiveSmoothScrollExample" component={ResponsiveSmoothScrollExample} />
      </div>
    </Router>
  </div>
);

render(<App />, document.getElementById('root'));
