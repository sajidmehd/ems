import React from 'react'

function Active({emp_id, updateEmployeeStatus}) {
  const emp_status = 'active';
  
  function ChangeEmployeeStatus() {
    updateEmployeeStatus(emp_id , emp_status)
  }
  return (
    <>
    <button onClick={ChangeEmployeeStatus}>{emp_status}</button>
    </>
  )
}

export default Active