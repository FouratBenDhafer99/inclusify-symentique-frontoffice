import React from 'react'
import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import { Fragment } from 'react';
import { useState } from 'react';

function UserList() {
    const [Users, setUsers] = useState(null);
  return (
    <Fragment>
    <Header/><Leftnav/>
    <div className="main-content">
        <div className="middle-sidebar-bottom">
            <div className="middle-sidebar-left pe-0">
                <div className="row">
                    {/* <Pagetitle title="Skills" searchByInputFunction={handleSearchByName}
                               searchBySelectOptions={domains} searchBySelectFunction={handleSearchByDomain}/> */}
                    <div className="table-content table-responsive">
                        <table className="table table-hover text-center">
                            <thead className="bg-greyblue rounded-3">
                            <tr>
                                <th className="border-0 p-4 col-3" >Name
                                </th>
                                <th className="border-0 p-4 col-3"
                                   >Email
                                </th>
                                <th className="border-0 p-4 col-3"
                                   >Address
                                </th>
                                <th className="border-0 p-4 col-3"
                                   >Current Job
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {Users?.map((item, index) => (
                                <tr key={index}>
                                    <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">{item.name}</td>
                                    <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">{item.email}</td>
                                    <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">{item.address}</td>
                                    <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">{item?.currentJob}</td>
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

export default UserList