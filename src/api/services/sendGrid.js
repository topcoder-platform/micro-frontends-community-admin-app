/**
 * Server-side functions necessary for sending emails via Sendgrid APIs
 */
/* global process */
const fetch = require("isomorphic-fetch");

/**
 * Sends emails via the Sendgrid API
 * https://sendgrid.com/docs/api-reference/
 * @param {Object} req the request
 * @param {Object} res the response
 */
const sendEmail = async (req, res) => {
  try {
    const msg = req.body;
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      },
      body: JSON.stringify(msg),
    });
    res.status(response.status);
    return {};
  } catch (error) {
    const { message, code, response } = error;
    res.status(code || 500);
    if (error.response) {
      const { headers, body } = response;
      return {
        message,
        headers,
        body,
      };
    }
    return { message };
  }
};

/**
 * Send email directly via the SendGrid API
 * @param {Object} msg the payload
 * @returns Promise
 */
const sendEmailDirect = async (msg) => {
  try {
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      },
      body: JSON.stringify(msg),
    });
    return response;
  } catch (error) {
    const { message, code, response } = error;
    if (error.response) {
      const { headers, body } = response;
      return {
        code,
        message,
        headers,
        body,
      };
    }
    return { message };
  }
};

module.exports = {
  sendEmail,
  sendEmailDirect,
};
