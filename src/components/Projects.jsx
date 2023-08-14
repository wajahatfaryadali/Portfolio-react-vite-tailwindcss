import React from 'react';
import { routes } from '../text/routes';
import ProjectItem from "./subComponents/ProjectItem";
import { IMAGES } from '../assets/images';
const Projects = () => {
    const { nature_1, nature_2, nature_3, nature_4, nature_5 } = IMAGES;
    const projects = [
        {
            title: "Project 1",
            imgSrc: nature_1,
            discription: "Lorem ipsum dolor sit.",
            linkUrl: "",
        },
        {
            title: "Project 2",
            imgSrc: nature_2,
            discription: "Lorem ipsum dolor sit.",
            linkUrl: "",
        },
        {
            title: "Project 3",
            imgSrc: nature_3,
            discription: "Lorem ipsum dolor sit.",
            linkUrl: "",
        },
        {
            title: "Project 4",
            imgSrc: nature_4,
            discription: "Lorem ipsum dolor sit.",
            linkUrl: "",
        },
    ]

    return (
        <div id={routes.project} className='bg-gray-50 md:pl-20 p-4 py-16'>
            <div className='max-w-[1040px] mx-auto text-center text-gray-800'>
                <h1 className='text-2xl md:text-4xl font-mono font-bold pb-4 md:pb-12'>Projects</h1>
                <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-12 justify-center items-center'>
                    {projects?.map((item, index) =>
                        <ProjectItem
                            index={index}
                            title={item.title}
                            imgSrc={item.imgSrc}
                            discription={item.discription}
                            linkUrl={item.linkUrl}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects