import Header from "../../components/Header";
import Leftnav from "../../components/Leftnav";
import Pagetitle from "../../components/Pagetitle";
import React, {Fragment, useEffect, useState} from "react";
import skillAPI from "../../api/skillAPI";

const QuestionList = () => {

    const [questions, setQuestions] = useState([])
    const fn = async (score = "", regexParam = "", orderBy = "", orderType = "") => {
        await skillAPI.getQuestions(score, regexParam, orderBy, orderType).then(res => {
            console.log(res)
            setQuestions(res)
        })
    }

    useEffect(() => {
        fn()
    }, [])

    const [orderType, setOrderType] = useState("")
    const [orderBy, setOrderBy] = useState("")
    const [score, setScore] = useState("")
    const [regexParam, setRegexParam] = useState("")

    const handleSortBy = async (field) => {
        console.log(field)
        fn(score, regexParam, field, orderBy === field ? orderType === "desc" ? "asc" : "desc" : "asc")
        setOrderBy(field)
        setOrderType(orderBy === field ? orderType === "desc" ? "asc" : "desc" : "asc")
    }

    const handleSearchByScore = async (e) => {
        setScore(e.target.value)
        fn(e.target.value, regexParam, orderBy, orderType)
    }

    const handleSearchByDescription = async (e) => {
        setRegexParam(e.target.value)
        fn(score, e.target.value, orderBy, orderType)
    }

    return (
        <Fragment>
            <Header/><Leftnav/>
            <div className="main-content">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left pe-0">
                        <div className="row">
                            <Pagetitle title="Questions" searchByInputFunction={handleSearchByDescription} searchByNumberInputFunction={handleSearchByScore}/>
                            <div className="table-content table-responsive">
                                <table className="table table-hover text-center">
                                    <thead className="bg-greyblue rounded-3">
                                    <tr>
                                        <th className="border-0 p-4 col-5"
                                            onClick={() => handleSortBy("description")}>Question
                                        </th>
                                        <th className="border-0 p-4 col-7"
                                            onClick={() => handleSortBy("questionScore")}>Score
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {questions?.map((question, index) => (
                                        <tr key={index}>
                                            <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">{question.description}</td>
                                            <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">{question.questionScore}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default QuestionList