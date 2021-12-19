/**
 * useTabs React Hook to display content based on the index
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import * as React from 'react';

/**
 * React Hook to change displaying content easily
 *
 * @param {number} initialTabIdx indicate the initial content's index to display
 * @param {array} allTabs array of contents
 * @return {object} object containing currentItem based on the initialTabIdx and
 *   changeItem function to modify the displaying content.
 */
const useTabs = (initialTabIdx, allTabs) => {
  // State
  const [currentIndex, setCurrentIndex] = React.useState(initialTabIdx);

  // Check for allTabs (Should be an array)
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};

export default useTabs;
