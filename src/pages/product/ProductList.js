import React, { Fragment, useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import Leftnav from "../../components/Leftnav";
import Pagetitle from "../../components/Pagetitle";
import productAPI from "../../api/productAPI";

const ProductList = () => {

    const [products, setProducts] = useState([])
    const fn = async (typeParm = "", regexParam = "", orderBy = "", orderType = "") => {
        await productAPI.getProducts(typeParm, regexParam, orderBy, orderType).then(res => {
            console.log(res)
            setProducts(res)
        })
    }

    useEffect(() => {
        fn()
    }, [])

    const typeParms = ["Mobility", "Electronics"]

    const [orderType, setOrderType] = useState("")
    const [orderBy, setOrderBy] = useState("")
    const [type, setType] = useState("")
    const [regexParam, setRegexParam] = useState("")
    const handleSortBy = async (field) => {
        fn(type, regexParam, field, orderBy === field ? orderType === "desc" ? "asc" : "desc" : "asc")
        setOrderBy(field)
        setOrderType(orderBy === field ? orderType === "desc" ? "asc" : "desc" : "asc")
    }

    const handleSearchByName = async (e) => {
        setRegexParam(e.target.value)
        fn(type, e.target.value, orderBy, orderType)
    }

    const handleSearchByType = async (e) => {
        setType(e.target.value)
        fn(e.target.value, regexParam, orderBy, orderType)
    }

    return (
        <Fragment>
            <Header /><Leftnav />
            <div className="main-content">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left pe-0">
                        <div className="row">
                            <Pagetitle title="Products" searchByInputFunction={handleSearchByName}
                                searchBySelectOptions={typeParms} searchBySelectFunction={handleSearchByType} />
                            <div className="table-content table-responsive">
                                <table className="table table-hover text-center">
                                    <thead className="bg-greyblue rounded-3">
                                        <tr>
                                            <th className="border-0 p-4 col-5" onClick={() => handleSortBy("name")}>Name
                                            </th>
                                            <th className="border-0 p-4 col-5" onClick={() => handleSortBy("description")}>Description
                                            </th>
                                            <th className="border-0 p-4 col-5" onClick={() => handleSortBy("price")}>Price
                                            </th>
                                            <th className="border-0 p-4 col-5" onClick={() => handleSortBy("quantity")}>Quantity
                                            </th>
                                            <th className="border-0 p-4 col-7"
                                                onClick={() => handleSortBy("type")}>Type
                                            </th>
                                            <th className="border-0 p-4 col-7"
                                                onClick={() => handleSortBy("date")}>Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products?.map((item, index) => (
                                            <tr key={index}>
                                                <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">{item.name}</td>
                                                <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">{item.description}</td>
                                                <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">{item.price}</td>
                                                <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">{item.quantity}</td>
                                                <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">{item.type}</td>
                                                <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">{item.date}</td>
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

export default ProductList