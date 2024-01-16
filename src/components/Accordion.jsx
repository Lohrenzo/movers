import { useState } from 'react'

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Accordion = ({header, paragraph}) => {
    const [open, setOpen] = useState(false);
  return (
    <div className='rounded-lg'>
        <div 
            className="flex items-center justify-between transition-all duration-300  bg-white hover:bg-[#96C507] text-black hover:text-white py-3 px-4 font-semibold text-[1.1rem] shadow tracking-wider capitalize cursor-pointer"
            onClick={() => setOpen(!open)}
        >
            <h3 className=''>{header}</h3>
            {open ? <MdKeyboardArrowUp className='text-[2rem]'/> : <MdKeyboardArrowDown className='text-[2rem]'/>}
            
        </div>
        {open && 
            <>
                {/* <hr className=' opacity-70 mx-3'/> */}
                <p className='py-3 px-5 text-gray-500 text-justify'>{paragraph}</p>
            </>
        }
    </div>

  )
}

export default Accordion;