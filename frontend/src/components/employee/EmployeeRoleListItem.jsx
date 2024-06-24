import React, {useEffect, useState} from 'react';
import "../../css/emp-employeelist.css"

const EmployeeRoleListItem = ({role, handleDelete}) => {

    let [roleid, setRoleID] = useState(null)

    useEffect(() => {
        setRoleID(role.id)
    }, []);

    console.log('Note id set : ', roleid)

    const handleDeleteRole = (role) => {
        console.log('Deleteing note : ',roleid)
        handleDelete(roleid)
    }

    return (
        <div className={"role-list-item"} >
            <div className={"role-item"}>
                <h4 className={"label"}>Position :</h4>
                <h4 className={"content"}>{role.role}</h4>
            </div>
            <div className={"role-item"}>
                <h4 className={"label"}>Company : </h4>
                <h4 className={"content"}>{role.company}</h4>
            </div>
            <div className={"role-item"}>
                <h4 className={"label"}>Department : </h4>
                <h4 className={"content"}>{role.get_department}</h4>
            </div>
            <div className={"role-item"}>
                <h4 className={"label"}>Duties :</h4>
                <h4 className={"content"}>{role.duties}</h4>
            </div>
            <h4>{role.start_date}</h4> 
            <h4>to</h4>
            <h4>{role.end_date || 'current'}</h4> 
            
        </div>)
};

export default EmployeeRoleListItem;