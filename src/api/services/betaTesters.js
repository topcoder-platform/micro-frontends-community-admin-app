/**
 * Service to handle beta testers ops
 */
import betaTesters from "../mock/betaMembers.json";

/**
 * Get members of Beta Testers programm
 * @param {Object} req The request
 * @param {Object} res The response
 * @returns {Promise}
 */
export async function getMembers(req, res) {
  return betaTesters;
}
