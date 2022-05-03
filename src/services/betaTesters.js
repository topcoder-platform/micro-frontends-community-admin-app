/**
 * Beta Testers Service
 */
// import { axiosInstance as axios } from "./requestInterceptor";
// import config from "../../config";
import betaTesters from "../api/mock/betaMembers.json";

/**
 * Loads the beta testers from db
 * @returns {Promise}
 */
export async function getBetaTesters() {
  // return axios.get(`${config.COMMUNITY_ADMIN_URL}/api/testers/members`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: betaTesters,
      });
    }, 1000);
  });
}
