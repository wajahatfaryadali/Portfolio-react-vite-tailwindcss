import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";



const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
    console.log("handleNav")
  }

  const navLinkList = [
    {
      title: "Home",
      icon: AiOutlineHome,
      address: "#main"
    },
    {
      title: "Work",
      icon: AiOutlineProject,
      address: "#work"
    },
    {
      title: "Projects",
      icon: GrProjects,
      address: "#projects"
    },
    {
      title: "Resume",
      icon: BsPerson,
      address: "#resume"
    },
    {
      title: "Contact",
      icon: AiOutlineMail,
      address: "#contact"
    },
  ]

  return (
    <>
      <AiOutlineMenu className='absolute right-4 top-4 z-[99] cursor-pointer md:hidden' size={22} onClick={handleNav} />

      {
        nav ?
          <div className='w-full h-screen fixed bg-white/90 flex flex-col justify-center items-center'>
            {
              navLinkList.map((link, i) =>
                <a href={link.address} key={i} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150'>
                  <link.icon size={20} />
                  <span className='pl-4'>{link.title}</span>
                </a>
              )
            }
          </div>
          :
          <div className='md:block hidden'>
            <div className='absolue left-8 h-screen fixed bg-white/90 flex flex-col justify-center items-start'>
              {
                navLinkList.map((link, i) =>
                  <a href={link.address} key={i} className='w-auto flex justify-left items-start rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150'>
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