import React from 'react';
import {withProps, defaultProps} from 'recompose';
import WithDefaults from '../../../containers/enhancers/without-recompose/WithDefaults';
import './DefaultProperties.css';

const Greet = ({name}) => <p>Greetings {name}!</p>;

const GreetDeveloper = WithDefaults({ name: 'Anonymous Developer'})(Greet);
const GreetDeveloperRecompose = defaultProps({ name: 'Anonymous Developer'})(Greet);

const DefaultPropertiesExample = () =>
  <div>
    <h2>Default Properties Example</h2>

    <h3>Without Recompose</h3>
    <div className='defaultProperties-exampleBox'>
      <GreetDeveloper />
      <GreetDeveloper name='Davin' />
    </div>

    <h3>With Recompose</h3>
    <div className='defaultProperties-exampleBox'>
      <GreetDeveloperRecompose />
      <GreetDeveloperRecompose name='Davin'/>
    </div>
  </div>;

export default DefaultPropertiesExample;