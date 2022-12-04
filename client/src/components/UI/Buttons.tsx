import {useState} from 'react';

interface ButtonProps {
    key?: any
    title: string
    onClickAction?: any
    classNamesButton: string
}

export const ButtonLight = (props: ButtonProps) => {
    const {title, onClickAction, classNamesButton} = props;
    
    return (
        <>
            <button 
            onClick={onClickAction}
            className={'w-100% bg-blue-500 rounded-full active:bg-slate-500 '  + classNamesButton}>
                <div className="flex flex-row justify-center">
                    <p className='RobotoBoldFont tracking-tight text-white'>{title}</p>
                </div>
            </button>
        </>
    )
}

export const ButtonInActive = (props: ButtonProps) => {
    const {title, classNamesButton} = props;
    return(
        <>
            <button 
            className={"w-100% bg-slate-300 rounded-full " + classNamesButton}>
                <div className="flex flex-row justify-center">
                    <p className='RobotoBoldFont tracking-tight text-slate-400'>{title}</p>
                </div>
            </button>
        </>
    )
}

export const ButtonFilters = (props: ButtonProps) => {

    const {title, onClickAction, classNamesButton} = props; 
    const [FilterHover, setFilterHover] = useState(false);

    const defaultFilter = 
    <span
    onMouseEnter={()=>{setFilterHover(true)}}
    className="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-150 ease">
        <p className="select-none">{title}</p>
    </span>

    const hoveredFilter = 
    <span
        onMouseLeave={()=>{setFilterHover(false)}}
        className="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-150 ease">
            <p className="select-none">{title}</p>
        <button 
        onClick={onClickAction}
        className={"bg-transparent focus:outline-none"}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
            className="w-3 ml-3" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512">
            <path fill="currentColor"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
            </path>
          </svg>
        </button>
    </span>

    return (
        <>
        {!FilterHover ? defaultFilter : hoveredFilter}
        </>
    )
}