import {createSlice} from '@reduxjs/toolkit';

const jobListSlice = createSlice({
    name: 'jobList',
    initialState: {
        jobList : null,
        searchedList: null,
        jdData: null,
        applyFormData : {
            name: null,
            email: null,
            coverLetter: null,
        },
    },
    reducers: {
        showListOnSearch: (state,action) => {
            state.jobList = action.payload;
        },
        addItemsOnSearch: (state, action) => {
            state.searchedList=action.payload;
        },
        addJDData: (state, action) => {
            state.jdData=action.payload;
        },
        addFormData: (state, action) => {
            state.applyFormData = action.payload;
        }
    }
});

export const {showListOnSearch, addItemsOnSearch, addFormData, addJDData} = jobListSlice.actions;
export default jobListSlice.reducer;