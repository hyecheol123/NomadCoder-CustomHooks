/**
 * useFullscreen React Hook to make element to be displayed in full screen
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import * as React from 'react';

/**
 * React Hook to make element to be displayed in full screen
 *
 * @param {function} onFullscreen callback function that will be run after
 *   triggering and exiting the full screen mode This callback function should
 *   get one boolean argument.
 * @return {object} object with element Ref, function to trigger full screen,
 *   and exit full screen.
 */
const useFullscreen = (onFullscreen) => {
  // Reference to the target element
  const element = React.useRef();

  /**
   * Function to trigger full screen mode
   */
  const triggerFullscreen = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (onFullscreen && typeof onFullscreen === 'function') {
        onFullscreen(true);
      }
    }
  };

  /**
   * Function to exit from full screen mode
   */
  const exitFullscreen = () => {
    if (document.fullscreenElement !== null) {
      document.exitFullscreen();
      if (onFullscreen && typeof onFullscreen === 'function') {
        onFullscreen(false);
      }
    }
  };

  return { element, triggerFullscreen, exitFullscreen };
};

export default useFullscreen;
