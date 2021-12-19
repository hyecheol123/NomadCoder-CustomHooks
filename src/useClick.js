/**
 * useClick React Hook to execute a function when an element clicked
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import * as React from 'react';

/**
 * React Hook to execute a function when the element clicked
 *
 * @param {function} onClick function to execute on element click
 * @return {React.Ref} Ref to the element
 */
const useClick = (onClick) => {
  // Reference to the element
  const ref = React.useRef();

  // Setup eventHandler for click event
  React.useEffect(() => {
    // Check for the onCLick function
    if (typeof onClick !== 'function') {
      // Block binding event
      return;
    }

    // HTML element
    const element = ref.current;

    if (element) {
      element.addEventListener('click', onClick);
    }

    // Clean up when component unmounts
    return () => {
      if (element) {
        element.removeEventListener('click', onClick);
      }
    };
  }, [onClick]);

  return ref;
};

export default useClick;
