import React from 'react'

function InCheck({emp_id, updateEmployeeStatus}) {
  const emp_status = 'incheck';
  
  function ChangeEmployeeStatus() {
    updateEmployeeStatus(emp_id , emp_status)
  }
  return (
    <>
    <button onClick={ChangeEmployeeStatus}>{emp_status}</button>
    </>
  )
}

export default InCheck