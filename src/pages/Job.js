import React, { Component , Fragment } from "react";
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Pagetitle from '../components/Pagetitle';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';
import axios from "axios";
import { useEffect, useState } from "react";





const Job= ()=> {
    const [Jobs, setJobs] = useState(null);
    const [Animal, setAnimal] = useState(null);
    const [Liquide, setLiquide] = useState(null);
    const [search, setSearch] = useState(null);
    const [orderBy, setOrderBy] = useState(null);
    const [orderType, setOrderType] = useState(null);
    const [isRadioChecked, setIsRadioChecked] = useState(false);
    const [regex, setRegex] = useState(null);


    useEffect(() => {
        getData();

    }, []);

    const getData = async (search,regex) => {
        console.log(regex);
        console.log(search);
        try {
            if (regex && isRadioChecked===true) {
                const res = axios.get(`http://localhost:8095/jobsSearch?regexParam=${regex}`)
                    .then((res) => {
                        console.log(res.data);
                        setJobs(res.data);
                    });
            } else if (search&&isRadioChecked===false) {
                const res = axios.get(`http://localhost:8095/jobsSearch?domain=${search}`)
                    .then((res) => {
                        setJobs(res.data);
                        console.log(res);
                    });
            } else if (orderBy && orderType) {
                const res = axios.get(`http://localhost:8095/jobsSearch?orderBy=${orderBy}&orderType=${orderType}`)
                    .then((res) => {
                        console.log(res.data);
                        setJobs(res.data);
                    });
            } else {
                const res = axios.get(`http://localhost:8095/jobsSearch`)
                    .then((res) => {
                        console.log(res.data);
                        setJobs(res.data);
                    });
            }
        } catch {
            console.log("error");
        }
    };


    const handleClick = () => {
        getData(search,regex);
        console.log(orderBy);
      }
    const handleRadioChange = (event) => {
        setIsRadioChecked(event.target.checked);
        console.log(isRadioChecked);
      } 
    
    
        return (
            <Fragment> 
                <Header />
                <Leftnav />

                <div className="main-content right-chat-active w-100" style={{maxWidth: "100%"}}>
                    <div className="middle-sidebar-bottom "style={{maxWidth: "100%"}}>
                        <div className="middle-sidebar-left pe-0" style={{maxWidth: "100%"}}>
                            <div className="row w-full">
                                <div className="col-xl-12 chat-left scroll-bar w-full">
                                <div className="card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3">
                                     <h2 className="fw-700 mb-0 mt-0 font-md text-grey-900 d-flex align-items-center">Jobs
                                        <form action="#" className="pt-0 pb-0 ms-auto row">
                                            <div className="search-form-2 ms-2 col">
                                            
                                                    <>
                                                        <i className="ti-search font-xss"></i>
                                                        <input type="text" 
                                                            className="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0"
                                                            placeholder="Search here."
                                                            onChange={(e) => {
                                                                setRegex(e.target.value) ; setSearch(e.target.value);
                                                               console.log("regex:", e.target.value);
                                                               getData(search,regex);
                                                           }}
                                                            
                                                            />
                                                    </> 
                                            </div>
                                            <div className="search-form-2 ms-2 col">
                                                    <>
                                                        <select className="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0"  onChange={(e) => {setOrderBy(e.target.value)}}>
                                                            <option value="address">Title</option>
                                                            <option value="description">Description</option>
                                                            <option value="salary_range">Salary</option>
                                                        </select>
                                                    </> 
                                            </div>
                                            <div className="search-form-2 ms-2 col">
                                                    <>
                                                        <i className="ti-search font-xss"></i>
                                                        <select 
                                                            className="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0" onChange={(e) => {setOrderType(e.target.value);
                                                            }  
                                                       }>
                                                           <option value="asc">ASC</option>
                                                            <option value="desc">DESC</option>
                                                        </select>
                                                    </> 
                                            </div>
                                            <div className="search-form-2 ms-2 col">
                                                    <>
                                                    <div>
                                                        <label>
                                                            
                                                            <h6>search by description</h6>
                                                        </label> 
                                                        <input
                                                            type="checkbox"
                                                            checked={isRadioChecked}
                                                            onChange={handleRadioChange}
                                                            />
                                                    </div> 
                                                    </> 
                                            </div>
                                            <div className="search-form-2 ms-2 col">
                                                    <>
                                                        <button className="btn btn-primary" onClick={handleClick}>Submit</button>
                                                    </>
                                            </div>
                                        </form>
                                    </h2>
                                </div>
                                    {Jobs?.map((value , index) => (

                                    <div key={index} className="card d-block w-100 border-0 mb-3 shadow-xss bg-white rounded-3 pe-4 pt-4 pb-4"  style={{paddingLeft: "120px"}}>
                                       {/* <img src={`assets/images/${value.imageUrl}`} alt="job-avater" className="position-absolute p-2 bg-lightblue2 w65 ms-4 left-0" /> */}
                                        <i className="feather-bookmark font-md text-grey-500 position-absolute right-0 me-3"></i>
                                        <h4 className="font-xss fw-700 text-grey-900 mb-3 pe-4">{value.title} <span className="font-xssss fw-500 text-grey-500 ms-4">({value.date})</span> </h4>
                                        <h5 className="font-xssss mb-2 text-grey-500 fw-600"><span className="text-grey-900 font-xssss text-dark">Location : </span> {value.address}</h5>
                                        <h5 className="font-xssss mb-2 text-grey-500 fw-600"><span className="text-grey-900 font-xssss text-dark">Description : </span>{value.description}</h5>
                                        <h5 className="font-xssss text-grey-500 fw-600 mb-3"><span className="text-grey-900 font-xssss text-dark">Salary : </span> {value.salary_range}</h5>
                                       
                                    </div>

                                    ))}

                                    
                                </div>

                                

                            </div>
                        </div>
                    </div>
                </div>

                <Popupchat />
                <Appfooter /> 
            </Fragment>
        );
    
}

export default Job;