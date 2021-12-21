/**
 * React Hook to send notification
 *
 * @param {string} title notification's title
 * @param {object} options Notification option (See MDN Reference)
 * @return {function} function to trigger notification
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */
const useNotification = (title, options) => {
  // Check whether the browser supports Notification API or not
  if (!('Notification' in window)) {
    return;
  }

  return () => {
    if (Notification.permission !== 'granted') {
      // Ask for permission
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          // Notification permission granted
          new Notification(title, options);
        } else {
          // Permission denied
          return;
        }
      });
    } else {
      // Create new notification
      new Notification(title, options);
    }
  };
};

export default useNotification;
