import React from "react";

interface ISubFilterAcordionProps {
    title: string,
    onInput?: any
}

const SubFilterAcordion = (props: ISubFilterAcordionProps) => {
    const {title, onInput} = props;

    return (
        <div className="form-check">
            <input
            onInput={onInput}
            className="form-check-input appearance-none appearance-rounded h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""/>
                <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                  <p className="RobotoMediumFont select-none">{title}</p>
                </label>
        </div>
    )
}

export default SubFilterAcordion