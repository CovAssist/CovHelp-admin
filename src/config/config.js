exports.fetchHeaders =
  process.env.NODE_ENV !== "production"
    ? {
        "Access-Control-Allow-Origin": "http://localhost:8000",
        "Content-type": "application/json",
      }
    : {
        "Access-Control-Allow-Origin":
          "https://supplychain.s4stechnologies.com",
        "Content-type": "application/json",
      };

exports.fetchOptions =
  process.env.NODE_ENV !== "production"
    ? { credentials: "include", crossDomain: true }
    : {};

// Proxy of server for development
exports.proxy =
  process.env.NODE_ENV !== "production" ? `http://localhost:8000/api` : "/api";
