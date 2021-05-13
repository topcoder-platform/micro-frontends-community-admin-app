/**
 * Topcoder Members Service
 */
import qs from "qs";
import { axiosInstance as axios } from "./requestInterceptor";
import config from "../../config";

/**
 * Search for TC members
 * @param {Object} query The search query
 * @returns {Promise}
 */
export function searchMembers(query) {
  return axios.get(`${config.API.V5}/members?${qs.stringify(query)}`);
}

/**
 * Autocomplete for TC members
 * @param {Object} query The search query
 * @returns {Promise}
 */
export function autocompleteMembers(query) {
  return axios.get(
    `${config.API.V5}/members/autocomplete?${qs.stringify(query)}`
  );
}
