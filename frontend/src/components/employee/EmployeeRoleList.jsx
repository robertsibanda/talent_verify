import React, {useEffect, useState} from 'react';
import axios from "axios";
import EmployeeRoleListItem from './EmployeeRoleListItem';
import { useParams } from 'react-router-dom';

const EmployeeRoleList= (props) => {

    let params = useParams()

    let [roles, setRoles]  = useState([])

    const getRoles = async () => {
        await axios.get(`http://localhost:8000/api/employee/${params.id}/role`, {
            headers: {
                'Authorization' : `Token ${localStorage.getItem("Token")}`
            }
        }).then((response) => {
            console.log('Roles : ' , response)
            setRoles(response.data)
        })

    }

     useEffect(() => {
        getRoles()
            .then(() => {
                console.log('Roles : ', roles)
            })
    }, []);

     const DeleteRole = async (deleted) => {
         await axios.delete(`http://localhost:8000/api/delete/${deleted}`, {
            headers: {
                'Authorization' : `Token ${localStorage.getItem("Token")}`
            }
        }).then((response) => {
            console.log("Delete response : ", response)
             roles.filter(role => {
                 return role.id !== deleted
             })
             setRoles(roles => roles.filter(item => item.id !== deleted));
        })
    }

    return (
        <>
            <div className={"roles"}>
                <div className={"role-header"}>
                    <h2 className={"role title"}>&#9782; Employee Roles {roles.length}</h2>
                </div>
                <div className={"role-list"}>
                    {roles.map((role,index)=> (
                        <EmployeeRoleListItem key={index} role={role} handleDelete={DeleteRole}/>
                    ))}
                </div>
            </div>
        </>

    )
}

export default EmployeeRoleList;