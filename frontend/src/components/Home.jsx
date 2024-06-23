import React from 'react';
import NavBar from "./misc/NavBar";
import "../css/misc-home.css"

const Home = (props) =>  {
    return (
        <div>
            <NavBar/>
            <div className={"container"}>
                <h2>Welcome to Talent verify !!</h2>
                <div className={"upload-container"}>
                    <h2>You can upload you data using excel sheet</h2>
                    <input type={"file"} className={"file-uploader"}/>
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