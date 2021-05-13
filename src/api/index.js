import axios from "axios";
const baseUrl =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:5000";

export const changeVolunteerStatus = async (body) => {
  try {
    console.log(body);
    const { data } = await axios.post(
      `${baseUrl}/api/volunteer/changestatus`,
      body
    );
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};
