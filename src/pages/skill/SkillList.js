import React, {Fragment, useContext, useEffect, useState} from "react";
import Header from "../../components/Header";
import Leftnav from "../../components/Leftnav";
import Pagetitle from "../../components/Pagetitle";
import skillAPI from "../../api/skillAPI";

const SkillList = () => {

    const [skills, setSkills] = useState([])
    const fn = async (domain = "", regexParam = "", orderBy = "", orderType = "") => {
        await skillAPI.getSkills(domain, regexParam, orderBy, orderType).then(res => {
            console.log(res)
            setSkills(res)
        })
    }

    useEffect(() => {
        fn()
    }, [])

    const domains = ["Programming", "Language", "Design", "Management"]

    const [orderType, setOrderType] = useState("")
    const [orderBy, setOrderBy] = useState("")
    const [domain, setDomain] = useState("")
    const [regexParam, setRegexParam] = useState("")
    const handleSortBy = async (field) => {
        fn(domain, regexParam, field, orderBy === field ? orderType === "desc" ? "asc" : "desc" : "asc")
        setOrderBy(field)
        setOrderType(orderBy === field ? orderType === "desc" ? "asc" : "desc" : "asc")
    }

    const handleSearchByName = async (e) => {
        setRegexParam(e.target.value)
        fn(domain, e.target.value, orderBy, orderType)
    }

    const handleSearchByDomain = async (e) => {
        setDomain(e.target.value)
        fn(e.target.value, regexParam, orderBy, orderType)
    }

    return (
        <Fragment>
            <Header/><Leftnav/>
            <div className="main-content">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left pe-0">
                        <div className="row">
                            <Pagetitle title="Skills" searchByInputFunction={handleSearchByName}
                                       searchBySelectOptions={domains} searchBySelectFunction={handleSearchByDomain}/>
                            <div className="table-content table-responsive">
                                <table className="table table-hover text-center">
                                    <thead className="bg-greyblue rounded-3">
                                    <tr>
                                        <th className="border-0 p-4 col-5" onClick={() => handleSortBy("name")}>Name
                                        </th>
                                        <th className="border-0 p-4 col-7"
                                            onClick={() => handleSortBy("domain")}>Domain
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {skills?.map((item, index) => (
                                        <tr key={index}>
                                            <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">{item.name}</td>
                                            <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">{item.domain}</td>
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

export default SkillList