import React from 'react';

const CompanyListItem = ({company}) => {
    return (
        <div className={"role-list-item"} >
            <h3>{company.name}</h3>
            <h3>{company.phone}</h3>
            <h3>{company.email}</h3>
            <div className={"role-item"}>
                <h4 className={"label"}>Departments :</h4>
                <h4 className={"content"}>{company.department_count}</h4>
            </div>
            <div className={"role-item"}>
                <h4 className={"label"}>Registered employees : </h4>
                <h4 className={"content"}>{company.employee_count}</h4>
            </div>
            <div className={"role-item"}>
                <h4 className={"label"}>Contact person:</h4>
                <h4 className={"content"}>{company.contact_person}</h4>
            </div>
            <div className={"role-item"}>
                <h4 className={"label"}>Reistration Date :</h4>
                <h4 className={"content"}>{company.registration_date}</h4>
            </div>
            <div className={"role-item"}>
                <h4 className={"label"}>Registration Number: </h4>
                <h4 className={"content"}>{company.registration_number}</h4>
            </div>
            <div className={"role-item"}>
                <h4 className={"label"}>Employees : </h4>
                <h4 className={"content"}>{company.number_of_employees}</h4>
            </div>
            
        </div>)

}

export default CompanyListItem;