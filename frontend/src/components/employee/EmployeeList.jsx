import React, {useEffect, useState} from 'react';
import NavBar from "../misc/NavBar";
import axios from "axios";
import SearchBar from "../misc/SearchBar";
import EmployeeListItem from "./EmployeeListItem";
import "../../css/emp-employeelist.css"

const EmployeeList = (props) => {

    // show the list of found employees

    document.title = "employees - list"

    let [employees, setEmployees] =useState([])

    const getList = async () => {
        await axios.get("http://localhost:8000/api/employees/", 
            {
                headers: {
                    'Authorization' : `Token ${localStorage.getItem("Token")}`
                }
            }
        )
            .then(response => {
                console.log(response.data)
                setEmployees(response.data)
            })
            .catch(err => {
                console.log(`Error ${err}`)
            })
    }

    useEffect(() => {
        getList()
            .then(() => {
                console.log('downloaded employee list')
            })
    }, [])

    const handleSearch = (props) => {

        if (props.employee === "" || null || undefined) {
            getList()
                .then(r => {
                    console.log('reloaded employee data')
                })
        }

        let foundEmployees = employees.filter(emp => {
            console.log('employee name ', emp.name)

            if (emp['name'].includes(props.employeeName)) {
                //console.log(emp.name , ' found')
                return emp
            }
            else {
                // console.log(`${emp.name} includes ${props.employeeName} is ${emp['name'].includes(props.employeeName)}`)
            }
        })

        setEmployees(foundEmployees)
    }


    return <>
        <NavBar />
        <SearchBar handleSearch={handleSearch}/>
        <center>
            <div className={"employee-list"}>
                {employees.map((emp, index) => (
                    <EmployeeListItem key={index} employee={emp}/>
                ))}
            </div>
        </center>
    </>
}

export default EmployeeList;