import React from 'react';
import { ReactTyped } from "react-typed";
import Lok from '../assets/img/lok.jpg';

function Banner() {
    return (
        <>
            <div className='bg-[#353c75] w-full py-[100px] flex flex-row justify-around mx-auto gap-3'>
                <div className='h-[200px] w-[200px] md:h-auto md:w-auto'>
                    <img className='rounded-full ring ring-[#686de0] hover:delay-75 hover:ring-[#999cf7]' src={Lok} alt="photo" />
                </div>

                <div className='w-[600px]'>
                    <h1 className='text-[#bbc1f2] text-xl md:text-[25px] font-serif'>
                        Hello There
                    </h1>
                    <span className='md:text-[40px] font-bold text-[#bbc1f2] font-sans pb-2'>Im Lokesh Raj Bhatt</span>
                    <p className='text-[#a7a7e0] md:text-[20px]'>Design first what i should begain.</p>
                    <p className='text-[#a7a7e0] md:text-[20px] pb-3'>if you have problem then i have solution so join now.</p>
                    <div className='text-left text-[15px] md:text-[20px] text-[#828ee9] pb-4'>
                        Working on
                        <ReactTyped
                            className='pl-2'
                            strings={[
                                "UI/UX Design",
                                "Web Development",
                                "Content Creation",
                                "App Development",
                            ]}
                            typeSpeed={80}
                            loop={true}
                            backSpeed={20}
                        />
                    </div>

                    <button className='text-[#8ac2c5] bg-[#251eaa] p-3 rounded-lg hover:bg-[#464388]
                        :delay-200 hover:text-white' type='submit'><a href="#project">view my works</a>
                    </button>

                </div>
            </div>
        </>
    )
}

export default Banner