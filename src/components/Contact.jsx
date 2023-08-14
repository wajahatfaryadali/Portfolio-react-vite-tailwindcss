import React, { Fragment, useState } from 'react'
import { routes } from '../text/routes'
import { IMAGES } from '../assets/images'
import whatsapp from "../assets/social_icons/whatsapp.png"
import github from "../assets/social_icons/github.png"
import twitter from "../assets/social_icons/twitter.png"
import facebook from "../assets/social_icons/facebook.png"
import instagram from "../assets/social_icons/instagram.png"
import linkedin from "../assets/social_icons/linkedin.png"
import gmail from "../assets/social_icons/gmail.png"

const Contact = () => {

    const [formValue, setFormValue] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    })

    const linkList = [
        {
            title: "Linkedin",
            icon: linkedin,
            link: "https://www.linkedin.com/in/wajahatfaryadali",
            linkText: "/wajahatfaryadali",
            type: "web"
        },
        {
            title: "Gmail",
            icon: gmail,
            link: "wajahatfaryadali@gmail.com",
            linkText: "/wajahatfaryadali",
            type: "gmail"
        },
        {
            title: "Github",
            icon: github,
            link: "https://github.com/wajahatfaryadali",
            linkText: "/wajahatfaryadali",
            type: "web"
        },
        {
            title: "X(twitter)",
            icon: twitter,
            link: "https://twitter.com/wajahatfaryad",
            linkText: "/wajahatfaryadali",
            type: "web"
        },
        {
            title: "Facebook",
            icon: facebook,
            link: "https://www.facebook.com/wajahatFaryadAli/",
            linkText: "/wajahatfaryadali",
            type: "web"
        },
        {
            title: "Instagram",
            icon: instagram,
            link: "https://www.instagram.com/wajahatfaryadali/",
            linkText: "/wajahatfaryadali",
            type: "web"
        },
        {
            title: "Whatsapp",
            icon: whatsapp,
            link: "+923084352824",
            linkText: "+92 308 4352 824",
            type: "whatsapp"
        },

    ]

    const inputFields = [
        {
            name: "name",
            value: formValue.name,
            type: "text",
            label: "Name",
            width: "100%"
        },
        {
            name: "phone",
            value: formValue.phone,
            type: "number",
            label: "Phone",
            width: "100%"
        },
        {
            name: "email",
            value: formValue.email,
            type: "email",
            label: "Email",
            width: "100%"
        },
        {
            name: "subject",
            value: formValue.subject,
            type: "text",
            label: "Subject",
            width: "100%"
        },
        {
            name: "message",
            value: formValue.message,
            type: "textarea",
            label: "Message",
            width: "100%"
        },

    ]

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormValue({
            ...formValue,
            [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        alert("Your Message Has been sent to Wajahat!")
        setFormValue({
            name: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
        })
    }

    return (
        <div className='max-w-[1040px] mx-auto text-center text-gray-800 py-12 p-4 md:pl-20' id={routes.contact}>
            <h1 className='font-bold font-mono text-center text-2xl md:text-4xl text-gray-800 pb-4'>
                Contact
            </h1>
            <div className='flex gap-4 flex-col-reverse md:flex-row justify-between '>
                <div className='w-full md:w-[30%] flex gap-4 md:gap-10 flex-row md:flex-col justify-center' id={routes.links}>
                    {linkList.map((item, i) =>
                        <span className='pt-5 md:pt-0 '>
                            <div className='md:flex md:items-end'>

                                {item.type === "web" ?
                                    <>
                                        <a href={item.link}>
                                            <img src={item.icon} alt={`/${item.title}`} key={i} className='w-8 h-8' />
                                        </a>
                                        <a href={item.link} className="text-md text-blue-800 pl-2 hidden md:block">
                                            {item.linkText}
                                        </a>
                                    </>
                                    :
                                    item.type === "gmail" ?
                                        <>
                                            <a href={`mailto:${item.link}`} >
                                                <img src={item.icon} alt={`/${item.title}`} key={i} className='w-8 h-8' />
                                            </a>
                                            <a href={`mailto:${item.link}`} className="text-md text-blue-800 pl-2 hidden md:block">
                                                {item.linkText}
                                            </a>
                                        </>
                                        :
                                        <>
                                            <a href={`//api.whatsapp.com/send?phone=${item.link}&text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND`}>
                                                <img src={item.icon} alt={`/${item.title}`} key={i} className='w-8 h-8' />
                                            </a>
                                            <a href={`//api.whatsapp.com/send?phone=${item.link}&text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND`} className="text-md text-blue-800 pl-2 hidden md:block">
                                                {item.linkText}
                                            </a>
                                        </>
                                }
                            </div>
                        </span>
                    )}

                </div>
                <div className='w-full md:w-[70%] py-0'>
                    <form action="submit" onSubmit={handleSubmit} className=''>
                        {
                            inputFields.map((item, index) =>
                                <div key={index} className={`text-left pb-3`} style={{ width: item.width }}>
                                    <label htmlFor={item.name} className='text-gray-800 font-bold font-mono text-lg'>
                                        {item.label} :
                                    </label>
                                    {item.type === "textarea" ?
                                        <textarea
                                            id={item.name}
                                            name={item.name}
                                            rows="4"
                                            cols="50"
                                            value={item.value}
                                            onChange={handleChange}
                                            className={`w-full border-2 rounded-md border-gray-500 py-2 px-2`}
                                        />
                                        :
                                        <input
                                            type={item.type}
                                            id={item.name}
                                            name={item.name}
                                            value={item.value}
                                            onChange={handleChange}
                                            className={`w-full border-2 rounded-md border-gray-500 py-2 px-2
                                            ${item.type === "number" ?
                                                    "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                                    :
                                                    ""
                                                }`
                                            }
                                        />
                                    }
                                </div>
                            )
                        }
                        <input type='submit' className='py-2 w-full bg-[#1e3a8a] text-white font-bold text-xl rounded-lg cursor-pointer' />
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Contact