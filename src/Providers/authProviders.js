import axios from "axios";
axios.defaults.withCredentials = true;
const apiUrl =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:5000";
const fetchHeaders =
  process.env.NODE_ENV !== "production"
    ? { "Access-Control-Allow-Origin": "http://localhost:3000" }
    : {};
export default {
  login: async ({ username, password }) => {
    const { data } = await axios.post(
      `${apiUrl}/api/auth/login`,
      {
        username: username,
        password: password,
      },
      {
        withCredentials: true,
        crossDomain: true,
        headers: new Headers({
          "Content-type": "application/json",
          ...fetchHeaders,
        }),
      }
    );
    if (data.success === true) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("adid", data.id);
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
    // if (username === "admin@s4stechnologies.com" && password === "admin123") {
    //   localStorage.setItem("token", "loggedin123");
    //   return Promise.resolve();
    // } else return Promise.reject();
  },
  logout: async () => {
    localStorage.removeItem("token");
    await axios.get(`${apiUrl}/api/auth/logout`);
    return Promise.resolve();
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      localStorage.removeItem("token");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: async () => {
    const { data } = await axios.post(
      `${apiUrl}/api/auth/checkauth`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    localStorage.setItem("adid", data.id);
    return data.success ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
};
