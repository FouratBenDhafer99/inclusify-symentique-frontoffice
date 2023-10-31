import axios from "axios";
const url = "http://localhost:8095/";
const getUsers = async (role = "", regexParam = "", orderBy = "", orderType = "") => {
    try {
        const response = await axios.get(url + "users", {params: {role, regexParam, orderBy, orderType}});
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
    }
}

export default {getUsers}