import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { updateEmail } from '../../store/User/userSlice';
import './testPage.scss';

const TestPage = () => {
    const userSlice = useSelector((state: RootState) => state.userSlice)
    const dispatch = useDispatch<AppDispatch>();

    const setEmail = (e: React.FormEvent<HTMLInputElement>): void => {
        dispatch(updateEmail(e.currentTarget.value));
    }

    return (        
        <div className="text-4xl">
            <p>{'Email: ' + userSlice.user_email}</p>
            <form >
                <div className="form">
                    <input className="formInput" type="text" onInput={(e)=>{setEmail(e)}}/>
                </div>
                <div className="">
                    <button onClick={(e)=>{e.preventDefault()}}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default TestPage;