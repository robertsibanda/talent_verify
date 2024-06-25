import React, { useEffect, useState } from 'react';
import NavBar from "../misc/NavBar";
import CompanyListItem from "./CompanyListItem"
import axios from 'axios';


const CompanyList = (props) => {

    let [companies,setCompanies] = useState([])

    const getCompanies = async () => {
        await axios.get("http://localhost:8000/api/company/", 
            {
                headers: {
                    Authorization: `Token ${localStorage.getItem('Token')}`
                }
            }
        )
        .then(response => {
            console.log(response.data)
            setCompanies(response.data)
        })
    }

    useEffect(() => {
        getCompanies().then(_ => {
            console.log('downloaded company data')
        })
    }, [])

    return <>
    <NavBar />
    <center>
            <div className={"employee-list"}>
                {companies.map((comp, index) => (
                    <CompanyListItem key={index} company={comp}/>
                ))}
            </div>
        </center>
    
    </>

}
export default CompanyList;