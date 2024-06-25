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
                setEmployees(response.data)
            })
            .catch(err => {
                console.log(`Error ${err}`)
            })
    }

    useEffect(() => {
        getList()
            .then(() => {
            })
    }, [])

    const handleSearch = (props) => {

        getList().then(() => {
            let found  = []


            let requiredProps = []

            Object.keys(props).forEach((prop) => {
                if (props[prop] !== null || undefined){
                    requiredProps.push(prop)
                }

            })


            employees.forEach(emp => {
                let allPropsMatch = true;
                
                requiredProps.forEach(prop => {
                    if (emp[prop] === undefined || emp[prop] === null 
                        || props[prop] === undefined || props[prop] === null 
                        || !emp[prop].includes(props[prop])) {
                        allPropsMatch = false;
                    }
                });
                
                if (allPropsMatch) {
                    if (found.indexOf(emp) === -1) {
                        found.push(emp);
                    }
                }
            });
           
            setEmployees(found)


        })
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