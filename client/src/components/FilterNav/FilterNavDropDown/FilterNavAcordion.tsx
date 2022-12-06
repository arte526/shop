import React from "react";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IconFilterNavAcordion } from "./iconForFilternav";

interface IAcordionProps {
    title?: string
}

const FilterNavAcordion = (props: IAcordionProps) => {

  const [open, setOpen] = useState(1);
 
    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };

    return(
      <>
        <div className="">
            <div className="w-40">
                <Accordion open={open === 1} icon={<IconFilterNavAcordion id={1} open={open} />}>
                    <AccordionHeader className='h-100%' onClick={() => handleOpen(1)}>
                      <p className="RobotoLightFont">Processors</p>
                    </AccordionHeader>
                    <AccordionBody>
                    <div className="flex justify-start">
                      <div>
                        <div className="form-check">
                          <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""/>
                          <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                            <p className="RobotoMediumFont">Intel</p>
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""/>
                          <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckChecked">
                            <p className="RobotoMediumFont">AMD</p>
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""/>
                          <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckChecked">
                            <p className="RobotoMediumFont">AMD</p>
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""/>
                          <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckChecked">
                            <p className="RobotoMediumFont">AMD</p>
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""/>
                          <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckChecked">
                            <p className="RobotoMediumFont">AMD</p>
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""/>
                          <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckChecked">
                            <p className="RobotoMediumFont">AMD</p>
                          </label>
                        </div>
                      </div>
                    </div>
                    </AccordionBody>
                </Accordion>
            </div>
        </div>
      </>
    )
}
export default FilterNavAcordion;