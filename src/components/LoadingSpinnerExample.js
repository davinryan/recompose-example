import React from 'react';
import { compose, lifecycle, branch, renderComponent } from 'recompose';

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

const withUserData = lifecycle({
  state: { loading: true },
  componentDidMount() {
    fetchData().then((data) =>
      this.setState({ loading: false, ...data }));
  }
});

const Spinner = () =>
  <div className="Spinner">
    <div className="loader">Loading...</div>
  </div>;

const isLoading = ({ loading }) => loading;

const withSpinnerWhileLoading = branch(
  isLoading,
  renderComponent(Spinner)
);

const enhance = compose(
  withUserData,
  withSpinnerWhileLoading
);

const User = enhance(({ name, interests, gender, height }) =>
  <div className="User">
    <h3>{name}</h3>
    <ul style={{ listStyle: 'none' }}>
      <li>Interests: {interests}</li>
      <li>Gender: {gender}</li>
      <li>Height: {height}</li>
    </ul>
  </div>
);

export default () => (
  <div>
    <h2>WithLoadingSpinner</h2>

    <User />
  </div>
);