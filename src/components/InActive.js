import React from 'react'

function InActive({emp_id, updateEmployeeStatus}) {
  const emp_status = 'inactive';
  
  function ChangeEmployeeStatus() {
    updateEmployeeStatus(emp_id , emp_status)
  }
  return (
    <>
    <button onClick={ChangeEmployeeStatus}>{emp_status}</button>
    </>
  )
}

export default InActive