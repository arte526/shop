import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { updateEmail } from '../../store/User/userSlice';
import './testPage.scss';

const TestPage = () => {
    const userSlice = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch<AppDispatch>();

    const setEmail = (e: React.FormEvent<HTMLInputElement>): void => {
        dispatch(updateEmail(e.currentTarget.value));
    }

    return (        
        <div>
            {'Email: ' + userSlice.user_email}

            <form className='form'>
                <div>
                    <input className="formInput mr-15"type="text" onInput={(e)=>{setEmail(e)}}/>
                </div>
                <div className="">
                    <button onClick={(e)=>{e.preventDefault()}}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default TestPage;