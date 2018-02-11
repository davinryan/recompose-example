import React from 'react';
import WithResponsive from '../../../containers/enhancers/without-recompose/WithResponsive';
import WithResponsiveRecompose from '../../../containers/enhancers/recompose/WithResponsive';
import classNames from 'classnames';
import './Responsive.css';

const ResponsiveExample = () => {

  const ResponsiveCube = ({ isSmall }) => {
    const responsiveCube = classNames({
      smallResponsiveBox: isSmall,
      largeResponsiveBox: !isSmall
    });

    return (
      <div>
        <p>isSmall: {JSON.stringify(isSmall)}</p>
        <div className='responsiveContainer'>
          <div className={`responsiveBox ${responsiveCube}`} />
        </div>
      </div>
    );
  }

  const ResponsiveCubeWithoutRecompose = WithResponsive(ResponsiveCube);
  const ResponsiveCubeWithRecompose = WithResponsiveRecompose(ResponsiveCube);

  return (
    <div>
      <h2>Responsive Example</h2>

      <h3>Without Recompose</h3>
      <ResponsiveCubeWithoutRecompose />

      <h3>WithRecompose</h3>
      <ResponsiveCubeWithRecompose />
    </div>
  );
}
export default ResponsiveExample;