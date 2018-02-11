import React from 'react';
import {withProps, defaultProps} from 'recompose';
import WithDefaults from '../../../containers/without-recompose/enhancers/WithDefaults';
import './DefaultProperties.css';

const Greet = ({name}) => <p>Greetings {name}!</p>;

const GreetDeveloper = WithDefaults({ name: 'Anonymous Developer'})(Greet);
const GreetDeveloperRecompose = defaultProps({ name: 'Anonymous Developer'})(Greet);

const DefaultPropertiesExample = () =>
  <div>
    
    <h2>Without Recompose</h2>
    <div className='defaultProperties-exampleBox'>
      <h3>Default Properties Example</h3>
      <GreetDeveloper />
      <GreetDeveloper name='Davin' />
    </div>

    <h2>With Recompose</h2>
    <div className='defaultProperties-exampleBox'>
      <h3>Default Properties Example</h3>
      <GreetDeveloperRecompose />
      <GreetDeveloperRecompose name='Davin'/>
    </div>
  </div>;

export default DefaultPropertiesExample;