import { fetchUtils } from "react-admin";
const apiUrl =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:5000";
const httpClient = (url, options = {}) => {
  return fetchUtils.fetchJson(url, options);
};
let url = "";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const [start, end] = [(page - 1) * perPage, page * perPage - 1];
    switch (resource) {
      case "volunteers/verified":
        if (params.filter.name) {
          url = `${apiUrl}/api/volunteer/list?start=${start}&end=${end}&name=${params.filter.name}&verified=true`;
        } else {
          url = `${apiUrl}/api/volunteer/list?start=${start}&end=${end}&verified=true`;
        }
        // eslint-disable-next-line no-unused-vars
        const { headers, json } = await httpClient(url);
        json.data.data.forEach((dat) => {
          dat.id = dat._id;
        });

        return {
          data: json.data.data,
          total: json.data.count,
        };
      default:
        return;
    }
  },
};
