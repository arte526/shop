import React from "react";
import { useState } from "react";
//store
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { useDispatch } from "react-redux";
//UI components
import { Accordion, AccordionHeader, AccordionBody} from "@material-tailwind/react";
import { IconFilterNavAcordion } from "./iconForFilternav";
import SubFilterAcordion from "./SubFilterAcordion";
import { addFilter, removeAllFilters, removeFilter } from "../../../store/FilterSort/filterSortSlice";
import { IFilterArraySettings } from "../../../store/types/filterSortSliceTypes";

interface IAcordionProps {
  title?: string
  addFilterAction?: any
}
interface IFilterGroupProps {
  id: number
  Group: {title: string, payload: string[]}
}


const FilterNavDropDown = (props: IAcordionProps) => {
  const { addFilterAction } = props;
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
                    {el.payload.map((el, i)=>{return(
                          <li>
                            <SubFilterAcordion key={i+"f3g"} 
                            onInput={()=>{addFilterAction({
                              filterId: el+"182hd",
                              filterName: el
                            })}}
                            title={el}/>
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