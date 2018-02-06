import React from 'react';
import {withProps, defaultProps} from 'recompose';

const Greet = ({name}) => <p>Greetings {name}!</p>;

const GreetDeveloper = defaultProps({ name: 'Anonymous Developer'})(Greet);

const DefaultPropertiesExample = () =>
  <div>
    <h2>Default Properties Example</h2>
    <GreetDeveloper />
    <GreetDeveloper name='Davin'/>
  </div>;

export default DefaultPropertiesExample;