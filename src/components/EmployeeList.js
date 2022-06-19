import React,{useEffect,useState} from 'react'
import axios from "axios";
import Added from './AddedStatus'
import InCheck from './InCheck'
import Approved from './Approved'
import Active from './Active'
import InActive from './InActive'


function EmployeeList() {
    const [employeeList, setEmployeeList] = useState([])

    const initialEmpState ={
        name: '',
        status: ''
    }
    const [singleEmployee, setSingleEmployee] = useState(initialEmpState) 
    
    // destructure singleEmployee //
    
    const {name,status} = singleEmployee

    const baseUrl = 'http://localhost:8000/employees' 

    // ================================================================ //
    // ==================== Load List of Employees ==================== //
    // ================================================================ //
    
    useEffect(() => {
        loadEmployees()
    },[])

    const loadEmployees = async () => {
        await axios.get(baseUrl)
        .then(response => {
            setEmployeeList(response.data)
        })
    }

    // ================================================================ //
    // ==================== Update Employee Status ==================== //
    // ================================================================ //

    function updateEmployeeStatus(emp_id, emp_status) {
        const emp = employeeList.find(item => item.id == emp_id)
        emp.status = emp_status
        axios.patch(`${baseUrl}/${emp_id}`,emp)
        .then(response => {
            console.log(response.data)
        })
        employeeList.filter((emp) => {
            if (emp.id === emp_id) {
                emp.status = emp_status
            }
        })
        setEmployeeList(updatedEmployeeList=>[...updatedEmployeeList])
    
    }
    
    // ================================================================ //
    // ====================== Add New Employee ======================== //
    // ================================================================ //

    // Two way data binding on Change in form fields //

    const handleChange = (e) => {
        let {name, value} = e.target
        setSingleEmployee({...singleEmployee, [name] : value})
        
    }

    const AddNewEmployee = (e) => {
        e.preventDefault()
        axios.post(baseUrl,singleEmployee)
        .then(response => {
            setEmployeeList(employeeList => [...employeeList, singleEmployee])
            console.log('employee added')
        })
        
    }
    return (
    <div>
        <div className="addEmployeeForm">
            <form onSubmit={AddNewEmployee}>
                <input type="text" name="name" value={name} onChange={handleChange} placeholder="Employee Name"/>
                <select name="status" onChange={handleChange}>
                    <option value="">Select Status</option>
                    <option value="added">Added</option>
                    <option value="incheck">In-check</option>
                    <option value="approved">Approved</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
        <div className="employeeList">
            {employeeList.map((emp, index) => 
                <div className="employee" key={index}>
                <div className="emp_name">{emp.name}</div>
                <div className={`emp_status ${emp.status == 'added' ? "active" : ""}`}><Added updateEmployeeStatus={updateEmployeeStatus} emp_id={emp.id} /></div>
                <div className={`emp_status ${emp.status == 'incheck' ? "active" : ""}`}><InCheck updateEmployeeStatus={updateEmployeeStatus} emp_id={emp.id} /></div>
                <div className={`emp_status ${emp.status == 'approved' ? "active" : ""}`}><Approved updateEmployeeStatus={updateEmployeeStatus} emp_id={emp.id} /></div>
                <div className={`emp_status ${emp.status == 'active' ? "active" : ""}`}><Active updateEmployeeStatus={updateEmployeeStatus} emp_id={emp.id} /></div>
                <div className={`emp_status ${emp.status == 'inactive' ? "active" : ""}`}><InActive updateEmployeeStatus={updateEmployeeStatus} emp_id={emp.id} /></div>
            </div>
            )}
        </div>
    </div>
  )
}

export default EmployeeList