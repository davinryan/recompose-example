import React from 'react';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import './WithLoadingSpinner.css';

export default fetchData => WrappedComponent => {
  // const Spinner = () =>
  // <div className='spinnerPage'>
  //   <div id='cssloadPgloading'>
  //     <div className='cssloadLoadingwrap'>
  //       <ul className='cssloadBokeh'>
  //         <li></li>
  //         <li></li>
  //         <li></li>
  //         <li></li>
  //       </ul>
  //     </div>
  //   </div>
  // </div>

  // const withData = lifecycle({
  //   state: { loading: true },
  //   componentDidMount() {
  //     fetchData().then((data) =>
  //       this.setState({ loading: false, ...data }));
  //   }
  // });

  // const withSpinnerWhileLoading = branch(
  //   ({ loading }) => loading,
  //   renderComponent(Spinner)
  // );

  // return compose(
  //   withData,
  //   withSpinnerWhileLoading
  // )(WrappedComponent);
  // same as return withData(withSpinnerWhileLoading(WrappedComponent));
  return WrappedComponent;
}