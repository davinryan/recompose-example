import React from 'react';
import { compose, lifecycle, branch, renderComponent } from 'recompose';

export default (Child, fetchData) => {

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

  return compose(
    withUserData,
    withSpinnerWhileLoading
  )(Child);
}