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
import useClick from './useClick';
import useConfirm from './useConfirm';
import usePreventLeave from './usePreventLeave';

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
  // Add a click event on title
  const titleRef = useClick(() => console.log('Hello'));
  // Delete function with user's confirmation
  const confirmDelete = useConfirm(
    'Are you sure?',
    () => console.log('Delete Everything'),
    () => console.log('Delete Canceled')
  );
  // Event Listeners to prevent/allow users to close the window
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div>
      <h1 ref={titleRef}>Hello</h1>
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
      <br />
      <div>
        <button onClick={confirmDelete}>Delete Everything</button>
      </div>
      <br />
      <div>
        <button onClick={enablePrevent}>Prevent Close</button>
        <button onClick={disablePrevent}>Allow Close</button>
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
