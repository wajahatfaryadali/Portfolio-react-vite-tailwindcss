import React from 'react'
import WorkItem from './subComponents/WorkItem'
import { routes } from '../text/routes'


const Work = () => {
    const data = [
        {
            year: 2021,
            title: "Software Engineer Internee",
            duration: "1 year",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab in voluptate tempora velit! Deleniti autem quae doloribus, excepturi ratione eaque vitae nobis quidem consequatur officia sunt vero commodi rerum."
        },
        {
            year: 2022,
            title: "Junior Developer",
            duration: "1 year",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab in voluptate tempora velit! Deleniti autem quae doloribus, excepturi ratione eaque vitae nobis quidem consequatur officia sunt vero commodi rerum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum iure quo."
        },
        {
            year: 2024,
            title: "Associate Software Engineer",
            duration: "1 year",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab in voluptate tempora velit! Deleniti autem quae doloribus, excepturi ratione eaque vitae nobis quidem consequatur officia sunt vero commodi rerum."
        },
    ]

    return (
        <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' id={routes.work}>
            <h1 className='font-bold font-mono text-center text-2xl md:text-4xl text-gray-800 pb-4'>Work</h1>
            {data.map((item, index) =>
                <WorkItem
                    index={index}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            )}
        </div>
    )
}

export default Work