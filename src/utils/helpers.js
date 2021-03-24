/**
 * Helper utilities
 *
 * This file should contain helper methods which cannot be grouped into a separate file like we did for "format.js".
 * If there are multiple methods which could be grouped into a separate file by their meaning they should be extracted from here to not make this file too big.
 */
import { find } from "lodash";

/**
 * Delay code for some milliseconds using promise.
 *
 * @param {Number} duration duration in milliseconds
 *
 * @returns {Promise<void>} promise
 */
export const delay = (duration) =>
  new Promise((resolve) => {
    setTimeout(resolve, duration);
  });

/**
 * Returns the option from list of option by value
 *
 * @param {any} value value of option
 * @param {[{ label: string, value: any }]} selectOptions list of option
 *
 * @returns {{ label: string, value: any }} select option
 */
export const getSelectOptionByValue = (value, selectOptions) => {
  const option = find(selectOptions, { value });

  if (!option) {
    return {
      label: `Unsuppored value: ${value}`,
      value,
    };
  }

  return option;
};

/**
 * Test if a string is valid email
 * @param {String} email The string to test
 */
export function isValidEmail(email) {
  const pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  return pattern.test(email);
}
