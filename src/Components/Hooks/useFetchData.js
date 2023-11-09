import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showListOnSearch } from '../../Store/jobListSlice';

const useFetchData = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch('https://www.arbeitnow.com/api/job-board-api');
            const response = await res.json();
            dispatch(showListOnSearch(response.data))
        }
        fetchApi();
    },[]);
}

export default useFetchData
