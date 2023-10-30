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
const getQuestions = async (score = "", regexParam = "", orderBy = "", orderType = "") => {
    try {
        console.log(orderBy)
        const response = await axios.get(url + "questions", {params: {score, regexParam, orderBy, orderType}});
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
    }
}
const getAnswers = async (isCorrect = "", regexParam = "", orderBy = "", orderType = "") => {
    try {
        console.log(orderBy)
        const response = await axios.get(url + "answers", {params: {isCorrect, regexParam, orderBy, orderType}});
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
    }
}

export default {getSkills, getQuestions, getAnswers}