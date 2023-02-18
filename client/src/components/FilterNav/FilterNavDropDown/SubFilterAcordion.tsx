import React from "react";

//store
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store" 

interface ISubFilterAcordionProps {
    id: string,
    title: string,
    onInput?: any,
}

const SubFilterAcordion = (props: ISubFilterAcordionProps) => {
    const {id, title, onInput} = props;

    const filterSortSlice = useSelector((state: RootState) => state.filterSortSlice)
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="form-check">
            <input
            id={id}
            onClick={onInput}
            checked={!!filterSortSlice.filters.find(el=>{return el.filterId === id})}
            className="form-check-input appearance-none appearance-rounded h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""/>
                <label className="form-check-label inline-block text-gray-800">
                  <p className="RobotoMediumFont select-none">{title}</p>
                </label>
        </div>
    )
}

export default SubFilterAcordion