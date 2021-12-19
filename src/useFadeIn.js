/**
 * useFadeIn React Hook to make element fade in
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import * as React from 'react';

/**
 * React Hook to make element fade in
 *
 * @param {number} duration duration of fade in animation (in second)
 * @param {number} delay animation will play after given second of delay
 * @return {object} object containing React.Ref and
 *   default style for the element
 */
const useFadeIn = (duration = 1, delay = 0) => {
  // Reference to the elements
  const element = React.useRef();

  React.useEffect(() => {
    if (typeof duration !== 'number' || typeof delay !== 'number') {
      return;
    }

    if (element.current) {
      element.current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      element.current.style.opacity = 1;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

export default useFadeIn;
