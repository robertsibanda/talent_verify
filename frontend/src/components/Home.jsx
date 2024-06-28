import React, { useEffect, useState } from 'react';
import NavBar from "./misc/NavBar";
import "../css/misc-home.css"
import Papa from "papaparse"
import axios from 'axios';

const Home = (props) =>  {

    let [companies, setComanies] = useState([])
    let [employees, setEmployees] = useState([])

    let company_colums = {
        'Company' : "name",
        'Date of registration' :'registration_date',
        'address': "address", 
        'contact person': 'contact_person',
        'contact phone': "phone",
        'number of employees': 'number_of_employees', 
        'email address': 'email', 
        'registration number': 'registration_number'
    }

    let personal_colums = {
        'employee id number': 'employee_id',
        'name of employee': 'name',
        'role': 'role',
        'duties': 'duties',
        'department': 'department',
        'date started': 'started',
        'date ended': 'ended'
         
        // Comapny aso needed

    }

    const getEmployees = async () => {
        axios.get("http://localhost:8000/api/employees/", 
            {
                headers: {
                    Authorization: `Token ${localStorage.getItem('Token')}`
                }
            }
        )
        .then(response => {
            setEmployees(response.data)
        })
    }

    const getComapnies = async () => {
        axios.get("http://localhost:8000/api/company/", 
            {
                headers: {
                    Authorization: `Token ${localStorage.getItem('Token')}`
                }
            }
        )
        .then(response => {
            setComanies(response.data)
        })
    }

    function compareValuesSimilarity(obj1, obj2, mapping) {

        let newCompData = {}

        for (let key in mapping) {
            const mappedKey = mapping[key]
            if (!obj1.hasOwnProperty(mappedKey) || !obj2.hasOwnProperty(key)) {
                return false
            }
            if (obj1[mappedKey] !== obj2[key]) {

                Object.keys(mapping).forEach(key => {

                    // for company

                    if (mapping[key] !== 'registration_number' || 'name') {
                        newCompData[mapping[key]] = obj2[key]
                    }
                    if (mapping[key] === 'registration_date') {
                        let date =  new Date(obj2[key]).toLocaleDateString().split('/')
                        date = date.reverse().join('-')
                        newCompData[mapping[key]] = date
                    }

                    // for employee 
                })

                newCompData.id = obj1.id
                return [false, newCompData ]
            }
        }
        return [true, newCompData]
    }


    const updateComapnyData = async (comapnyData) => {

        const comapnyID = comapnyData.id

        await axios.put(`http://localhost:8000/api/company/${comapnyID}/update/`, {
            headers: {
                 'Authorization' : `Token ${localStorage.getItem("Token")}`
             }
            ,
            body: comapnyData
         })
            .then((response) => {
                 console.log(response.data)
                
             })
            .catch(error => {
                console.log(error.message)
            })
    
    }
  

    const handleUpload = (event) => {
        const fileName = event.target.files[0].name

        if (!fileName.endsWith(".csv") || 
        !fileName.endsWith(".txt") || 
        !fileName.endsWith("xlsx")) {
            // alert('file not allowed')
        }

       

        Papa.parse(event.target.files[0],{
            header: true,
            skipEmptyLines: true,
            complete: function (result) {
                result.data.forEach(item => {
                    // handle comapny data first upload

                    companies.forEach(comp => {

                        let compReg = comp.registration_number
                        let newReg = item['registration number']

                        if ((comp.name === item['Company']) && (compReg === newReg) ) {

                            console.log('same company name')
                            
                            console.log('same reg number')
                            // check need for update company data
                            let similar = compareValuesSimilarity(comp, item, company_colums)
                            console.log('Company already exists : ', comp, item)
                            console.log('Similar with reason : ', similar)
                            if (!similar[0]) {
                                // update comapny data
                                console.log('they are not the same')

                                let newCompData = similar[1]

                                let updateREsponse = updateComapnyData(newCompData)
                                if (!updateREsponse.success) {
                                    alert('Faced errors while updating company data')
                                }
                                
                            }
                            else {
                                console.log('they are the same')
                            }
                            
                        }
                        else {
                            console.log('New company : ', item)
                        }
                    })

                    employees.forEach(emp => {

                    })

                    //TODO upload employee data

                })
            }
        })
    }

    useEffect(() => {
        getComapnies()
        .then(_ => {
            console.log('downloaded comapny data')
            companies.forEach(comp => {
                console.log(comp)
            })
            getEmployees()
            .then(_ => {
                console.log('downloaded employee data')
                console.log(employees)
            })
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


    return (
        <div>
            <NavBar/>
            <div className={"container"}>
                <h2>Welcome to Talent verify !!</h2>
                <div className={"upload-container"}>
                    <h2>You can upload you data using excel sheet</h2>
                    <input type={"file"}
                           className={"file-uploader"}
                                onChange={handleUpload}
                                    accept={['.csv','xlsx','txt']}/>
                    <center><h3>****Instructions****</h3></center>
                    <h4>1. File must be csv, xlsx or text</h4>
                    <h4>2. File must be csv, xlsx or text</h4>
                    <h4>3. Clearly show headers</h4>
                </div>
            </div>
        </div>
    )
}

export default Home;