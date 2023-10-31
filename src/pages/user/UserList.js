import React, { Fragment, useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import Leftnav from "../../components/Leftnav";
import Pagetitle from "../../components/Pagetitle";
import skillAPI from "../../api/skillAPI";
import userAPI from "../../api/userAPI";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const fn = async (
    role = "",
    regexParam = "",
    orderBy = "",
    orderType = ""
  ) => {
    await userAPI
      .getUsers(role, regexParam, orderBy, orderType)
      .then((res) => {
        console.log(res);
        setUsers(res);
      });
  };

  useEffect(() => {
    fn();
  }, []);

  const roles = ["User", "Normal user", "Admin", "Employer", "Job seeker"];

  const [orderType, setOrderType] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [role, setRole] = useState("");
  const [regexParam, setRegexParam] = useState("");
  const handleSortBy = async (field) => {
    fn(
      role,
      regexParam,
      field,
      orderBy === field ? (orderType === "desc" ? "asc" : "desc") : "asc"
    );
    setOrderBy(field);
    setOrderType(
      orderBy === field ? (orderType === "desc" ? "asc" : "desc") : "asc"
    );
  };

  const handleSearchByName = async (e) => {
    setRegexParam(e.target.value);
    fn(role, e.target.value, orderBy, orderType);
  };

  const handleSearchByRole = async (e) => {
    setRole(e.target.value);
    fn(e.target.value, regexParam, orderBy, orderType);
  };

  return (
    <Fragment>
      <Header />
      <Leftnav />
      <div className="main-content">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left pe-0">
            <div className="row">
              <Pagetitle
                title="Skills"
                searchByInputFunction={handleSearchByName}
                searchBySelectOptions={roles}
                searchBySelectFunction={handleSearchByRole}
              />
              <div className="table-content table-responsive">
                <table className="table table-hover text-center">
                  <thead className="bg-greyblue rounded-3">
                    <tr>
                      <th
                        className="border-0 p-4 col-5"
                        onClick={() => handleSortBy("name")}
                      >
                        Name
                      </th>
                      <th
                        className="border-0 p-4 col-7"
                        onClick={() => handleSortBy("email")}
                      >
                        email
                      </th>
                      <th
                          className="border-0 p-4 col-7"
                          onClick={() => handleSortBy("role")}
                      >
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users?.map((item, index) => (
                      <tr key={index}>
                        <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">
                          {item.name}
                        </td>
                        <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">
                          {item.email}
                        </td>
                        <td className="product-headline  wide-column text-grey-900 fw-600 font-xsss">
                          {item.userRole}
                        </td>
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
  );
};

export default UserList;
