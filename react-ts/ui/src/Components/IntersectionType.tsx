import React from 'react'

type employee = {
    empId: number,
    email: string
}

type manager = {
    empId: number,
    department: string
}

type TeamLead = employee & manager

const IntersectionType = (info: TeamLead) => {
  return (
    <div>
        <h3>IntersectionType</h3>
        <h4>{info.email}</h4>
        <h4>{info.department}</h4>
        <h4>{info.empId}</h4>
    </div>
  )
}

export default IntersectionType