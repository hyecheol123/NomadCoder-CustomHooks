/**
 * useScroll React Hook to detect scroll location
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import * as React from 'react';

/**
 * React Hook to detect scroll location
 *
 * @return {object} object containing x and y scroll location
 */
const useScroll = () => {
  // State: Scroll Location
  const [location, setLocation] = React.useState({ x: 0, y: 0 });

  const onScroll = () => {
    setLocation({ x: window.scrollX, y: window.scrollY });
  };
  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return location;
};

export default useScroll;
