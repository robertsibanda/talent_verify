import React from 'react';
import {Link} from "react-router-dom";
import "../../css/misc-navbar.css"

const NavBar = (props) => {

    if (localStorage.getItem('Token') == null || undefined) {
        if (!document.location.pathname.endsWith('/login')) {
            document.location = "/login"
        }
    }


    return <div className={"navbar-nav"}>
        <Link to={"/"} className={"nav-item"}>
                    <p>Home</p>
        </Link>
        <Link to={"/employees"} className={"nav-item"}>
            <p>Employees</p>
        </Link>
        <Link to={"/companies"} className={"nav-item"}>
            <p>Companies</p>
        </Link>
    </div>

}


export default NavBar;