import React from 'react'

const ServiceRepresentation = ({icon: Icon, header, paragraph}) => {
  return (
    <div className=' w-fit flex flex-row items-center justify-center gap-x-4 text-gray-400 text-[6rem]'>
        <Icon />
        <div>
            <h3 className='text-[1.1rem] font-semibold mb-2 uppercase'>{header}</h3>
            <p className='text-left text-[0.9rem]'>{paragraph}</p>
        </div>
    </div>
  )
}

export default ServiceRepresentation;