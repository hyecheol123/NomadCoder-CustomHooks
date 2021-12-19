/**
 * useTitle React Hook to update HTML document's title
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import * as React from 'react';

/**
 * React Hook to update HTML document's title
 *
 * @param {string} initialTitle initial document's name
 * @return {function} a function to update the title of the document
 */
const useTitle = (initialTitle) => {
  // State
  const [title, setTitle] = React.useState(initialTitle);

  // Set title of the document
  React.useEffect(() => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  }, [title]);

  // Return setTitle so that user can update the document's title
  return setTitle;
};

export default useTitle;
