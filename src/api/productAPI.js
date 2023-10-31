import axios from "axios";

const url = "http://localhost:8095/";

const getProducts = async (typeParam = "", regexParam = "", orderBy = "", orderType = "") => {
    try {
        console.log(orderBy)
        const response = await axios.get(url + "getallproducts", { params: { typeParam, regexParam, orderBy, orderType } });
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
    }
}

export default { getProducts }