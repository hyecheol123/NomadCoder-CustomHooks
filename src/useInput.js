/**
 * useInput React Hook to handle user's input change on HTML input box
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

import * as React from 'react';

/**
 * React Hook to handle user's input change on HTML input box
 *
 * @param {string} initialValue initial value of the input box
 * @param {function} validator input validator function
 * @return {object} return an object with value and onChange function
 */
const useInput = (initialValue, validator = undefined) => {
  // State
  const [value, setValue] = React.useState(initialValue);

  // Function to change the value when input content changes
  const onChange = (event) => {
    // Validate the function if validator is not undefined
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(event.target.value);
    }
  };

  return { value, onChange };
};

export default useInput;
