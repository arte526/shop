import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { updateEmail } from '../../store/User/userSlice';
import './testPage.scss';
import { TriangleIcon } from '../../assets/icons/icon-triangle'

import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const TestPage = () => {
    const userSlice = useSelector((state: RootState) => state.userSlice)
    const dispatch = useDispatch<AppDispatch>();

    const setEmail = (e: React.FormEvent<HTMLInputElement>): void => {
        dispatch(updateEmail(e.currentTarget.value));
    }

    const [open, setOpen] = useState(1);
 
    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };

    interface IIconProps {
        id: number,
        open: number
    }
    const Icon = (props: IIconProps) => {
        const {id, open} = props;
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              id === open ? "rotate-180" : ""
            } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        );
      }

    return (        
        <>
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

        <div style={{width: "150px"}}>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader className='' onClick={() => handleOpen(1)}>
                  Processors
                </AccordionHeader>
                <AccordionBody>
                  
                </AccordionBody>
            </Accordion>
        </div>    
        </>
    )
}

export default TestPage;