import React from 'react';
import Scroll from 'react-scroll';
import { defer } from 'lodash';

const scroll = Scroll.animateScroll;

export default WrappedComponent => {

  const basicScrollToBottom = scroll.scrollToBottom.bind(null, { smooth: true, duration: 500 });

  const scrollToBottom = () => {
    defer(basicScrollToBottom);
  };

  return props => {

    const propsWithScrollToBottom = {
      ...props,
      scrollToBottom
    }
    return <WrappedComponent {...propsWithScrollToBottom} />
  };
};