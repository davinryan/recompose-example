import React from 'react';
import {compose, withProps} from 'recompose';
import Scroll from 'react-scroll';
import {defer} from 'lodash';

export default WrappedComponent => {
  const scroll = Scroll.animateScroll;
  const basicScrollToBottom = scroll.scrollToBottom.bind(null, { smooth: true, duration: 500 });
  const scrollToBottom = () => defer(basicScrollToBottom);

  return compose(
    withProps((ownerProps) => ({scrollToBottom})
    ))(WrappedComponent);
};