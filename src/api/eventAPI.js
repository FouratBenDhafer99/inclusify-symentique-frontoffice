import axios from "axios";

const url = "http://localhost:8095/";
const getEvents = async (categoryEvent = "", regexParam = "", orderBy = "", orderType = "") => {
    try {
        const response = await axios.get(url + "events", {params: {categoryEvent, regexParam, orderBy, orderType}});
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
    }
}


export default {getEvents}