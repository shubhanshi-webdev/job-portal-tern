import React from 'react'

const JobDetails = ({data}) => {
  return (
    <div className='job-details'>
        <h2 className='role'>{data.title}</h2>
        <h3 className='companyName'>{data.company_name}</h3>
        <p className='skills'>Skills - {data.tags.map((item) => item).join(', ')}</p>
    </div>
  )
}

export default JobDetails