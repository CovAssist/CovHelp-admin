import { fetchUtils } from "react-admin";
const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://covhelp.herokuapp.com"
    : "http://localhost:5000";
const httpClient = (url, options = {}) => {
  options.credentials = "include";
  return fetchUtils.fetchJson(url, options);
};
let url = "";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const [start, end] = [(page - 1) * perPage, page * perPage - 1];
    switch (resource) {
      case "volunteers/verified": {
        if (params.filter.name) {
          url = `${apiUrl}/api/volunteer/list?start=${start}&end=${end}&name=${params.filter.name}&verified=true&status=true`;
        } else {
          url = `${apiUrl}/api/volunteer/list?start=${start}&end=${end}&verified=true&status=true`;
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
      }
      case "volunteers/past": {
        if (params.filter.name) {
          url = `${apiUrl}/api/volunteer/list?start=${start}&end=${end}&name=${params.filter.name}&verified=true&status=false`;
        } else {
          url = `${apiUrl}/api/volunteer/list?start=${start}&end=${end}&verified=true&status=false`;
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
      }
      case "volunteers/unverified": {
        if (params.filter.name) {
          url = `${apiUrl}/api/volunteer/list?start=${start}&end=${end}&name=${params.filter.name}&verified=false&status=true`;
        } else {
          url = `${apiUrl}/api/volunteer/list?start=${start}&end=${end}&verified=false&status=true`;
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
      }
      case "oxygen/verified": {
        if (params.filter.city) {
          url = `${apiUrl}/api/oxygen/list?start=${start}&end=${end}&city=${params.filter.city}&verified=true&status=true`;
        } else {
          url = `${apiUrl}/api/oxygen/list?start=${start}&end=${end}&verified=true&status=true`;
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
      }
      case "oxygen/unverified": {
        if (params.filter.name) {
          url = `${apiUrl}/api/oxygen/list?start=${start}&end=${end}&name=${params.filter.name}&verified=false&status=true`;
        } else {
          url = `${apiUrl}/api/oxygen/list?start=${start}&end=${end}&verified=false&status=true`;
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
      }
      case "beds/verified": {
        if (params.filter.hoscity) {
          url = `${apiUrl}/api/beds/list?start=${start}&end=${end}&hoscity=${params.filter.hoscity}&verified=true&status=true`;
        } else {
          url = `${apiUrl}/api/beds/list?start=${start}&end=${end}&verified=true&status=true`;
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
      }
      case "beds/unverified": {
        if (params.filter.hoscity) {
          url = `${apiUrl}/api/beds/list?start=${start}&end=${end}&hoscity=${params.filter.hoscity}&verified=false&status=true`;
        } else {
          url = `${apiUrl}/api/beds/list?start=${start}&end=${end}&verified=false&status=true`;
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
      }
      case "medicine/verified": {
        if (params.filter.name) {
          url = `${apiUrl}/api/medicine/list?start=${start}&end=${end}&name=${params.filter.name}&verified=true&status=true`;
        } else {
          url = `${apiUrl}/api/medicine/list?start=${start}&end=${end}&verified=true&status=true`;
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
      }
      case "medicine/unverified": {
        if (params.filter.name) {
          url = `${apiUrl}/api/medicine/list?start=${start}&end=${end}&name=${params.filter.name}&verified=false&status=true`;
        } else {
          url = `${apiUrl}/api/medicine/list?start=${start}&end=${end}&verified=false&status=true`;
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
      }
      case "patient/verified": {
        if (params.filter.name) {
          url = `${apiUrl}/api/patient/list?start=${start}&end=${end}&name=${params.filter.name}&verified=true&status=true`;
        } else {
          url = `${apiUrl}/api/patient/list?start=${start}&end=${end}&verified=true&status=true`;
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
      }
      case "patient/unverified": {
        if (params.filter.name) {
          url = `${apiUrl}/api/patient/list?start=${start}&end=${end}&name=${params.filter.name}&verified=false&status=true`;
        } else {
          url = `${apiUrl}/api/patient/list?start=${start}&end=${end}&verified=false&status=true`;
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
      }
      case "donor": {
        if (params.filter.blood) {
          url = `${apiUrl}/api/donor/list?start=${start}&end=${end}&blood=${params.filter.blood}&verified=true&status=false`;
        } else {
          url = `${apiUrl}/api/donor/list?start=${start}&end=${end}&verified=true&status=false`;
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
      }
      default:
        return;
    }
  },
  create: async (resource, params) => {
    const request = await resource.split("/");
    console.log(typeof resource, resource);
    // eslint-disable-next-line no-unused-vars
    const { headers, json } = await httpClient(
      `${apiUrl}/api/${request[0]}/create?${
        request[1] === "verified" ? "verified=true" : "verified=false"
      }`,
      {
        method: "POST",
        body: JSON.stringify(params),
      }
    );
    if (json.success) {
      json.data.id = json.data._id;
      return Promise.resolve({ data: json.data });
    } else {
      console.log("hiiiiii");
      return Promise.reject(json);
    }
  },
};
