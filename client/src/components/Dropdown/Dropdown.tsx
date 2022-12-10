import React from "react";
import {Menu, MenuHandler, MenuList, MenuItem, Button,} from "@material-tailwind/react";

export interface IItemsArraySettings {
    title: string
    action?: any
    styleItem?: string
} 

export interface IPropsDropDown {
    title: string
    styleButton?: string
    items: IItemsArraySettings[]
}

const DropDown = (props: IPropsDropDown) => {
    const {title, styleButton, items} = props

    const staticButtonStyle = `w-35 h-8 p-0 px-5 RobotoLightText 
    bg-slate-200 text-[16px] text-color-black align-middle
    ` 
    return <>
    <Menu animate={{
      mount: { y: 0 },
      unmount: { y: 25 },
    }}>
      <MenuHandler>
        <Button variant="gradient" 
        className={ staticButtonStyle + styleButton}>
          <div className="w-100%">
            <span className="RobotoBoldFont">{title}</span>
          </div>
        </Button>
      </MenuHandler>
      <MenuList className={`w-[170px] flex flex-col justify-center`}>
        {items?.map((el)=>{
            return <>
              <div className="w-100% h-[40px]">
                <div className="h-[30px] mt-[5px]">
                  <div className={`w-90% h-[30px] rounded-lg hover:bg-slate-100 active:bg-slate-200`}>
                    <MenuItem className={`flex flex-row justify-center ${el.styleItem ? el.styleItem : ''}`}>
                      <span className="RobotoMediumFont mt-1">{el.title}</span>
                    </MenuItem>
                  </div>
                </div>
              </div>
            </>
        })}
      </MenuList>
    </Menu>
    </>
}

export default DropDown;