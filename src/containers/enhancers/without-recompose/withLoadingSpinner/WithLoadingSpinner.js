import React from 'react';
import './WithLoadingSpinner.css';

export default fetchData => WrappedComponent => {
  // const Spinner = () =>
  //   <div className='spinner'>
  //     <div id='cssloadPgloading'>
  //       <div className='cssloadLoadingwrap'>
  //         <ul className='cssloadBokeh'>
  //           <li></li>
  //           <li></li>
  //           <li></li>
  //           <li></li>
  //         </ul>
  //       </div>
  //     </div>
  //   </div>;

  return class extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {loading: true};
    // }

    // componentDidMount() {
    //   fetchData().then((data) =>
    //     this.setState({ loading: false, ...data }));
    // }

    render() {
      // const {loading, ...data} = this.state;
      // return (
      //   <div>
      //     {loading 
      //     ? (<Spinner />) 
      //     : (<WrappedComponent {...data} />)}
      //   </div>
      // );
      return (
        <WrappedComponent/>
      );
    }
  }
};