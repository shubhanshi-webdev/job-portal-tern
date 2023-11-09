import React from 'react'
import { useSelector } from 'react-redux'

const Thankyou = () => {
    const data = useSelector(store => store.job.applyFormData);
    const jobData = useSelector(store => store.job.jdData);
  return (
    <div className='thankyou-container'>
      <h1>Hi, {data.name}, </h1>
      <p>Thanks for applying in <b>{jobData.company_name}</b> for the role of <b>{jobData.title}</b></p>
      <h3>Job Location</h3>
      <span>{jobData.location}</span>
      <h3>JD:</h3>
      <span>{jobData.description.replace( /(<([^>]+)>)/ig, '')}</span>
    </div>
  )
}

export default Thankyou