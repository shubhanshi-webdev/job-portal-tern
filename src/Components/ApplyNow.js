import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {addFormData} from '../Store/jobListSlice';
import { useNavigate } from 'react-router-dom';

const ApplyNow = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [coverLetter, setcoverLetter] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
         dispatch(addFormData({name,email,coverLetter,file}));
         navigate('/thankyou');
      }
  return (
    <div className='apply-form'>
        <form >
            <input type='text' placeholder='Name' value={name} onChange={(e) => {setName(e.target.value)}} />
            <input type='email' placeholder='Email' value={email} onChange={(e) => {setEmail(e.target.value)}} />
            <textarea value={coverLetter} onChange={(e) => {setcoverLetter(e.target.value)}}></textarea>
            <button type='submit' className='commonBtn' disabled={ !name || !email || !coverLetter} onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default ApplyNow