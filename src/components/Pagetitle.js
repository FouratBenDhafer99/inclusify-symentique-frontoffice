import React from 'react';

const Pagetitle = (props) => {
    const {title, searchByInputFunction, searchByNumberInputFunction, searchBySelectOptions, searchBySelectFunction} = props;
    return (
        <div className="card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3">
            <h2 className="fw-700 mb-0 mt-0 font-md text-grey-900 d-flex align-items-center">{title}
                <form action="#" className="pt-0 pb-0 ms-auto row">
                    <div className="search-form-2 ms-2 col-6">
                        {searchByInputFunction ?
                            <>
                                <i className="ti-search font-xss"></i>
                                <input type="text" onKeyUp={searchByInputFunction}
                                       className="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0"
                                       placeholder="Search here."/>
                            </> : null}
                    </div>
                    <div className="search-form-2 ms-2 col">
                        {searchByNumberInputFunction ?
                            <>
                                <i className="ti-search font-xss"></i>
                                <input type="number" onKeyUp={searchByNumberInputFunction}
                                       className="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0"
                                       placeholder="Search here."/>
                            </> : null}
                    </div>
                    <div className="search-form-2 ms-2 col">
                        {searchBySelectOptions && searchBySelectFunction?
                            <>
                                <i className="ti-search font-xss"></i>
                                <select onChange={searchBySelectFunction}
                                       className="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0">
                                    <option value={""}>Choose</option>
                                    {searchBySelectOptions.map((item,index)=>(
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                            </> : null}
                    </div>
                </form>
            </h2>
        </div>
    );
}

export default Pagetitle;


