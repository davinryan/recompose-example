import React from 'react';
import { compose, lifecycle, withStateHandlers } from 'recompose';

export default (Child) => {

  const smallToMediumMQL = window.matchMedia('all and (max-width: 1179px)');

  const withDynamicResponsiveness = lifecycle({
    componentWillUnmount() {
      smallToMediumMQL.removeListener(this.props.handleMediaQueryChange);
    },

    componentWillMount() {
      smallToMediumMQL.addListener(this.props.handleMediaQueryChange);
    }
  });

  const withResponsiveModeProps = withStateHandlers(
    ({ initialValue = smallToMediumMQL.matches }) => ({
      isSmallToMedium: initialValue,
    }),
    {
      handleMediaQueryChange: ({ isSmallToMedium }) => (mql) => ({
        isSmallToMedium: mql.matches
      }),
    });

  const WithResponsive = compose(
    withResponsiveModeProps,
    withDynamicResponsiveness
  )(Child);
  return WithResponsive;
};