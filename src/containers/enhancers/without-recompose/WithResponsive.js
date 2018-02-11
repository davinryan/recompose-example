import React from 'react';
import { compose, lifecycle, withStateHandlers } from 'recompose';

export default WrappedComponent => {
  const smallMQL = window.matchMedia('all and (max-width: 400px)');

  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isSmall: smallMQL.matches };
    }

    handleMediaQueryChange(mql) {
      this.setState({isSmall: mql.matches});
    }

    componentWillUnmount() {
      smallMQL.removeListener(this.handleMediaQueryChange.bind(this));
    }

    componentWillMount() {
      smallMQL.addListener(this.handleMediaQueryChange.bind(this));
    }

    render() {
      const { isSmall } = this.state;
      const propsWithIsSmall = {
        ...this.props,
        isSmall
      }

      return <WrappedComponent {...propsWithIsSmall} />
    }
  }
};