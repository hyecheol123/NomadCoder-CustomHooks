/**
 * React Hook to ask user if s/he really want to exit the window
 *
 * @return {object} object contain enablePrevent event handler to enable close
 *   protection and disablePrevent event handler to disable close protection
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */
const usePreventLeave = () => {
  // Event Listeners
  const enablePrevent = () => {
    window.onbeforeunload = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };
  };
  const disablePrevent = () => {
    window.onbeforeunload = null;
  };

  return { enablePrevent, disablePrevent };
};

export default usePreventLeave;
