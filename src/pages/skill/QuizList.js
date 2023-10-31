import Header from "../../components/Header";
import Leftnav from "../../components/Leftnav";
import Pagetitle from "../../components/Pagetitle";
import React, {Fragment, useEffect, useState} from "react";
import skillAPI from "../../api/skillAPI";

const QuizList = () => {

    const [quizzes, setQuizzes] = useState([])
    const fn = async ( regexParam = "", orderBy = "", orderType = "") => {
        await skillAPI.QuizList(regexParam, orderBy, orderType).then(res => {
            console.log(res)
            setQuizzes(res)
        })
    }

    useEffect(() => {
        fn()
    }, [])

    const [orderType, setOrderType] = useState("")
    const [orderBy, setOrderBy] = useState("")
    const [regexParam, setRegexParam] = useState("")

    const handleSortBy = async (field) => {
        console.log(field)
        fn( regexParam, field, orderBy === field ? orderType === "desc" ? "asc" : "desc" : "asc")
        setOrderBy(field)
        setOrderType(orderBy === field ? orderType === "desc" ? "asc" : "desc" : "asc")
    }


    const handleSearchByDescription = async (e) => {
        setRegexParam(e.target.value)
        fn( e.target.value, orderBy, orderType)
    }

    return (
        <Fragment>
            <Header/><Leftnav/>
            <div className="main-content">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left pe-0">
                        <div className="row">
                            <Pagetitle title="Quizzes" searchByInputFunction={handleSearchByDescription} />
                            <div className="table-content table-responsive">
                                <table className="table table-hover text-center">
                                    <thead className="bg-greyblue rounded-3">
                                    <tr>
                                        <th className="border-0 p-4 col-5"
                                            onClick={() => handleSortBy("userName")}>Player
                                        </th>
                                        <th className="border-0 p-4 col-5"
                                            onClick={() => handleSortBy("skillName")}>Skill
                                        </th>
                                        <th className="border-0 p-4 col-7"
                                            onClick={() => handleSortBy("score")}>Score
                                        </th>
                                        <th className="border-0 p-4 col-7"
                                            onClick={() => handleSortBy("playedAt")}>Played at
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {quizzes?.map((quiz, index) => (
                                        <tr key={index}>
                                            <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">{quiz.userName}</td>
                                            <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">{quiz.skillName}</td>
                                            <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">{quiz.score}</td>
                                            <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">{quiz.playedAt}</td>
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

export default QuizList