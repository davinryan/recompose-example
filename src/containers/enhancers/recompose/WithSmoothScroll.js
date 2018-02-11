import React from 'react';
import {compose, withProps} from 'recompose';
import Scroll from 'react-scroll';
import {defer} from 'lodash';

const scroll = Scroll.animateScroll;

export default (Child) => {

  const basicScrollToBottom = scroll.scrollToBottom.bind(null, { smooth: true, duration: 500 });

  const scrollToBottom = () => {
    defer(basicScrollToBottom);
  };

  return compose(
    withProps((ownerProps: any) => ({scrollToBottom})
    ))(Child);
};