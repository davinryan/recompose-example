import React from 'react';
import WithResponsive from '../../../containers/enhancers/WithResponsive';
import classNames from 'classnames';
import './Responsive.css';

const ResponsiveExample = ({isSmall}) => {

  const responsiveCube = classNames({
    smallResponsiveBox: isSmall,
    largeResponsiveBox: !isSmall
  });

  return <div>
      <h2>Responsive Example</h2>
      <p>isSmall: {JSON.stringify(isSmall)}</p>
      <div className='responsiveContainer'>
      <div className={`responsiveBox ${responsiveCube}`}>
        </div>
      </div>
    </div>;
}
export default WithResponsive(ResponsiveExample);