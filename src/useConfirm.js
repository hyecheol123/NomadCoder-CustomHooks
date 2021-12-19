/**
 * React Hook to ask user before do a certain task
 *
 * @param {string} message string message to display on alert
 * @param {function} confirmCallback action to do when user confirm the choice
 * @param {function} abortCallback action to do when user decline the choice
 * @return {function} a event handler function to check user's response and
 *   conduct proper action
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */
const useConfirm = (message = '', confirmCallback, abortCallback) => {
  // Check for callback's type
  if (
    typeof confirmCallback !== 'function' ||
    typeof abortCallback !== 'function'
  ) {
    return;
  }

  return () => {
    if (window.confirm(message)) {
      confirmCallback();
    } else {
      abortCallback();
    }
  };
};

export default useConfirm;
