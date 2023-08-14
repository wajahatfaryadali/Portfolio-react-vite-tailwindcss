import React, { Fragment } from 'react';
import { IMAGES } from '../assets/images';
import { routes } from '../text/routes'
import { TypeAnimation } from 'react-type-animation';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";




const Main = () => {

    const linkList = [
        {
            title: "Linkedin",
            icon: FaLinkedinIn,
            link: "#",
        },
        {
            title: "Github",
            icon: FaGithub,
            link: "#",
        },
        {
            title: "X(twitter)",
            icon: FaTwitter,
            link: "#",
        },
        {
            title: "Facebook",
            icon: FaFacebookF,
            link: "#",
        },
        {
            title: "Instagram",
            icon: FaInstagram,
            link: "#",
        }
    ]

    return (
        <div id={routes.home}>
            <img src={IMAGES.heroImg2} alt="/img" className='w-full h-screen object-cover' />
            <div className='absolute top-0 w-full h-screen bg-white/50 z-[1]'>
                <div className='max-w-[700px] m-auto w-full h-screen flex flex-col justify-center text-center'>
                    <h1 className='font-mono font-semibold text-2xl md:text-4xl text-gray-800'>Hello! I am Wajahat Ali.</h1>
                    <h2 className='font-mono text-xl md:text-2xl text-gray-800'>I am
                        <TypeAnimation
                            sequence={[
                                ' Software Developer',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                ' Web Developer',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                ' UI Developer',
                                1000,
                                ' React JS Developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex gap-4 md:gap-8 justify-center text-center mt-4 md:mt-6'>
                        {linkList.map((item, i) =>
                            <Fragment key={i}>
                                <item.icon size={26} color='' className='cursor-pointer hover:scale-150 ease-in-out duration-100 text-gray-800' />
                            </Fragment>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main