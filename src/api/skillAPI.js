import axios from "axios";

const url = "http://localhost:8095/";
const getSkills = async (domain = "", regexParam = "", orderBy = "", orderType = "") => {
    try {
        const response = await axios.get(url + "skills", {params: {domain, regexParam, orderBy, orderType}});
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
    }
}

export default {getSkills}