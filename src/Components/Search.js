import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import JobListing from './JobListing';
import {addItemsOnSearch} from '../Store/jobListSlice';
import useFetchData from './Hooks/useFetchData';

const Search = () => {
  useFetchData();
    const searchedList = useSelector(store => store.job.jobList);
    const [showComponentB, setShowComponentB] = useState(false);
    const [searchVal , setsearchVal] = useState('');
    const dispatch = useDispatch();
    const handleSearch = () =>{
    const listOfItem =  searchedList.filter((item) =>  item.title.toLowerCase().includes(searchVal.toLowerCase()))
      dispatch(addItemsOnSearch(listOfItem));
      setShowComponentB(true) 
    }  
  return (
    <div className='searchBar'>
      <form onSubmit={(e) => {e.preventDefault()}}>
      <input type='text' required='required' name="search" placeholder='Search for your job here' value={searchVal} onChange={(e) => {
               setsearchVal(e.target.value);
            }} />
            <button className='commonBtn' disabled={!searchVal} onClick={handleSearch}>Search</button>
            {showComponentB && <JobListing  /> }
      </form>

        </div>
  )
}

export default Search