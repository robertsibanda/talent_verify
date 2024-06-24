import React, {useEffect, useState} from 'react';
import NavBar from "../misc/NavBar";
import {useNavigate, useParams} from "react-router-dom";
import EmployeeRoleList from "./EmployeeRoleList"
import axios, {get} from "axios";

const EmployeeDetail = () => {
    // show full detail of the employee
    let params = useParams()

    document.title = `Employee ${params.id}`

    let [employee, setEmployee] = useState({})


    const getEmployeeDetail = async () => {
        await axios.get(`http://localhost:8000/api/employee/${params.id}`,
            {
                headers : {
                    'Authorization' : `Token ${localStorage.getItem("Token")}`
                }
            })
        .then(response => {
            console.log(response.data)
            setEmployee(response.data)
        })
            .catch(err => {
                console.log(`Error : ${err}`)
            })
    }

    useEffect(() => {
        getEmployeeDetail()
            .then(_ => {
                console.log('Downloaded employee details')
            })
    }, []);

    return (
        <>
            <NavBar />
            <div className={"container-medium"}>
                <center>
                    <h3>{employee.name}</h3>
                    <h3>Current Company : {employee.company}</h3>
                    <h3>Current Department : {employee.department}</h3>
                    <h3>Current Role : {employee.role}</h3>
                </center>
            </div>

           <center>
           <div className='container-roles'>
                <EmployeeRoleList />
            </div>
           </center>

        </>
    )
}

export default EmployeeDetail;