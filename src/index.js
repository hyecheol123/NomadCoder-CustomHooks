/**
 * Entry point of the application
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import React from 'react';
import ReactDom from 'react-dom';
import useInput from './useInput';
import useTabs from './useTabs';
import useTitle from './useTitle';

// Response from API
const content = [
  { tab: 'Section 1', content: 'I am the content of the Section 1' },
  { tab: 'Section 2', content: 'I am the content of the Section 2' },
];

/**
 * A React functional component representing the app
 *
 * @return {React.ReactElement} A ReactElement for the App
 */
const App = () => {
  // Name input (Max Length = 10)
  const name = useInput('Mr.', (value) => value.length <= 10);
  // Tab selector
  const { currentItem, changeItem } = useTabs(0, content);
  // Function to update the document's title
  const titleUpdater = useTitle('Loading');
  setTimeout(() => titleUpdater('Home'), 5000); // Change title after 5 second

  return (
    <div>
      <h1>Hello</h1>
      <div id="useInput">
        {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
        <input placeholder="Name" {...name} />
      </div>
      <br />
      <div id="useTab">
        {content.map((section, index) => (
          <button onClick={() => changeItem(index)} key={index}>
            {section.tab}
          </button>
        ))}
        <div>{currentItem.content}</div>
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
