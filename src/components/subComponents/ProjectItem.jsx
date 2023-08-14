import React from 'react'


const ProjectItem = ({ index, title, imgSrc, discription, linkUrl }) => {
    console.log(imgSrc)
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] hover:scale-105 duration-200' key={index}>
            <img src={imgSrc} alt="/img" className='rounded-xl  group-hover:opacity-10' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h1 className='text-xl md:text-2xl  font-bold font-mono text-white tracking-wider text-center'>{title}</h1>
                <p className='text-md font-mono text-white text-center pb-6'>{discription}</p>
                <button className='rounded-md bg-white font-semibold uppercase px-4 py-2 hover:scale-110 duration-150'>
                    View More
                </button>
            </div>
        </div>
    )
}

export default ProjectItem