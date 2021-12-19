/**
 * useNetwork React Hook to detect network status and execute a function when
 *   network status changes
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import * as React from 'react';

/**
 * React Hook to detect network status and execute a function when network
 *   status changes
 *
 * @param {function} onChange the function that will be triggered when the
 *   network status chagnes
 * @return {boolean} ture when online, false when offline
 */
const useNetwork = (onChange) => {
  // State for network status
  const [status, setStatus] = React.useState(navigator.onLine);

  // Event Handler Function
  const handleChange = () => {
    // Call the onChange function with current network status
    if (typeof onChange === 'function') {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  // Function calls when network status changes
  React.useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);

    // Cleanup
    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return status;
};

export default useNetwork;
