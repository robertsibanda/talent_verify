import React, {useEffect, useState} from 'react';
import axios from "axios"
import Header from "../misc/Header";

import "../../css/auth-login.css"

const Login = (props) => {

    let [username, setUsername] = useState(null)
    let [password, setPassword] = useState(null)

    const login =  async () => {
        await axios.post("http://localhost:8000/api/login/",
            {
                body: {
                    username : username,
                    password: password
                }
            })
            .then(response => {
                console.log('Response : ' , response)
                if (response.data.error) {
                    alert(JSON.stringify(response.data))
                }else if(response.data.token){
                    localStorage.setItem("Token", response.data.token)
                    document.location = "/"
                }
            })
            .catch(error => {
                console.log('Error : ', error)
              if (error.response.status === 404) {
                  alert("User not found")
              }
            })
    }

    return <div className={"container dark"}>
        <div className={"app"}>
            <div className={"login-form"}>
                <h2 className={"login-item"}>Login</h2>
                <input className={"login-item"} type={"text"} placeholder={"Username"}
                       onChange={e =>
                           setUsername(e.target.value)}/>
                <input className={"login-item"} type={"password"} placeholder={"password"}
                       onChange={e =>
                           setPassword(e.target.value)}/>

                <button
                    type="submit"
                    className={"login-btn"}
                    disabled={!username || !password}
                    value="submit"
                    onClick={login}
                >
                    Login
                </button>
            </div>

        </div>
    </div>
}

export default Login;