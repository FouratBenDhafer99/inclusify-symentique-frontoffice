import React, {Fragment, useEffect, useState} from "react";
import Header from "../../components/Header";
import Leftnav from "../../components/Leftnav";
import Pagetitle from "../../components/Pagetitle";
import eventAPI from "../../api/eventAPI";

const EventList = () => {

    const [events, setEvents] = useState([])
    const fn = async (categoryEvent = "", regexParam = "", orderBy = "", orderType = "") => {
        await eventAPI.getEvents(categoryEvent, regexParam, orderBy, orderType).then(res => {
            console.log(res)
            setEvents(res)
        })
    }

    useEffect(() => {
        fn()
    }, [])

    const categoryEvents = ["Learn", "Health", "Technology", "Entertainment"]

    const [orderType, setOrderType] = useState("")
    const [orderBy, setOrderBy] = useState("")
    const [categoryEvent, setCategoryEvent] = useState("")
    const [regexParam, setRegexParam] = useState("")
    const handleSortBy = async (field) => {
        fn(categoryEvent, regexParam, field, orderBy === field ? orderType === "desc" ? "asc" : "desc" : "asc")
        setOrderBy(field)
        setOrderType(orderBy === field ? orderType === "desc" ? "asc" : "desc" : "asc")
    }

    const handleSearchByTitle = async (e) => {
        setRegexParam(e.target.value)
        fn(categoryEvent, e.target.value, orderBy, orderType)
    }

    const handleSearchByCategoryEvent = async (e) => {
        setCategoryEvent(e.target.value)
        fn(e.target.value, regexParam, orderBy, orderType)
    }

    return (
        <Fragment>
            <Header/><Leftnav/>
            <div className="main-content">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left pe-0">
                        <div className="row">
                            <Pagetitle title="Online Events" searchByInputFunction={handleSearchByTitle}
                                       searchBySelectOptions={categoryEvents} searchBySelectFunction={handleSearchByCategoryEvent}/>
                            <div className="table-content table-responsive">
                                <table className="table table-hover text-center">
                                    <thead className="bg-greyblue rounded-3">
                                    <tr>
                                        <th className="border-0 p-4 col-5" onClick={() => handleSortBy("title")}>Title
                                        </th>
                                        <th className="border-0 p-4 col-7"
                                            onClick={() => handleSortBy("categoryEvent")}>CategoryEvent
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {events?.map((item, index) => (
                                        <tr key={index}>
                                            <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">{item.title}</td>
                                            <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">{item.categoryEvent}</td>
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

export default EventList