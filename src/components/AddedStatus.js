import React from 'react'
import axios from 'axios'

function AddedStatus({emp_id, updateEmployeeStatus}) {
  const emp_status = 'added';
  
  function ChangeEmployeeStatus() {
    updateEmployeeStatus(emp_id , emp_status)
  }
  return (
    <>
    <button onClick={ChangeEmployeeStatus}>{emp_status}</button>
    </>
  )
}

export default AddedStatus