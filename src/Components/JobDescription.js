import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ApplyNow from './ApplyNow';
import {addJDData} from '../Store/jobListSlice';

const JobDescription = () => {
    const [desc, setDesc] = useState(null);
    const [applyComponent, setApplyComponent] = useState(false);
    const dispatch = useDispatch();
    const {id} = useParams();
    const JD = useSelector(store => store.job.searchedList);
    useEffect(() => {
        JD.filter((data) => {
            if(data.slug === id){
                const regex = /(<([^>]+)>)/gi;
                const newData = data.description.replace(regex, "");
            setDesc( newData);
            dispatch(addJDData(data))
        }
        return  data
    })},[JD,dispatch,id]); // issue while deloyment
    const openApplyForm =() => {
        setApplyComponent(true);
    }
   return (
    <div className='description-container'>
        <h2>Job Description</h2>
         <div className='descriptionJob'>{desc}</div>
        { desc &&  <div className='applyNow'>
            <button className='commonBtn' onClick={openApplyForm}>Apply Now</button>
            { applyComponent && <ApplyNow />}
        </div>}
       
    </div>
    
  )
}

export default JobDescription