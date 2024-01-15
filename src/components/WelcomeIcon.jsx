import React from 'react'

const WelcomeIcon = ({icon: Icon, text}) => {
  return (
    <div className='flex items-center justify-center flex-col gap-y-2 p-5 my-4 text-gray-500'>
        <div className='border-2 h-[8rem] w-[8rem] text-[3rem] rounded-full flex items-center justify-center'>
            <Icon />
        </div>
        <p className='capitalize'>{text}</p>
    </div>
  )
}

export default WelcomeIcon;