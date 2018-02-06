import React from 'react';
import {withProps, defaultProps} from 'recompose';

const Greeting = ({name}) => <div>Greetings {name}</div>;

const GreetDeveloper = defaultProps({ name: 'Developer'})(Greeting);

const DefaultPropertiesExample = () =>
  <div>
    <h2>Default Properties Example</h2>
    <GreetDeveloper />
    <GreetDeveloper name='Davin'/>
  </div>;

export default DefaultPropertiesExample;