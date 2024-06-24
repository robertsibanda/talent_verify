import React, { useEffect, useState } from 'react';
import "../../css/misc-searchbar.css"

const SearchBar = ({ handleSearch }) => {
    const [inputs, setInputs] = useState({
        company: null,
        name: null,
        role: null,
        started: null,
        ended: null
    });


    useEffect(() => {
        // This code runs whenever any input state changes
        handleSearch(inputs)
        // Add your additional logic here
    }, [inputs]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));

    };

    return(
        <center>
            <div className={"container-larger"}>
        <center>
            <div className={"searchbar"}>
                <div className={"search-header"}>
                    <input type={"text"}
                           name={"name"}
                           value={inputs.name}
                           className={"text-search"}
                           placeholder={"employee name"}
                           onChange={handleInput}/>
                </div>
                <div className={"search-filters"}>
                    <input type={"text"}
                           className={"text-search"}
                           placeholder={"company"}
                           name={"company"}
                           value={inputs.company}
                           onChange={handleInput}/>
                    <input type={"text"}
                           className={"text-search"}
                           name={"role"}
                           value={inputs.role}
                           placeholder={"position"}
                           onChange={handleInput}/>
                    <input type={"text"}
                           className={"text-search"}
                           placeholder={"year started YYYY-MM-DD"}
                           name={"started"}
                           value={inputs.started}
                           onChange={handleInput}/>
                    <input type={"text"}
                           className={"text-search"}
                           placeholder={"year left YYYY-MM-DD"}
                           name={"ended"}
                           value={inputs.ended}
                           onChange={handleInput}/>
                </div>
            </div>
        </center>

    </div>
        </center>

    )
}


export default SearchBar;