import React from 'react';
import {compose, lifecycle, branch, renderComponent} from 'recompose';
import WithLoadingSpinner from '../../../containers/enhancers/withLoadingSpinner/WithLoadingSpinner';

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(
      {
        name: 'Davin',
        interests: 'Javascript, React and Recompose',
        gender: 'male',
        height: '183cm'
      }), 2000);
  });
}

const LoadingSpinnerExample = ({ name, interests, gender, height }) =>
  <div>
    <h2>Loading Spinner Example</h2>
    <div className="User">
      <h3>{name}</h3>
      <ul style={{ listStyle: 'none' }}>
        <li>Interests: {interests}</li>
        <li>Gender: {gender}</li>
        <li>Height: {height}</li>
      </ul>
    </div>
  </div>;

export default WithLoadingSpinner(LoadingSpinnerExample, fetchData);