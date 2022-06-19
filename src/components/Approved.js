import React from 'react'

function Approved({emp_id, updateEmployeeStatus}) {
  const emp_status = 'approved';
  
  function ChangeEmployeeStatus() {
    updateEmployeeStatus(emp_id , emp_status)
  }
  return (
    <>
    <button onClick={ChangeEmployeeStatus}>{emp_status}</button>
    </>
  )
}

export default Approved