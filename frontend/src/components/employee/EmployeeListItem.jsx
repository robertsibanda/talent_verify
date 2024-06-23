import React from 'react';
import "../../images/phone.png"
import phone from "../../images/phone.png"
import image from "../../images/employee.png"
import {Link} from "react-router-dom";

const EmployeeListItem = ( { employee } ) => {

    console.log(`Employee ${employee}`)

    const handleClick = () => {
        console.log('Clicked ')
    }
    
    return (<div className={"employee-item"}>
        <div>
            <h3>{employee.name}</h3>
            <h3>{employee.phone}</h3>
            <h3>{employee.email}</h3>
            <h3>{employee.company}</h3>
            <h3>{employee.employee_id}</h3>
            <h3>{employee.role}</h3>
        </div>
        <div>
            <center>
                <Link to={`/employee/${employee.id}`}>
                    <button className={"view-employee-btn"} onClick={handleClick}>
                        View Employee
                    </button>
                </Link>
            </center>
        </div>


    </div>)
}

export default EmployeeListItem;