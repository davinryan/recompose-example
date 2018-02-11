import React from 'react';
import Scroll from 'react-scroll';
import { defer } from 'lodash';

export default WrappedComponent => {
  const scroll = Scroll.animateScroll;
  const basicScrollToBottom = scroll.scrollToBottom.bind(null, { smooth: true, duration: 500 });
  const scrollToBottom = () => defer(basicScrollToBottom);

  return props => {

    const propsWithScrollToBottom = {
      ...props,
      scrollToBottom
    }
    return <WrappedComponent {...propsWithScrollToBottom} />
  };
};