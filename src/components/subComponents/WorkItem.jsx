import React from 'react'

const WorkItem = ({ index, year, title, duration, details }) => {
    return (
        <ol key={index} className='flex flex-col md:flex-row relative border-l border-stone-300'>
            <li className='mb-10 ml-4'>
                <div className='absolute w-3 h-3 bg-stone-300 rounded-full mt-1.5 -top-0 -left-1.5 ' />
                <p className='flex flex-row gap-1 md:gap-4 justify-start items-center text-md md:text-lg font-mono'>
                    <span className='inline-block px-2 bg-blue-900 font-semibold text-white rounded-md'>
                        {year}
                    </span>
                    <span className='text-blue-900 font-semibold capitalize'>
                        {title}
                    </span>
                    <span className='text-stone-400 font-normal leading-none capitalize'>
                        {duration}
                    </span>
                </p>
                <p className='font-normal my-2 text-stone-600'>
                    {details}
                </p>
            </li>
        </ol>
    )
}

export default WorkItem