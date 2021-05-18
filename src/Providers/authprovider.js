import axios from "axios";
axios.defaults.withCredentials = true;
const apiUrl =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:5000";
const fetchHeaders =
  process.env.NODE_ENV !== "production"
    ? { "Access-Control-Allow-Origin": "http://localhost:3000" }
    : {};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login: async ({ username, password }) => {
    const { data } = await axios.post(
      `${apiUrl}/api/auth/login`,
      { username, password },
      {
        withCredentials: true,
        crossDomain: true,
        headers: new Headers({
          "Content-type": "application/json",
          ...fetchHeaders,
        }),
      }
    );
    if (data.success) {
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  },
  logout: async () => {
    await axios.get(`${apiUrl}/api/auth/logout`);
    return Promise.resolve();
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: async () => {
    const { data } = await axios.get(`${apiUrl}/api/auth/checkauth`);
    return data.success ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
};
