import React from 'react';
import { compose, lifecycle, withStateHandlers } from 'recompose';

export default (Child) => {

  const smallMQL = window.matchMedia('all and (max-width: 400px)');

  const withResponsiveModeProps = withStateHandlers(
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

  const WithResponsive = compose(
    withResponsiveModeProps,
    withDynamicResponsiveness
  )(Child);
  return WithResponsive;
};