import React from 'react';
import { render } from 'react-dom';
import Hello from './components/Hello';
import styles from './index.styles.js';

const App = () => (
  <div style={styles.main}>
    <h1>Recompose Examples</h1>
    <h2>by Davin Ryan</h2>

    <div style={styles.demoButtons}>
      <button style={styles.button}>WithDefaultProps</button>
      <button style={styles.button}>WithLoadingSpinner</button>
      <button style={styles.button}>WithResponsive</button>
      <button style={styles.button}>WithSmoothScroll</button>
    </div>
  </div>
);

render(<App />, document.getElementById('root'));
