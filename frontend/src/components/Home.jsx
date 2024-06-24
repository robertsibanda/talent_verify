import React from 'react';
import NavBar from "./misc/NavBar";
import "../css/misc-home.css"
import Papa from "papaparse"

const Home = (props) =>  {

    const handleUpload = (event) => {
        const fileName = event.target.files[0].name
        if (!fileName.endsWith(".csv") || !fileName.endsWith(".txt") || !fileName.endsWith("xlsx")) {
            // alert('file not allowed')
        }

        Papa.parse(event.target.files[0],
            {
                header: true,
                skipEmptyLines: true,
                complete: function (result) {
                   result.data.forEach(item => {
                       // handle data upload
                        setTimeout(() => {
                        console.log(item)

                    }, 3000)
                   })
                }
            })
    }

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