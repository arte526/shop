import { ButtonProps } from "./typesButtons";
import React from "react";

export const LightButton = (props: ButtonProps) => {
    const {key, title, onClickAction, classNamesButton, isActive, width, height} = props;
    
    const activeButton = <button 
    key={key}
    style={{width:  width !== (null && undefined) ? width : "100%", height: height !== (null && undefined) ? height : "100%" }}
    className={"bg-slate-300 rounded-full " + classNamesButton}>
        <div className="flex flex-row justify-center">
            <p className='RobotoBoldFont tracking-tight text-slate-400'>{title}</p>
        </div>
    </button>

    const disabledButton = <button
    key={key}
    style={{width:  width !== (null && undefined) ? width : "100%", height: height !== (null && undefined) ? height : "100%" }}
    onClick={onClickAction}
    
    className={'bg-blue-500 rounded-full active:bg-slate-500 '  + classNamesButton}>
        <div className="flex flex-row justify-center">
            <p className='RobotoBoldFont tracking-tight text-white'>{title}</p>
        </div>
    </button>

    return (
        <>
            {isActive ?  disabledButton : activeButton} 
        </>
    )
}