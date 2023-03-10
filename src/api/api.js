import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  //////////////////////////////////////////////////////
  // USER ROUTES

  /**
   * Get details on a user by username.
   * */

  static async getCurrentUser(username) {
    const res = await this.request(`users/${username}`);
    return res.user;
  }

  /**
   * Add job to user's applications by username and jobId
   * */
  static async apply({ username, id }) {
    const res = await this.request(`users/${username}/jobs/${id}`, {}, "post");
    return res.applied;
  }

  /**
   * Update a user's profile by username
   * - data includes: firstName, lastName, email
   * */

  static async updateUserProfile({ username, ...data }) {
    const res = await this.request(`users/${username}`, data, "PATCH");
    return res.user;
  }

  //////////////////////////////////////////////////////
  // AUTH ROUTES

  /**
   * Log a user in
   * - data includes: username, password
   * */

  static async login(data) {
    const res = await this.request("auth/token", data, "POST");
    return res.token;
  }

  /**
   * Sign a user up
   * - data includes: username, password, firstName, lastName, email
   * */

  static async signup(data) {
    const res = await this.request("auth/register", data, "POST");
    return res.token;
  }

  //////////////////////////////////////////////////////
  // COMPANY ROUTES

  /**
   * Get details on a company by handle.
   * */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /**
   * Get list of all companies.
   * - Can filter companies by name
   */

  static async getAllCompanies(filterTerm) {
    let res = !filterTerm
      ? await this.request("companies/")
      : await this.request(`companies?name=${filterTerm}`);
    return res.companies;
  }

  //////////////////////////////////////////////////////
  // JOB ROUTES

  /**
   * Get details on a job by id.
   * */

  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  /**
   * Get list of all jobs.
   * - Can filter jobs by title
   * */

  static async getAllJobs(filterTerm) {
    let res = !filterTerm
      ? await this.request("jobs/")
      : await this.request(`jobs?title=${filterTerm}`);

    return res.jobs;
  }
}

export default JoblyApi;
