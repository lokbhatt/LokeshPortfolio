import React from 'react'
import Carousel from './Carousel'

function Projects() {
    return (
        <>
            <section className='bg-[#3e3972] text-[#dff9fb] w-auto h-auto mx-auto m-auto md:p-8 p-3' id="project">
                <h2 className='text-center font-bold md:text-[25px] bg-clip-text text-transparent
                bg-gradient-to-r from-[#2e2efc] to-[#02dcf5] pb-3'>My Projects</h2>
                <div>
                    <Carousel/>
                </div>
            </section>
        </>
    )
}

export default Projects