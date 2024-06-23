import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "../../css/misc-searchbar.css"
import add from "../../images/add.jpg"

const SearchBar = ({ handleSearch }) => {

    const [employeeName, setEmployeeName] = useState("")
    const [company, setCompany] = useState("")
    const [position, setPosition] = useState("")
    const [yearStarted, setStarted] = useState("")
    const [yeaEnded, setEnded] = useState("")

    const setChanged = (content, type) => {
        if (type === 'name') {
            setEmployeeName(content)
        }
        if (type === 'company') {
            setCompany(content)
        }
        if (type === 'position') {
            setPosition(content)
        }
        if (type === 'started') {
            setStarted(content)
        }

        if (type === 'ended') {
            setEnded(content)
        }

        const props = {
            employeeName,
             company, 
             position, 
             yeaEnded, 
             yearStarted
        }

        handleSearch(props)
    }

    return(
        <center>
            <div className={"container-larger"}>
        <center>
            <div className={"searchbar"}>
                <div className={"search-header"}>
                    <input type={"text"}
                           className={"text-search"}
                           placeholder={"employee name"}
                           onChange={e => setChanged(e.target.value, 'name')}/>
                </div>
                <div className={"search-filters"}>
                    <input type={"text"}
                           className={"text-search"}
                           placeholder={"company"}
                           onChange={e => setChanged(e.target.value, 'company')}/>
                    <input type={"text"}
                           className={"text-search"}
                           placeholder={"position"}
                           onChange={e => setChanged(e.target.value, 'position')}/>
                    <input type={"text"}
                           className={"text-search"}
                           placeholder={"year started"}
                           onChange={e => setChanged(e.target.value, 'started')}/>
                    <input type={"text"}
                           className={"text-search"}
                           placeholder={"year left"}
                           onChange={e => setChanged(e.target.value, 'ended')}/>
                </div>
            </div>
        </center>

    </div>
        </center>

    )
}


export default SearchBar;