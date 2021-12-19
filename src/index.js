/**
 * Entry point of the application
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import React from 'react';
import ReactDom from 'react-dom';
import useInput from './useInput';

/**
 * A React functional component representing the app
 *
 * @return {React.ReactElement} A ReactElement for the App
 */
const App = () => {
  // Name input (Max Length = 10)
  const name = useInput('Mr.', (value) => value.length <= 10);

  return (
    <div>
      <h1>Hello</h1>
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
      <input placeholder="Name" {...name} />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
