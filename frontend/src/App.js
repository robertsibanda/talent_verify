import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import Home from "./components/Home";
import EmployeeList from "./components/employee/EmployeeList";
import EmployeeDetail from "./components/employee/EmployeeDetail";
import DepartmentList from "./components/department/DepartmentList";
import CompanyList from "./components/company/CompanyList";


function App() {
  return <>
    <BrowserRouter location={"/"}>
      <Routes>
        <Route path="/login" Component={Login}/>
        <Route path="/signup" Component={Signup}/>

        <Route path="/" Component={Home}/>

        <Route path="/employees" Component={EmployeeList}/>
        <Route path="/employee/:id" Component={EmployeeDetail}/>

        <Route path="/departments" Component={DepartmentList}/>
        <Route path="/department:id" Component={Home}/>

        <Route path="/companies" Component={CompanyList}/>
        <Route path="/company:id" Component={Home}/>
      </Routes>
    </BrowserRouter>
  </>
}
export default App;
