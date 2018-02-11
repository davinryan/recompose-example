import React from 'react';
import { compose, lifecycle, withStateHandlers } from 'recompose';

export default (WrappedComponent) => {

  const smallMQL = window.matchMedia('all and (max-width: 400px)');

  const withResponsiveModeStateAndHandlers = withStateHandlers(
    ({ initialValue = smallMQL.matches }) => ({
      isSmall: initialValue,
    }),
    {
      handleMediaQueryChange: ({ isSmall }) => (mql) => ({
        isSmall: mql.matches
      }),
    });
    
  const withDynamicResponsiveness = lifecycle({
    componentWillUnmount() {
      smallMQL.removeListener(this.props.handleMediaQueryChange);
    },

    componentWillMount() {
      smallMQL.addListener(this.props.handleMediaQueryChange);
    }
  });

return compose(
    withResponsiveModeStateAndHandlers,
    withDynamicResponsiveness
)(WrappedComponent);
};