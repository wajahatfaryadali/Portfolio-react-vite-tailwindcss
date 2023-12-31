import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail, AiOutlineLink, AiOutlineClose } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { routes } from '../text/routes';



const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const navLinkList = [
    {
      title: "Home",
      icon: AiOutlineHome,
      address: routes.home
    },
    {
      title: "Work",
      icon: AiOutlineProject,
      address: routes.work
    },
    {
      title: "Projects",
      icon: GrProjects,
      address: routes.project
    },
    {
      title: "Contact",
      icon: AiOutlineMail,
      address: routes.contact
    },
    {
      title: "Links",
      icon: AiOutlineLink,
      address: routes.links
    },

  ]

  return (
    <>
      {nav ? <AiOutlineClose className='fixed right-4 top-4 z-[99] cursor-pointer md:hidden hover:scale-110 duration-100' size={22} onClick={handleNav} />
        :
        <AiOutlineMenu className='fixed right-4 top-4 z-[99] cursor-pointer md:hidden hover:scale-110 duration-100' size={22} onClick={handleNav} />}

      {
        nav ?
          <div className='w-full h-screen fixed bg-white/90 flex flex-col justify-center items-center z-20'>
            {
              navLinkList.map((link, i) =>
                <a href={`#${link.address}`} onClick={handleNav} key={i} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150'>
                  <link.icon size={20} />
                  <span className='pl-4'>{link.title}</span>
                </a>
              )
            }
          </div>
          :
          <div className='md:block hidden z-20'>
            <div className='fixed left-8 h-screen flex flex-col justify-center items-start z-20'>
              {
                navLinkList.map((link, i) =>
                  <a href={`#${link.address}`} key={i} className='w-auto flex justify-left items-start rounded-full shadow-lg bg-white shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150'>
                    <link.icon size={20} />
                  </a>
                )
              }
            </div>
          </div>

      }

    </>
  )
}

export default Navbar