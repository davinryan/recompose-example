import React from 'react';
const WithDefaults = (defaultProps) => (WrappedComponent) => {
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