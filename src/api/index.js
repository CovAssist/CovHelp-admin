import axios from "axios";
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://covhelp.herokuapp.com"
    : "http://localhost:5000";

export const changeVolunteerStatus = async (body, verified) => {
  try {
    console.log(body);
    const { data } = await axios.post(
      `${baseUrl}/api/volunteer/changestatus?${
        verified ? "verified=true" : null
      }`,
      body
    );
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};
export const approve = async (body, verified, model) => {
  try {
    const { data } = await axios.post(
      `${baseUrl}/api/${model}/changestatus?${
        verified ? "verified=true" : null
      }`,
      body
    );
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};
