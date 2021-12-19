/**
 * useBeforeLeave React Hook to execute a function when user leaves the tab
 */

import * as React from 'react';

/**
 * React Hook to execute a function when user leaves the tab
 *
 * @param {function} onLeave Event handler function which wants to be executed
 *   when user leaves the tab
 */
const useBeforeLeave = (onLeave) => {
  React.useEffect(() => {
    // onLeave type check
    if (typeof onLeave !== 'function') {
      return;
    }

    // Add event listener
    document.addEventListener('mouseleave', onLeave);

    // Cleanup
    return () => document.removeEventListener('mouseleave', onLeave);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useBeforeLeave;
