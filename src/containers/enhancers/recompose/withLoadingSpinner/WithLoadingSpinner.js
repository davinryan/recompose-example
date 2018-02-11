import React from 'react';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import './WithLoadingSpinner.css';

export default fetchData => Child => {

  const withData = lifecycle({
    state: { loading: true },
    componentDidMount() {
      fetchData().then((data) =>
        this.setState({ loading: false, ...data }));
    }
  });

  const Spinner = () =>
  <div className='spinnerPage'>
    <div id='cssloadPgloading'>
      <div className='cssloadLoadingwrap'>
        <ul className='cssloadBokeh'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>

  const withSpinnerWhileLoading = branch(
    ({ loading }) => loading,
    renderComponent(Spinner)
  );

  return compose(
    withData,
    withSpinnerWhileLoading
  )(Child);
}