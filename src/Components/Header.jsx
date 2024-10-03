import React, { useState } from 'react';
import { AiOutlineRadarChart } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-scroll';

function Header() {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <header className='top-0 mx-auto sticky'>
                <nav className='w-full bg-black h-10 text-white font-bold flex flex-row justify-between items-center md:pl-[125px] md:pr-[125px] pl-2 pr-2'>
                    <div className='flex gap-1'>
                        <AiOutlineRadarChart className='text-white font-bold inline items-center text-[30px]' />
                        <h1 className='inline text-[20px] uppercase'>Lokesh</h1>
                    </div>

                    <div>
                        <ul className='hidden md:flex justify-between gap-8'>
                            <Link to='banner' smooth={true} duration={500} offset={-70}>Home</Link>
                            <Link to="about" smooth={true} duration={500}>About</Link>
                            <Link to="projects" smooth={true} duration={500}>Projects</Link>
                            <Link to="skills" smooth={true} duration={500}>Skills</Link>
                            <Link to="resume" smooth={true} duration={500}>Resume</Link>
                            <Link to="testimonial" smooth={true} duration={500}>Testimonial</Link>
                            <Link to="contact" smooth={true} duration={500}>Contact</Link>
                        </ul>
                    </div>
                    {
                        toggle ?
                            <IoCloseOutline onClick={() => setToggle(!toggle)} className='text-white text-2xl items-center block md:hidden' />
                            :
                            <IoIosMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl items-center block md:hidden' />
                    }

                    {/* responsive menu  */}
                    <ul className={`flex flex-col duration-700 md:hidden fixed bg-black  top-10 pl-3 w-full ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                        <Link to='banner' smooth={true} duration={500} offset={-70}>Home</Link>
                        <Link to="about" smooth={true} duration={500}>About</Link>
                        <Link to="projects" smooth={true} duration={500}>Projects</Link>
                        <Link to="skills" smooth={true} duration={500}>Skills</Link>
                        <Link to="resume" smooth={true} duration={500}>Resume</Link>
                        <Link to="testimonial" smooth={true} duration={500}>Testimonial</Link>
                        <Link to="contact" smooth={true} duration={500}>Contact</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header