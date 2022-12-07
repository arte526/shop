import React, { useState } from "react";
//store
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
//UI components
import { Accordion, AccordionHeader, AccordionBody} from "@material-tailwind/react";
import { IconFilterNavAcordion } from "./iconForFilternav";
import SubFilterAcordion from "./SubFilterAcordion";
import { removeFilter } from "../../../store/FilterSort/filterSortSlice";


interface IAcordionProps {
  title?: string
  addFilterAction?: any
  removeFilterAction?: any
}


const FilterNavDropDown = (props: IAcordionProps) => {
    const { addFilterAction, removeFilterAction } = props;

    //store
    const filterSortSlice = useSelector((state: RootState) => state.filterSortSlice)
    //layout

    const [open, setOpen] = useState(1);
    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };


    const fetchFilterGroup = () => {
      const components = [
        {title: "CPU", payload: ['Intel', 'AMD']},
        {title: "Videocards", payload: ['MSI', 'Gigabyte']},
        {title: "Memory", payload: ['Kingston', 'Crucial']},
      ]

      const setFilter = (isFilter: boolean, filterName: string) => {
        isFilter ? addFilterAction({
          filterId: filterName+"182hd",
          filterName
        }) : removeFilterAction(filterName+"182hd")
      }
      
      return components.map((el, i)=>{
        return(
            <li key={i+"ij9"} id={i+"ij9"}>
              <Accordion open={open === i} icon={<IconFilterNavAcordion id={i} open={open} />}>
                <AccordionHeader className='h-100%' onClick={() => handleOpen(i)}>
                  <p className="RobotoLightFont">{el.title}</p>
                </AccordionHeader>
                <AccordionBody>
                <div className="flex justify-start">
                  <div>
                    <ul>
                    {el.payload.map((firm, i)=>{
                      return(
                          <li key={i+"f3g"}>
                            <SubFilterAcordion  
                            onInput={()=>{setFilter(!filterSortSlice.filters.find(el=>{return el.filterName === firm}), firm)}}
                            id={firm+"182hd"}
                            title={firm}/>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
                </AccordionBody>
              </Accordion>
            </li>)
      })
    }
    return(
      <>
        <div className="">
            <div className="w-40">
              <ul>
              {fetchFilterGroup()}
              </ul>
            </div>
        </div>
      </>
    )
}
export default FilterNavDropDown;