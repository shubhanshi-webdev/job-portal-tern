import {configureStore, combineReducers} from '@reduxjs/toolkit';
import jobListReducer  from './jobListSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root',
    storage
}

const reducer = combineReducers({
    job : jobListReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)
const appStore = configureStore(
    {
        reducer: persistedReducer
    }
)

export default appStore;