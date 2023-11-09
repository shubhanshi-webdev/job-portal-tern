import React from 'react'
import { useSelector } from 'react-redux';
import JobDetails from './JobDetails';
import {Link } from 'react-router-dom';

const JobListing = () => {
    const showSearchData = useSelector(store => store.job.searchedList)
  return (
    <div className='listing'>
        {
            showSearchData.map( (item,index) => <Link to={'/job-description/'+item.slug} key={index}><JobDetails data={item}/></Link>)
        }
    </div>
  )
}

export default JobListing