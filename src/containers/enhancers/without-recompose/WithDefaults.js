import React from "react";

export default defaultProps => WrappedComponent => {
  return props => {
    const mergedProps = {
      ...defaultProps,
      ...props
    };
    return <WrappedComponent {...mergedProps} />;
  };
};
