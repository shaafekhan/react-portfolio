import React, {useState} from 'react'
import {AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'

const Sidenav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} color={'white'} className='absolute top-4 right-4 /*set to left */ z-[99] md:hidden'/>
            { nav ? (
                <div className='fixed w-full h-96 bg-black/90 flex flex-col justify-center items-center z-20'>
                    <a href='#main' className='w-[75%] flex justify-center items-center rounded-md shadow-md bg-neutral-600 shadow-neutral-900 m-2 p-3 cursor-pointer hover:scale-105 ease-in duration-20'>
                        <AiOutlineHome size={20} color={'white'} />
                        <span className='pl-4 text-white'>Home</span>
                    </a>
                    <a href='#main' className='w-[75%] flex justify-center items-center rounded-md shadow-md bg-neutral-600 shadow-neutral-900 m-2 p-3 cursor-pointer hover:scale-105 ease-in duration-20'>
                        <GrProjects size={20} color={'white'} />
                        <span className='pl-4 text-white'>Work</span>
                    </a>
                    <a href='#main' className='w-[75%] flex justify-center items-center rounded-md shadow-md bg-neutral-600 shadow-neutral-900 m-2 p-3 cursor-pointer hover:scale-105 ease-in duration-20'>
                        <AiOutlineProject size={20} color={'white'} />
                        <span className='pl-4 text-white'>Projects</span>
                    </a>
                    <a href='#main' className='w-[75%] flex justify-center items-center rounded-md shadow-md bg-neutral-600 shadow-neutral-900 m-2 p-3 cursor-pointer hover:scale-105 ease-in duration-20'>
                        <BsPerson size={20} color={'white'} />
                        <span className='pl-4 text-white'>Resume</span>
                    </a>
                    <a href='#main' className='w-[75%] flex justify-center items-center rounded-md shadow-md bg-neutral-600 shadow-neutral-900 m-2 p-3 cursor-pointer hover:scale-105 ease-in duration-20'>
                        <AiOutlineMail size={20} color={'white'} />
                        <span className='pl-4 text-white'>Contact</span>
                    </a>
                </div>
            )
            : (
                <div></div>
            )
            }
        </div>
    )
}

export default Sidenav
