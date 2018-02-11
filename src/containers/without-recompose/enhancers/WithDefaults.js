import React from 'react';

const WithDefaults = (WrappedComponent, defaultProps) => {
  return (props) => {
    const mergedProps = {
      ...defaultProps,
      ...props
    }
    return (
      <WrappedComponent {...mergedProps} />
    );
  }
};

export default WithDefaults;