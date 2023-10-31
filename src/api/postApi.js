import axios from "axios";

const url = "http://localhost:8095/";
const getPosts = async (
  PostType = "",
  regexParam = "",
  date = "",
  orderBy = "",
  orderType = ""
) => {
  try {
    const response = await axios.get(url + "posts", {
      params: { PostType, regexParam, date, orderBy, orderType },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};
const getComments = async (
  score = "",
  regexParam = "",
  orderBy = "",
  orderType = ""
) => {
  try {
    console.log(orderBy);
    const response = await axios.get(url + "comments");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};
export default { getPosts, getComments };
